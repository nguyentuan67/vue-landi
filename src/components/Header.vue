<template>
  <header class="container">
    <div class="header-wrap">
      <a href="/">
        <img src="../assets/logo.png" alt="">
      </a>
      <div class="d-flex align-items-center">
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
  name: "Header"
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
  margin-left: 80px;
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
</style>