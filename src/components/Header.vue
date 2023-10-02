<template>
  <header class="container">
      <div class="overlay"  @click="closeMenu" ref="overlay"></div>
    <div class="header_menu-mobile" ref="menuMobile">
        <div class="menu-wrap">
          <img @click="closeMenu" class="close-btn" src="../assets/moneycat/close.svg" alt="">
          <router-link :to="{name: 'Home'}" class="menu-item">
            Đăng ký khoản vay
          </router-link>
          <router-link :to="{name: 'Home'}" class="menu-item">
            Thanh toán khoản vay
          </router-link>
          <router-link :to="{name: 'Home'}" class="menu-item">
            Câu hỏi thường gặp
          </router-link>
          <router-link :to="{name: 'Home'}" class="menu-item">
            Liên hệ
          </router-link>
            <router-link :to="{name: 'Home'}" class="login-btn">
              Đăng nhập!
              <font-awesome-icon icon="fa-regular fa-circle-user" />
            </router-link>
        </div>
      </div>
    <div class="header-wrap">
      <img @click="openMenu" class="header_menu-burger" width="30" src="../assets/moneycat/borger.svg" alt="menu">
      <a href="/">
        <img src="../assets/logo.png" class="logo" alt="">
      </a>
      <div class="d-flex align-items-center menu-desktop">
        <router-link :to="{name: 'Home'}" class="menu-item">
          Đăng ký khoản vay
        </router-link>
        <router-link :to="{name: 'Home'}" class="menu-item">
          Thanh toán khoản vay
        </router-link>
        <router-link :to="{name: 'Home'}" class="menu-item">
          Câu hỏi thường gặp
        </router-link>
        <router-link :to="{name: 'Home'}" class="menu-item">
          Liên hệ
        </router-link>
        <router-link :to="{name: 'Home'}" class="login-btn">
          Đăng nhập!
          <font-awesome-icon icon="fa-regular fa-circle-user" />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
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
.header-wrap {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 16.6px;
  line-height: 20px;
}
.menu-item {
  font-family: 'Montserrat', sans-serif;
  color: #3b3c3e;
  font-weight: 700;
  display: block;
  font-size: 16.6px;
  padding: 10px;
  text-decoration: none;
}
.login-btn {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  margin-left: 50px;
  display: inline-block;
  border-radius: 5px;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  transition: background-color 300ms, color 300ms, box-shadow 300ms, opacity 300ms;
  padding: 5px 15px;
  background: #FFFFFF;
  color: #FF5E62;
  border: 2px solid #FF5E62;
  line-height: 1.5em;
}

.login-btn:hover {
  background: #FF5E62;
  color: #FFFFFF;
}
.logo {
  width: 170px;
  height: auto;
}
.header_menu-burger {
  height: auto;
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
@media (max-width: 991px) {
  .menu-desktop .menu-item {
    display: none;
  }
  .header_menu-mobile .menu-item {
    margin-bottom: 10px;
  }
  .login-btn {
    margin: 0;
  }
  .header_menu-burger {
    display: block;
  }
}

@media (max-width: 500px) { 
  .menu-desktop .login-btn {
    display: none;
  }
}
</style>