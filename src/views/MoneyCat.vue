<template>
  <header>
    <div class="header">
      <div class="header-content container">
        <div class="header-logo">
          <router-link to="/moneycat">
            <img src="../assets/moneycat/logo.svg" alt="">
          </router-link>
        </div>
        <div class="header-menu">
          <router-link class="header-link" :to="{name: 'Faq'}">Trung tâm hỗ trợ</router-link>
          <router-link class="header-link" :to="{name: 'About'}">Về chúng tôi</router-link>
          <router-link class="header-link" :to="{name: 'Faq'}">Xem thêm</router-link>
          <div class="header-btn">
            <router-link :to="{name: 'PhoneInput'}">
              <button class="submit-moneycat pay-submit">
                Thanh toán
              </button>
            </router-link>
            <router-link :to="{name: 'Login'}">
              <button class="submit-moneycat">
                Đăng nhập
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="spacer"></div>
  <div class="body">
    <router-view></router-view>
  </div>
  <footer>
    <div class="container">
      <div class="footer-contact">

      </div>
      <div class="footer-info row">
        <div class="col-12 col-md-4">
          <div class="info-wrap mt-4">
            <div class="footer-info-title">
              Liên hệ
            </div>
            <div class="info-text">
              <img class="footer-info-img" src="../assets/moneycat/mobile_icon.png" alt="">
              1900636727
            </div>
            <div class="info-text">
              <img class="footer-info-img" src="../assets/moneycat/contact_icon.png" alt="">
              8:30 - 18:00 Thứ Hai - Chủ Nhật
            </div>
            <div class="info-text">
              <img class="footer-info-img" src="../assets/moneycat/email_icon.png" alt="">
              Giải đáp qua Email
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="info-wrap mt-4">
            <div class="footer-info-title">
              CÁC TÀI LIỆU
            </div>
            <div class="info-text">
              Chính sách quyền riêng tư
            </div>
            <div class="info-text">
              Điều khoản, điều kiện
            </div>
            <div class="info-text">
              Câu hỏi thường gặp
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="info-wrap mt-4">
            <div class="footer-info-title">
              Về chúng tôi
            </div>
            <div class="info-text">
              Về MoneyCat
            </div>
            <div class="info-text">
              Về MoneyCat AI Technology
            </div>
            <div class="info-text">
              Vay như thế nào
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "MoneyCat"
}
</script>
<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 30;
}
.header {
  background: #fff;
  width: 100%;
  min-height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.header-content {
  max-width: 920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-logo {
  font-size: 1em;
  font-weight: 700;
  margin-right: 20px;
  padding: 3px;
  text-transform: uppercase;
  cursor: pointer;
}
.header-logo img {
  height: 32px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.header-menu {
  flex: 1;
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
}
.header-link {
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  margin-right: 25px;
  font-size: 12px;
}
.header-btn {
  display: flex;
  margin-left: auto;
}
.submit-moneycat.pay-submit {
  background-color: #00BDB4;
  margin-right: 15px;
}
.spacer {
  width: 100%;
  height: 71px;
}

.body {
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
}

footer {
  width: 100%;
  height: 100%;
  background: #e6e6e6;
  padding: 20px 0;
}
.footer-info-title {
  font-weight: 700;
  margin-bottom: 15px;
  text-transform: uppercase;
}
.footer-info-img {
  width: 17px;
  margin-right: 30px;
}
.info-text {
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
  color: #000;
}
</style>