<template>
  <div class="wrap">
    <p class="vib-title">Xác thực khuôn mặt</p>
    <p class="sub-title">
      Để tiếp tục đăng ký, vui lòng chụp ảnh chân dung của bạn để xác thực hồ sơ
    </p>
    <div v-if="!isPermit">
      <p class="">Hãy mở quyền truy cập camera để xác thực khuôn mặt</p>
    </div>
    <div v-if="isSupportWebcam" class="d-flex justify-content-center">
      <div class="capture mt-3">
        <img src="../../assets/photo.png" class="camera-img" alt="camera" />
        <p class="camera-text" @click="startCamera">Chụp ảnh khuôn mặt</p>
      </div>
    </div>
    <div v-if="!isSupportWebcam">
      <h4>Thiết bị không hỗ trợ webcam</h4>
      <p>Hãy sử dụng thiết bị có hỗ trợ webcam để xác thực khuôn mặt</p>
    </div>
    <div class="result-msg">{{ resultMessage }}</div>
    <div class="model" v-show="isOpen">
      <div class="close-btn" @click="closeCamera">
        <font-awesome-icon icon="fa-regular fa-xmark-circle" />
      </div>
      <div class="video-wrap">
        <video id="video" class="video" autoplay></video>
        <div id="face-wrap" class="face-wrap" :class="{inside: !isOutside}"></div>
        <div class="text-guide">{{ textGuide }}</div>
        <ul class="list-face">
          <li class="face">
            <img v-if="imageUrls.left" :src="imageUrls.left" alt="" />
          </li>
          <li class="face">
            <img v-if="imageUrls.right" :src="imageUrls.right" alt="" />
          </li>
          <li class="face">
            <img v-if="imageUrls.up" :src="imageUrls.up" alt="" />
          </li>
          <li class="face">
            <img v-if="imageUrls.straight" :src="imageUrls.straight" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from 'vue-router';
import * as H from "../../face-verify/human.esm.js";
import { registerStore } from "../../stores/register.store";
import { isMobile , VIDEO_SIZE } from "../../face-verify/utils.js";
import { emitter } from "../../utils/emitter";

const router = useRouter()
let firstImg;
const isSupportWebcam = ref(false);
const isPermit = ref(false);
let isOpen = ref(false);
let mediaStream;
let video;
let isOutside = ref(false);
let isVerified = ref(true);
let isFaces = ref(false);
let errorMessage = ref(undefined);
let resultMessage = ref("")
let isSetup = ref(true)
let isRunning = false;
let timeoutId = null;

const orderCapture = ["left", "right", "up", "straight"];
const imageUrls = {
  left: "",
  right: "",
  up: "",
  straight: "",
};
const capturedImages = {
  left: null,
  right: null,
  up: null,
  straight: null,
};
let imgFaces = {
  left: null,
  right: null,
  up: null,
  straight: null,
};
const busy = {
  face: false,
};

let index = ref(0);

const humanConfig = {
  // user configuration for human, used to fine-tune behavior
  modelBasePath: "/models", // models can be loaded directly from cdn as well
  backend: "tensorflow",
  wasmPath: "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm@3.9.0/dist/",
  filter: { enabled: true, equalization: true, flip: false },
  gesture: { enabled: true },
  face: {
    enabled: true,
    detector: { rotation: true, enabled: true, return: true, maxDetected: 2 },
    mesh: { enabled: true },
    attention: { enabled: false },
    iris: { enabled: false },
    description: { enabled: true },
    emotion: { enabled: false },
  },
  debug: true,
  body: { enabled: false },
  hand: { enabled: false },
  object: { enabled: false },
  segmentation: { enabled: false },
};

const result = {
  performance: {},
  hand: [],
  body: [],
  face: [],
  gesture: [],
  object: [],
};
let faceWrap;
let videoSize;
let human = new H.Human(humanConfig);

function checkWebcamSupport() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(async function (stream) {
        console.log("Webcam is supported");
        isSupportWebcam.value = true;
        isPermit.value = true;
        // Đóng luồng media để giải phóng thiết bị
        stream.getTracks().forEach(function (track) {
          track.stop();
        });
      })
      .catch(function (error) {
        console.log("Webcam is not permit");
        isSupportWebcam.value = true;
        isPermit.value = false;
      });
  } else {
    isSupportWebcam.value = false;
    console.log("Webcam is not supported");
  }
}

