<template>
  <div class="d-flex justify-content-center">
    <div class="wrap">
      <div class="head-icon">
        <img v-if="isVerify" src="../assets/correct-tick.svg" alt="Verify">
        <img v-else src="../assets/incorrect-tick.svg" alt="Not Verify">
      </div>
      <div class="title">
        <span v-if="isVerify">Xác thực thành công</span>
        <span v-else>Xác thực không thành công</span>
      </div>
      <div class="sub-title">
        <span v-if="isVerify">Cảm ơn bạn đã đăng ký, chúng tôi đã xác thực số điện thoại của bạn
        <br> Chúng tôi sẽ sớm liên hệ.</span>
        <span v-else>Có lỗi xảy ra, xác thực tài khoản không thành công
        <br> Xin vui lòng thử lại.</span>
      </div>
      <router-link class="link" to="/">Trở về trang chủ</router-link>
    </div>
  </div>
</template>
<script>
import apiService from '../services/api.service';
import { API_EMAIL_VERIFY } from "../constants";
export default {
  name: "EmailVerify",
  data() {
    return {
      isVerify: null,
    }
  },
  methods: {
    async getVerify() {
      const token = this.$route.query.token;
      const res = await apiService().get(API_EMAIL_VERIFY, {
        params: {
          token,
        }
      });
      if (res.data.error == '0') {
        this.isVerify = true;
      } else {
        this.isVerify = false;
      }
    }
  },
  async created() {
    await this.getVerify();
  }
}
</script>
<style scoped>
.wrap {
  width: 100%;
  max-width: 600px;
  margin: 0 8px;
  margin-top: 100px;
  background-color: #f4f4f4;
  border: 1px solid #e0e0e0;
  padding: 40px 16px 16px;
  text-align: center;
  position: relative;
}
.head-icon {
  width: 80px;
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
}
.head-icon::after {
  position: absolute;
  content: "";
  width: 96px;
  height: 96px;
  background-color: #fff;
  border-radius: 50%;
  top: -8px;
  left: -8px;
  z-index: 1;
}
.head-icon img {
  position: relative;
  width: 100%;
  z-index: 2;
}
.title {
  font-weight: 600;
  font-size: 20px;
}
.sub-title {
  color: #666;
  margin-top: 16px;
}
.link {
  margin-top: 20px;
  display: block;
  color: #333;
  text-transform: uppercase;
  font-size: 16px;
}
</style>