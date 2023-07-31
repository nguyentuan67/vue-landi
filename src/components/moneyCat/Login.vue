<template>
    <div class="cabinet-top-panel">
        <div class="main-text-cabinet">KHOẢN VAY TIẾP THEO HẠN MỨC LÊN TỚI 10,000,000VND</div>
        <div class="small-text-cabinet">Thời gian duyệt hồ sơ chỉ trong 5 phút dành cho khách hàng đăng ký vay lại. Vui lòng đăng nhập phía dưới.</div>
    </div>
    <section class="login-section">
        <form class="login">
            <div class="login-content">
                <div class="login-input-block">
                    <InputComp
                    v-model="phoneNumber"
                    name="phoneNumber"
                    placeholder="0990 000 000"
                    :rules="phoneRules"
                    label="Nhập số điện thoại:"/>
                    <div class="login-get-password">
                        <button class="button" id="phone-login">Nhận mã xác nhận qua cuộc gọi:</button>
                    </div>
                    <p class="login-text">Chúng tôi sẽ gọi cho bạn để thông báo mã xác nhận, vui lòng nhấc máy!
                        Nếu không nhận được cuộc gọi có mã, vui lòng nhấn lại nút.</p>
                    <InputComp
                    v-model="confirmCode"
                    name="confirmCode"
                    placeholder="1234"
                    :rules="confirmCodeRules"
                    label="Nhập mã xác nhận từ cuộc gọi"/>    
                    <div class="login-autorization">
                        <button class="button">Đăng nhập</button>
                    </div>
                    <div class="kalapa-text">
                        Bằng cách nhập mã OTP và tiếp tục, bạn xác nhận đã đọc và đồng ý với toàn bộ nội dung được quy định tại
                        <a class="orange-text" href="https://moneycat.vn/page/terms-and-conditions">Điều khoản và Điều kiện</a> và
                        <a class="orange-text" href="https://moneycat.vn/page/privacy-policy">Chính sách quyền riêng tư</a> của Moneycat.
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>
<script>
import InputComp from './InputComp.vue'
import SelectComp from './SelectComp.vue'
export default {
    components: {
        InputComp,
        SelectComp
    },
    data() {
        return {
            phoneNumber: "",
            confirmCode: "",
            phoneRules: [
                value => !!value || 'Hãy điền thông tin',
                // value => 
            ],
            confirmCodeRules: [
                value => !!value || 'Hãy điền thông tin'
            ]
        }
    }
}
</script>
<style scoped>
.cabinet-top-panel {
    width: 100%;
    text-align: center;
}
.cabinet-top-panel .main-text-cabinet {
    font-size: 35px;
    color: #ed7d31;
    margin: 40px 0;
    display: block;
}
@media (max-width: 600px) {
    .cabinet-top-panel .main-text-cabinet {
        font-size: 18px;
        color: #ed7d31;
        margin: 20px 0;
        display: block;
    }
}
.cabinet-top-panel .small-text-cabinet {
    font-size: 18px;
    color: #595959;
    margin-bottom: 20px;
}
@media (max-width: 600px) {
    .cabinet-top-panel .small-text-cabinet {
        font-size: 14px;
        color: #595959;
        margin-bottom: 10px;
    }
}
.login {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.login-content {
    padding: 20px 40px;
    width: calc(95% - 80px);
    max-width: 750px;
    border: 1px solid #b0b0b0;
    margin: 10px 0;
    border-radius: 5px;
}
.login-input-block {
    margin: 10px 0;
    width: 100%;
}
.login-get-password {
    width: 60%;
    max-width: 280px;
    margin-bottom: 10px;
    margin-top: 10px;
}
@media (max-width: 450px) {
    .login-get-password {
        width: 100%;
        max-width: 280px;
        margin-bottom: 10px;
        margin-top: 10px;
    }
}
.button {
    border-radius: 25px;
    width: 100%;
    height: 50px;
    border: none;
    background: #ff7f00;
    font-size: 1em;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
    position: relative;
    vertical-align: inherit;
}
@media (max-width: 500px) {
    .button-empty, .button {
        font-size: .8em;
    }
}
.login-text {
    font-size: 1em;
    color: #b2b2b2;
    margin-bottom: 10px;
    vertical-align: inherit;
    /* font-family: mulish!important; */
}
.login-autorization {
    margin-top: 10px;
    width: 100%;
    vertical-align: inherit;
}
.login-input-block .kalapa-text {
    margin-top: 20px;
    color: #595959;
}
.orange-text {
    text-decoration: none;
    color: #ff7f00;
}
</style>