async function receiveMessage(msg) {
  result[msg.data.type] = msg.data.result;
  busy[msg.data.type] = false;
  rotationHead(result[msg.data.type]);
}

async function runDetection() {
  if (isRunning) return;
  isRunning = true;
  try {
    if (!busy.gesture) {
      busy.gesture = true;
      const result = await human.detect(video, video.width, video.height);
      isSetup.value = false
      receiveMessage({ data: { type: "gesture", result } });
    }
  } catch (e) {
    console.error("Đã xảy ra lỗi trong quá trình chạy runDetection:", e);
  }
  isRunning = false;
  if (timeoutId !== null) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    requestAnimationFrame(runDetection);
  }, 1000);
}

function distance(a, b) {
    return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
}

async function startCamera() {
  isSetup.value = true
  errorMessage.value = "Đang phân tích khuôn mặt"
  video = document.getElementById("video");
  const videoWrap = document.querySelector(".video-wrap")
  videoWrap.style.width = isMobile() ? "360px" : "640px"
  videoWrap.style.height = isMobile() ? "270px" : "480px"
  let stream;
  const constraints = {
    audio: false,
    video: {
      facingMode: "user",
      resizeMode: "crop-and-scale",
      width: isMobile() ? VIDEO_SIZE['360 X 270'].width : 640,
      height: isMobile() ? VIDEO_SIZE['360 X 270'].height : 480,
    },
  };
  // enumerate devices for diag purposes
  navigator.mediaDevices.enumerateDevices();
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    mediaStream = stream;
  } catch (err) {
    console.log(err);
  }
  const promise =
    !stream ||
    new Promise((resolve) => {
      video.onloadeddata = () => {
        isOpen.value = true;
        video.play();
        resolve(true);
      };
    });
  // attach input to video element
  if (stream && video) video.srcObject = stream;
  detectImg();
  runDetection();
  return promise;
}

async function rotationHead(faceResult) {
    faceWrap = document.querySelector(".face-wrap");
    videoSize = document.getElementById("video");
    const x = faceWrap.offsetWidth / 2 - videoSize.offsetWidth / 2;
    const y = (faceWrap.offsetHeight * 70) / 100 - faceWrap.offsetTop;
    const centerX = faceWrap.offsetLeft
    const centerY = faceWrap.offsetTop - (faceWrap.offsetHeight * 0.2)
    const radius = faceWrap.offsetWidth / 2;
    const center = [centerX, centerY];
    const distanceStore = [] ;
    for (let i = 0; i < faceResult.face.length; i++) {
      let boundingBox = faceResult.face[i].mesh;
      const distanceObj = {
        index : i,
        distance : distance(boundingBox[2], center),
        boundingBox: boundingBox,
      };
      distanceStore.push(distanceObj);
    }
    let filterDist = distanceStore.filter(dist => dist.distance < radius)
    if (filterDist.length === 1) {
      const distance_1 = distance(filterDist[0].boundingBox[234], center);
      const distance_2 = distance(filterDist[0].boundingBox[454], center);
      const distance_3 = distance(filterDist[0].boundingBox[10], center);
      const distance_4 = distance(filterDist[0].boundingBox[152], center);
      const maxDistance = Math.max(
        distance_1,
        distance_2,
        distance_3,
        distance_4
      );
      if (maxDistance < radius) {
        isOutside.value = false;
        const filterFace = faceResult.gesture.filter(f => f.face === filterDist[0].index);
        const currentEmbedding = faceResult.face[filterFace[0].face].embedding;
        if (firstImg != undefined) {
          const similarity = human.match.similarity(firstImg[0].embedding, currentEmbedding);
          console.log(similarity);
          if (similarity > 0.5) {
            isVerified.value = true;
            let lenGest = filterFace.length;
            let firstGesture = filterFace[0].gesture;
            let lastGesture = filterFace[lenGest - 1].gesture;
            let direction = orderCapture[index.value];
            if (direction == "left" && firstGesture === "facing left" && lastGesture !== "head up") {
              captureVideo(direction, x, y);
            } else if (direction == "right" && firstGesture === "facing right" && lastGesture !== "head up") {
              captureVideo(direction, x, y);
            } else if (direction == "up" && lastGesture === "head up" && firstGesture === "facing center") {
              captureVideo(direction, x, y);
            } else if (
              direction == "straight" &&
              firstGesture === "facing center"
            ) {
              captureVideo(direction, x, y);
            }
          } else {
          isVerified.value = false
          errorMessage.value = "Không trùng khớp ảnh";
          }  
        }
      } else {
        isOutside.value = true;
        errorMessage.value = "Khuôn mặt ở bên ngoài vị khung ảnh";
      }
    } else {
      isFaces.value = true;
      errorMessage.value = "Có nhiều khuôn mặt trong khung ảnh"
    }
}
async function detectImg() {
  const nidImg = localStorage.getItem("base64ImageCmt")  
  const img = new Image();
  img.src =  "data:image/jpeg;base64," + nidImg;
  return await human.detect(img).then((resultFace) => {
    firstImg = resultFace.face;
  });
}

