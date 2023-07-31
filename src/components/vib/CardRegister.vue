<template>
  <p class="vib-title mt-20">Đăng ký thẻ tín dụng VIB Super Card</p>
  <div class="mt-20">
    <div class="row">
      <div class="col-sm-6 col-12 d-flex align-items-center">
        <div class="flex-grow-1">
          <input id="1" name="1" v-model="gender" value="1" type="radio" class="me-2">
          <label for="1" class="custom-control-label">Nam</label>
        </div>
        <div class="flex-grow-1">
          <input id="2" name="1" v-model="gender" value="0" type="radio" class="me-2">
          <label for="2" class="custom-control-label">&#160;Nữ</label>
        </div>
      </div>
      <div class="col-sm-6 col-12">
        <InputComp v-model="fulllName" label="Họ và tên" :rules="inputNameRules" ref="fulllName"/>
      </div>
    </div>
  </div>
  <div class="mt-20">
    <div class="row">
      <div class="col-sm-6 col-12">
        <InputComp v-model="phone" label="Số điện thoại" :rules="inputPhoneRules" ref="phone" length="10"/>
      </div>
      <div class="col-sm-6 col-12">
        <InputComp 
          v-model="email" 
          label="Email" 
          :rules="inputMailRules" 
          ref="email"
          @input="errorEmail = ''"
        />
        <div class="error-message">{{ errorEmail }}</div>
      </div>
    </div>
  </div>
  <div class="note">Bằng việc nhấn tiếp tục, bạn đồng ý Điều khoản điều kiện phát hành thẻ và Biểu phí tại đây</div>
  <div class="error-message">{{ errorMessage }}</div>
</template>
<script>
import InputComp from "./InputComp.vue"
import { validateForm } from "../../utils/validateForm";
import { registerStore } from "../../stores/register.store";
export default {
  components: {
    InputComp,
  },
  data() {
    return {
      fulllName: "",
      phone: "",
      email: "",
      gender: 1,
      inputNameRules: [
        (data) => !!data || "Họ và tên không được để trống",
      ],
      inputPhoneRules: [
        (data) => !!data || "Số điện thoại không được để trống",
        (data) => {
          const regex = /^0\d{9}$/;
          return regex.test(data) || "Số điện thoại không hợp lệ"
        }
      ],
      inputMailRules: [
        (data) => !!data || "Email không được để trống",
        (data) => {
          const emailRegex = /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
          return emailRegex.test(data) || "Email không đúng định dạng"
        },
        (data) => {
          const emailLength = /^.{1,50}$/
          return emailLength.test(data) || "Email vượt quá 50 ký tự"
        }
      ],
      errorMessage: "",
      errorEmail: "",
    }
  },
  methods: {
    async submit() {
      this.errorMessage = "";
      const isValid = validateForm(this.$refs);
      if(isValid) {  
        // call api
        const data = {
          email: this.email,
          phone: this.phone,
          fullName: this.fulllName,
          gender: this.gender
        }
        const response = await registerStore().apiRegisterContactInfo(data);
        if (response.error == '0') {
          return true;
        } else if (response.error == '3') {
          response.detailMessage?.email ? this.errorEmail = "Email đã được đăng ký" : "";
          return false;
        } else {
          this.errorMessage = "Có lỗi xảy ra, vui lòng thử lại"
          return false;
        }
      } else {
        return isValid;
      }
    }
  },
}
</script>
<style scoped>
.sub-note {
  background: #F2F2F2;
  border-radius: 5px;
  padding: 15px 20px;
  margin-top: 20px;
}
.note {
  font-size: 14px;
  margin: 30px 0 8px;
  color: #5E5C62;
}
.error-message {
  color: #ff5454;
  margin-top: 6px;
  font-size: 12.8px;
}
</style>