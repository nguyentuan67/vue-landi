<template>
  <div class="body">
    <div class="card">
      <div style="border-radius: 200px; height: 200px; width: 200px; background: #f8faf5; margin: 0 auto;">
        <i class="checkmark">✓</i>
      </div>
      <h1>Thành công</h1>
      <p>Chúng tôi đã nhận được yêu cầu của bạn;
        <br>Vui lòng kiểm tra email để xác thực tài khoản
      </p>
      <router-link class="routerlink" to="/moneycat">Quay lại trang chủ</router-link>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {}
    }
};
</script>
<style scoped>
.body {
  text-align: center;
  padding: 40px 0;
  background: #ebf0f5;
}
.card {
  background: white;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 2px 3px #c8d0d8;
  display: inline-block;
  margin: 0 auto;
}
h1 {
  color: #88b04b;
  font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
  font-weight: 900;
  font-size: 40px;
  margin-bottom: 10px;
}
p {
  color: #404f5e;
  font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
  font-size: 20px;
  margin: 0;
}
i {
  color: #9abc66;
  font-size: 100px;
  line-height: 200px;
  margin-left: -10px;
}
.routerlink:hover {
    text-decoration: none;
}
</style>