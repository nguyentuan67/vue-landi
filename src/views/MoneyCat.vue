<template>
  <header>
    <div class="header">
      <div class="overlay"  @click="closeMenu" ref="overlay"></div>
      <div class="header_menu-mobile" ref="menuMobile">
        <div class="menu-wrap">
          <img @click="closeMenu" class="close-btn" src="../assets/moneycat/close.svg" alt="">
          <router-link class="header-mobile-link" :to="{name: 'Faq'}">Trung tâm hỗ trợ</router-link>
          <router-link class="header-mobile-link" :to="{name: 'About'}">Về chúng tôi</router-link>
          <router-link class="header-mobile-link" :to="{name: 'Faq'}">Xem thêm</router-link>
          <router-link class="header-mobile-link" :to="{name: 'Faq'}">Khiếu nại</router-link>
          <router-link class="header-mobile-link" :to="{name: 'Faq'}">Tin tức</router-link>
        </div>
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
      <div class="header-content container">
        <img @click="openMenu" class="header_menu-burger" src="../assets/moneycat/borger.svg" alt="menu">
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
  name: "MoneyCat",
  data() {
    return {

    }
  },
  methods: {
    closeMenu() {
      this.$refs.menuMobile.classList.remove("active");
      this.$refs.overlay.classList.remove("active")
    },
    openMenu() {
      this.$refs.menuMobile.classList.add("active")
      this.$refs.overlay.classList.add("active")
    }
  },
  watch: {
    '$route.path'() {
      this.closeMenu()
    }
  }
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
.header_menu-burger {
  width: 30px;
  cursor: pointer;
  display: none;
}
.header_menu-mobile {
  visibility: hidden;
  position: fixed;
  left: -280px;
  top: 0;
  bottom: 0;
  z-index: 90;
  padding: 0 16px;
  width: 280px!important;
  -webkit-box-shadow: 10px 0 100px 10px rgba(0,0,0,.2);
  box-shadow: 10px 0 100px 10px rgba(0,0,0,.2);
  background-color: #fff;
  transition: all 0.5s ease-out;
}
.header_menu-mobile.active {
  left: 0;
  visibility: visible;
}
.menu-wrap {
  width: calc(100% - 30px);
  margin-left: 14px;
  display: flex;
  flex-direction: column;
}
.header_menu-mobile .close-btn {
  width: 24px;
  height: 24px;
  margin: 19px 0 27px -6px;
  cursor: pointer;
}
.header_menu-mobile .header-mobile-link {
  text-decoration: none;
  margin-bottom: 40px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  text-transform: uppercase;
  color: #000;
}
.overlay {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 80;
  height: 100%;
  width: 100%;
  background: #000;
  opacity: .5;
  display: none;
}
.overlay.active {
  display: block;
}
.header_menu-mobile .header-btn {
  flex-direction: column;
  margin-left: 0;
  width: 100%;
}
.header_menu-mobile .header-btn a {
  width: 100%;
}
.header_menu-mobile .header-btn .submit-moneycat {
  margin-bottom: 30px;
  margin-right: 0;
  width: 100%;
  height: 48px;
  padding: 0 32px;
  font-size: 18px;
}


@media (max-width: 500px) { 
  .header-logo img {
    width: 100px;
    height: auto;
  }
  .header-content .submit-moneycat.pay-submit {
    display: none;
  }
}

@media (max-width: 991px) {
  .header-menu {
    flex: none;
  }
  .header-menu .header-link {
    display: none;
  }
  .header_menu-burger {
    display: block;
  }
}
</style>