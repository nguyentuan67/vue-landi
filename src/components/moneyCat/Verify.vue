<template>
    <div class="row">
        <div class="col-md-5 col-sm-5">
            <div class="step">
                <div class="form-group field-front">
                    <div class="photo-block">
                        <div class="photo-block-header">Tải CMND mặt trước*</div>
                        <div class="row">
                            <div class="col-6">
                                <div class="photo-example">
                                    <img src="../../assets/forms-IDcard.jpg" alt="front">
                                </div>
                                <div class="bottom-text">
                                    <div class="orange-header">KIỂM TRA</div>
                                    Mặt trước của CMND của bạn, rõ ràng và có thể nhìn thấy rõ. Không có tài liệu nào khác
                                </div>
                            </div>
                            <div class="col-6 center-fix-photo">
                                <div class="photo-block-preview">
                                    <img v-if="!encodeFrontImg" src="../../assets/photo.svg" alt="preview1">
                                    <img v-if="encodeFrontImg" class="uploaded-image" :src="encodeFrontImg" alt="encoded image">
                                </div>
                                <input hidden id="imageFront" type="file" @change="(e) => handleFileUpload(e, 'front')"/>
                                <label for="imageFront" class="button-upload-photo">Bấm vào đây <br> để tải ảnh</label>
                                <p class="message">{{ msgImgFront }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group field-back">
                    <div class="photo-block">
                        <div class="photo-block-header">Tải CMND mặt sau*</div>
                        <div class="row">
                            <div class="col-6">
                                <div class="photo-example">
                                    <img src="../../assets/forms-IDcard2.jpg" alt="back">
                                </div>
                                <div class="bottom-text">
                                    <div class="orange-header">KIỂM TRA</div>
                                    Mặt sau của CMND của bạn, rõ ràng và có thể nhìn thấy rõ Không có tài liệu nào khác
                                </div>
                            </div>
                            <div class="col-6 center-fix-photo">
                                <div class="photo-block-preview">
                                    <img v-if="!encodeBackImg" src="../../assets/photo.svg" alt="preview2">
                                    <img v-if="encodeBackImg" class="uploaded-image" :src="encodeBackImg" alt="encoded image">
                                </div>
                                <input hidden id="imageBack" type="file" @change="(e) => handleFileUpload(e, 'back')"/>
                                <label for="imageBack" class="button-upload-photo">Bấm vào đây <br> để tải ảnh</label>
                                <p class="message">{{ msgImgBack }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group field-face">
                    <div class="photo-block">
                        <div class="photo-block-header">Chụp ảnh chân dung của bạn với CMND</div>
                        <div class="row">
                            <div class="col-6">
                                <div class="photo-example">
                                    <img src="../../assets/forms-selfie.jpg" alt="face">
                                </div>
                                <div class="bottom-text">
                                    <div class="orange-header">KIỂM TRA</div>
                                    Chụp ảnh ở nơi có thể nhìn thấy rõ khuôn mặt và CMND của bạn (như trong ảnh)*
                                </div>
                            </div>
                            <div class="col-6 center-fix-photo">
                                <div class="photo-block-preview">
                                    <img v-if="!encodeSelfieImg" src="../../assets/photo.svg" alt="preview3">
                                    <img v-if="encodeSelfieImg" class="uploaded-image" :src="encodeSelfieImg" alt="encoded image">
                                </div>
                                <input hidden id="imageSelfie" type="file" @change="(e) => handleFileUpload(e, 'selfie')"/>
                                <label for="imageSelfie" class="button-upload-photo">Bấm vào đây <br> để tải ảnh</label>
                                <p class="message">{{ msgImgSelf }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="photo-block">
                    <h2 class="title-otp-block">Xác nhận số điện thoại</h2>
                    <div class="otp-text">Chung toi se gui ban ma xac minh qua cuoc goi hoac tin nhan.</div>
                    <div class="otp-button-send">
                        <button class="button" type="button" @click="showInput">Nhận mật khẩu</button>
                    </div>
                    <div v-if="isInputVisible" class="otp-input">
                        <span class="otp-label-in-text">Xin vui lòng, nhập mã OTP bạn nhận được</span>
                        <input type="tel" class="form-input" autocomplete="off" inputmode="numeric" placeholder="_ _ _ _">
                    </div>
                    <div v-if="isInputVisible" class="kalapa-text">
                        Bằng cách nhập mã OTP và tiếp tục, bạn xác nhận đã đọc và đồng ý với toàn bộ nội dung được quy định tại
                        <a href="https://moneycat.vn/page/terms-and-conditions">Điều khoản và Điều kiện</a> và
                        <a href="https://moneycat.vn/page/privacy-policy">Chính sách quyền riêng tư</a> của MoneyCat.
                    </div>
                </div>
                <p class="message">{{ errorMessage }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { moneycatStore } from '../../stores/moneycatStore';
export default {
    data() {
        return {
            encodeFrontImg: null,
            encodeBackImg: null,
            encodeSelfieImg: null,
            base64Front: null,
            base64Back: null,
            base64SelfieImg: null,
            msgImgFront: "",
            msgImgBack: "",
            msgImgSelf: "",
            errorMessage: "",
            isInputVisible: false
        }
    },
    methods: {
        showInput() {
            this.isInputVisible = true;
        },
        handleFileUpload(event, type) {
            const file = event.target.files[0];
            this.encodeImage(file, type);
        },
        encodeImage(file, type) {
            if(file) {
                const reader = new FileReader();
                reader.onload = () => {
                    const base64Image = reader.result.split(",")[1];
                    if(type == 'front') {
                        this.base64Front = base64Image
                        this.msgImgFront = "";
                        this.encodeFrontImg = "data:image/jpeg;base64," + base64Image
                    }
                    else if(type == 'back') {
                        this.base64Back = base64Image
                        this.msgImgBack = "";
                        this.encodeBackImg = "data:image/jpeg;base64," + base64Image
                    }
                    else if(type == 'selfie') {
                        this.base64SelfieImg = base64Image
                        this.msgImgSelf = ""
                        this.encodeSelfieImg = "data:image/jpeg;base64," + base64Image
                    }
                };
                reader.readAsDataURL(file);
            }
        },
        async submit() {
            this.errorMessage = ""
            let isValid = true;
            if (!this.base64Front) {
                isValid = false;
                this.msgImgFront = "Vui lòng chọn ảnh"
            }
            if (!this.base64Back) {
                isValid = false;
                this.msgImgBack = "Vui lòng chọn ảnh"
            }
            if (!this.base64SelfieImg) {
                isValid = false;
                this.msgImgSelf = "Vui lòng chọn ảnh"
            }
            if (isValid) {
                const data = {
                    imageFront: this.base64Front,
                    imageBack: this.base64Back,
                }
                const res = await moneycatStore().ekycOcr(data);
                if(res.error == "0") {
                    this.$router.push({ name: 'Success' })
                    // return true;
                } else if (res.error == 2) {
                    this.errorMessage = "Có lỗi xảy ra, xin vui lòng thử lại"
                    return false
                } else {
                    this.errorMessage = res.detail;
                    return false
                }
            } else {
                return false
            }
        }
    }
}
</script>
<style scoped>
.step {
    margin: 12px 0;
    margin-bottom: 0;
}
.photo-block {
    border-radius: 5px;
    border: solid 1px #c4c4c4;
    background-color: #f8f8f8;
    padding: 14px;
    margin: 25px 0;
}
.photo-block-header {
    font-size: 18px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
    margin-top: 5px;
    margin-bottom: 21px;
}
.bottom-text {
    font-size: 14px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #000;
}
.orange-header {
    margin-top: 15px;
    font-weight: 700;
    color: #ff7f00;
}
.photo-example img {
    width: 100%;
    max-width: 148px;
}
.photo-block-preview {
    border-radius: 5px;
    border: solid 1px #ff7f00;
    background-color: #efffef;
    max-width: 146px;
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
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    max-width: 146px;
    width: 100%;
    padding: 4px 0;
    background-color: #ff7f00;
}
.title-otp-block {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
    margin-top: 5px;
    margin-bottom: 10px;
}
.otp-text {
    width: 100%;
    text-align: center;
    font-size: 14px;
    display: inline-block;
    margin-bottom: 17px;
}
.uploaded-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 5px;
    padding: 5px;
}
.otp-input {
    max-width: 360px;
    font-size: 16px;
    text-align: center;
}
.form-input {
    text-align: left;
    padding: 25px 11px 10px;
    font-weight: 700;
    border-radius: 5px;
    border: solid 1px #d0d0d0;
    margin-bottom: 10px;
    min-width: 240px;
}
.otp-button-send {
    margin: 0 0 15px;
    max-width: 360px;
    font-size: 16px;
    text-align: center;
}
.button {
    border-radius: 5px;
    border: none;
    background: #ff7f00;
    color: #fff;
    font-weight: 700;
    padding: 15px 35px;
    min-width: 240px;
}
.otp-label-in-text {
    position: absolute;
    font-size: 12px;
    color: #898989;
    padding: 5px 4px 0;
}
.kalapa-text {
    margin-top: 20px;
    text-align: center;
    font-size: 16px;
}
.message {
  color: #ff5454;
  margin-top: 4px;
  font-size: 12.8px;
}
</style>