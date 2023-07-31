<template>
    <p class="vib-title mt-20">Xác thực giấy tờ</p>
    <p class="sub-title mt-20">Để hoàn tất quá trình đăng ký, vui lòng chụp bản gốc CMND/CCCD của bạn để xác thực hồ sơ</p>
    <div class="row mt-20">
        <div class="col-sm-4 col-12 spa_s">
            <div class="title-back">Mặt trước</div>
            <div class="photo-block-preview">
                <img v-if="!encodeFrontImg" src="../../assets/photo.svg" alt="front">
                <img v-if="encodeFrontImg" class="uploaded-image" :src="encodeFrontImg" alt="encoded image">
            </div>
            <input hidden id="imageFront" accept="image/gif, image/jpeg, image/png, image/jpg" type="file" @change="(e) => handleFileUpload(e, 'front')"/>
            <label for="imageFront" class="button-upload-photo">Bấm vào đây <br> để tải ảnh</label>
            <div class="error-valid">{{ errorMessageFront }}</div>
        </div>
        
        <div class="col-sm-4 col-12 spa_s">
            <div class="title-back">Mặt sau</div>
            <div class="photo-block-preview">
                <img v-if="!encodeBackImg" src="../../assets/photo.svg" alt="back">
                <img v-if="encodeBackImg" class="uploaded-image" :src="encodeBackImg" alt="encoded image">
            </div>
            <input hidden id="imageBack" accept="image/gif, image/jpeg, image/png, image/jpg" type="file" @change="(e) => handleFileUpload(e, 'back')"/>
            <label for="imageBack" class="button-upload-photo">Bấm vào đây <br> để tải ảnh</label>
            <div class="error-valid">{{ errorMessageBack }}</div>
        </div>
        <div class="error-valid">{{ errorMessage }}</div>
    </div>
    <div v-if="isLoading" class="loading-img">
        Đang tải ảnh lên...
    </div>
    <p class="note-title">Lưu ý:</p>
    <p class="sub-title">Hình chụp rõ ràng, thấy toàn bộ nội dung của bản gốc CMND/CCCD</p>
</template>
<script>
import { registerStore } from '../../stores/register.store';
export default {
    data() {
        return {
            encodeFrontImg: null,
            encodeBackImg: null,
            base64Front: null,
            base64Back: null,
            errorMessageFront: "",
            errorMessageBack: "",
            errorMessage: "",
            extractedInfo: null,
            isValid: false,
            isLoading: false,
            errorMessage: "",
        }
    },
    methods: {
        async submit() {
            if (!!this.base64Front && !!this.base64Back) {
                this.isValid = true
            }
            if(this.isValid) {
                // call api
                const data = {
                    imageFront: this.base64Front,
                    imageBack: this.base64Back
                }
                const response = await registerStore().apiOcr(data);
                if (response.error == '0') {
                    return true;
                } else if (response.error == '4') {
                    this.errorMessage = response.detail
                    return false;
                } else {
                    this.errorMessage = "Có lỗi xảy ra, vui lòng thử lại"
                    return false;
                }
            } else {
                if (!this.base64Front) {
                    this.errorMessageFront = "Vui lòng tải lên mặt trước CCCD."
                } else if (this.base64Front.size > 5 * 1024 *1024) {
                    this.errorMessageFront = "Kích thước hình ảnh vượt quá giới hạn cho phép là 5MB."
                } else {
                    this.errorMessageFront = ""
                }

                if (!this.base64Back) {
                    this.errorMessageBack = "Vui lòng tải lên mặt sau CCCD."
                } else if (this.base64Back.size > 5 * 1024 *1024) {
                    this.errorMessageBack = "Kích thước hình ảnh vượt quá giới hạn cho phép là 5MB."
                } else {
                    this.errorMessageBack = ""
                }
                return this.isValid;
            }
        },
        async handleFileUpload(event, type) {
            type == 'front' ? this.errorMessageFront = "" : this.errorMessageBack = "";
            this.isLoading = true;
            const file = event.target.files[0];
            this.encodeImage(file, type);
            this.isLoading = false;
        },
        encodeImage(file, type) {
            if(file) {
                const reader = new FileReader();
                reader.onload = () => {
                    const base64Image = reader.result.split(",")[1];
                    if(type == 'front') {
                        this.encodeFrontImg = "data:image/jpeg;base64," + base64Image,
                        this.base64Front = base64Image
                        console.log(this.encodeFrontImg);
                    }
                    else if(type == 'back') {
                        this.encodeBackImg = "data:image/jpeg;base64," + base64Image,
                        this.base64Back = base64Image
                        console.log(this.encodeBackImg);
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    }
}
</script>
<style scoped>
.photo-block-preview {
    border-radius: 5px;
    border: solid 1px #255fbf;
    background-color: #fff;
    max-width: 200px;
    width: 100%;
    height: 159px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
}
.button-upload-photo {
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    max-width: 200px;
    width: 100%;
    padding: 4px 0;
    background-color: #245fbf;
    cursor: pointer;
}
.uploaded-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 5px;
    padding: 5px;
}
.note-title {
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    margin-top: 30px;
    margin-bottom: 0;
}
.error-valid {
    color: #ff5454;
    margin-top: 10px;
    font-size: 16px;
    line-height: 18px;
    font-family: 'Josefin Sans', sans-serif;
}
.title-back {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    color: #000;
    max-width: 200px;
    width: 100%;
}
.loading-img {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(81 94 123 / 50%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 24px;
    z-index: 99;
}
</style>