const closeCamera = () => {
  isOpen.value = false;
  if (mediaStream) {
    const tracks = mediaStream.getTracks();
    tracks.forEach(function (track) {
      track.stop();
    });
  }
  video.pause();
  index.value = 0;
  imageUrls.left = "";
  imageUrls.right = "";
  imageUrls.up = "";
  imageUrls.straight = "";
};
function captureVideo(direction, x, y) {
  const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = faceWrap.offsetWidth;
    canvas.height = faceWrap.offsetHeight;

  context.drawImage(video, x, y);
  canvas.toBlob((blob) => {
    const capturedImage = new File([blob], direction + "-image.jpeg", {
      type: "image/jpeg",
    });
    capturedImages[direction] = capturedImage;
    console.log("Đã chụp và lưu trữ ảnh theo hướng: " + direction);
  }, "image/jpeg");
  //lấy linhk ảnh
  const imageData = canvas.toDataURL("image/png");
  imageUrls[direction] = imageData;
  index.value++;
  if(index.value == 4) {
    submit()
  }
}



async function submit() {
  const imageLives = []
  for(let direction in imageUrls) {
    imageLives.push(imageUrls[direction].replace(/^data:image\/(png|jpeg);base64,/, ""))
  }
  emitter.emit("loading", true)
  const res = await registerStore().apiFaceVerification(imageLives)
  closeCamera()
  emitter.emit("loading", false)
  if (res.error == '0') {
    resultMessage = ""
    router.push({name: 'VibSuccess'})
  } else if (res.error == '5') {
    resultMessage = res.detail
  } else {
    resultMessage = 'Có lỗi xảy ra vui lòng thử lại'
  }
}
onMounted(checkWebcamSupport);

const textGuide = computed(() => {
  if (index.value <= 3 && !isOutside.value && !isSetup.value && isVerified.value) {
    if (index.value === 0) return "Vui lòng hướng mặt sang trái";
    if (index.value === 1 ) return "Vui lòng hướng mặt sang phải";
    if (index.value === 2) return "Vui lòng hướng mặt lên trên";
    if (index.value === 3 ) return "Vui lòng hướng mặt chính giữa";
  } else if (index.value > 3) {
    return "Đang xử lý";
  } else {
    return errorMessage.value;
  }
})

</script>
<style scoped>
.capture {
  padding: 18px 14px;
  border: 2px dashed #333;
  text-align: center;
}
.camera-img {
  text-align: center;
  height: 30px;
  margin-bottom: 14px;
}
.camera-text {
  text-decoration: underline;
  margin-bottom: 0;
  cursor: pointer;
  font-weight: 600;
}
.camera-text:hover {
  color: #4d4f97;
}
.model {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgb(81 94 123 / 50%);
}
.close-btn {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 34px;
  z-index: 12;
  color: #fff;
  cursor: pointer;
}
.video {
  position: absolute;
  transform: scaleX(-1);
  margin: auto;
}
.canvas {
  position: absolute;
}
.face-wrap {
  position: absolute;
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  border: 3px solid #db2727;
  background: transparent;
  border-radius: 50%;
}
.face-wrap.inside {
  border-color: rgb(28, 201, 28);
}
.video-wrap {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.list-face {
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  position: absolute;
  bottom: 40px;
  width: 100%;
}
.list-face .face {
  margin: 0 8px;
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 50%;
  overflow: hidden;
}
.list-face .face img {
  width: 100%;
  height: 100%;
}
.text-guide {
  width: 100%;
  margin: 0;
  position: absolute;
  text-align: center;
  bottom: 100px;
  color: #fff;
  background-color: #333;
  padding: 4px 0;
  font-weight: 500;
  font-size: 18px;
}
.result-msg {
  margin-top: 24px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: #ff5454;
}
</style>
