<template>
  <div class="request-image">
    <div class="touch-tone__main-block">
      <div v-if="encodeImg" class="touch-tone__text-blog">
        <div class="touch-tone__title">Nguyễn Thu Giang</div>
        <div class="touch-tone__text">Cảm ơn, ảnh đã tải lên thành công!</div>
      </div>
      <div v-else>
      <div class="touch-tone__text-blog">
        <div class="touch-tone__title">
          Bây giờ, bạn hãy chụp ảnh mặt trước/sau của CMND/CCCD theo các bước sau:
        </div>
        <div class="touch-tone__text">
          1. Đặt <span>CMND/CCCD</span> lên một mặt phẳng đồng màu. <br />2. Đảm
          bảo <span>CMND/CCCD</span> chiếm gần hết ảnh và tất cả các góc bên
          trong khuôn. <br />3. Không sử dụng đèn pin và kiểm tra lại hình chụp
          để đảm bảo rằng tất cả các chi tiết đều thấy rõ ràng.
        </div>
      </div>
      <div class="wrapped-block">
        <img
          src="../assets/id_example-cccd.png"
          alt="Encoded Image"
          class="img-example"
        />
      </div>
    </div>
    </div>
    <input hidden id="imageFront" type="file" @change="(e) => handleFileUpload(e, 'front')" />
    <label v-if="encodeFrontImg" class="button-select" for="imageFront"
      ><img src="../assets/photo.png"> Tải lại</label>
    <label v-else class="button-select" for="imageFront"
      ><img src="../assets/photo.png"> Tải hình mặt trước CMND/CCCD</label>
    <!-- <button @click="encodeImage">Encode Image</button> -->
    <div v-if="encodeFrontImg">
      <img class="preview-image" :src="encodeFrontImg" alt="Encoded Image" />
    </div>
    <div class="mt-4"></div>
    <input hidden id="imageBack" type="file" @change="(e) => handleFileUpload(e, 'back')" />
    <label v-if="encodeBackImg" class="button-select" for="imageBack"
      ><img src="../assets/photo.png"> Tải lại</label>
    <label v-else class="button-select" for="imageBack"
      ><img src="../assets/photo.png"> Tải hình mặt sau CMND/CCCD</label>
    <!-- <button @click="encodeImage">Encode Image</button> -->
    <div v-if="encodeBackImg">
      <img class="preview-image" :src="encodeBackImg" alt="Encoded Image" />
    </div>
  </div>
</template>
<script>
import InputComp from "./InputComp.vue";
import SelectComp from "./SelectComp.vue";

export default {
  components: {
    SelectComp,
    InputComp,
  },
  data() {
    return {
      selectedFile: null,
      encodeFrontImg: null,
      encodeBackImg: null,
    };
  },
  methods: {
    handleFileUpload(event, type) {
      const file = event.target.files[0];
      this.encodeImage(file, type);
    },
    encodeImage(file, type) {
      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          const base64Image = reader.result.split(",")[1];
          type == 'front'
          ? this.encodeFrontImg = "data:image/jpeg;base64," + base64Image
          : this.encodeBackImg = "data:image/jpeg;base64," + base64Image
        };

        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
<style scoped>
.request-image {
  margin-top: 20px;
}
.touch-tone__main-block {
  background: #fff7eb;
  border-radius: 10px;
  /* box-shadow: 8px 8px 16px #e8d8c9, -8px -8px 16px #fff; */
  padding: 18px 18px 5px;
  max-width: 500px;
  z-index: 2;
  margin-bottom: 5px;
}
.touch-tone__main-block .touch-tone__title {
  font-feature-settings: "kern" off;
  color: #413182;
  font-size: 16.6px;
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0.015em;
  line-height: 17px;
  margin-bottom: 10px;
}
.touch-tone__main-block .touch-tone__text {
  font-feature-settings: "kern" off;
  color: #413182;
  font-size: 16.6px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.015em;
  line-height: 17px;
  /* box-sizing: inherit; */
}
.touch-tone__main-block span {
  font-weight: 900;
}
.wrapped-block {
  padding: 10px;
  position: relative;
  z-index: 0;
  max-height: 500px;
  max-width: 500px;
}
.img-example {
  margin: 5px 0 10px;
  width: 50%;
}
.preview-image {
  margin-bottom: 20px;
  margin-left: 10px;
  margin-top: 10px;
  max-height: 250px;
  max-width: 250px;
}
.button-select {
  bottom: none;
  outline: none;
  color: #008000;
  border-radius: 8px;
  text-align: center;
  padding: 15px 15px;
  font-size: 16.6px;
  font-weight: normal;
  font-family: "Montserrat", sans-serif;
  background: #d0f0c0;
}
</style>