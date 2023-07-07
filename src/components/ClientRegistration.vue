<template>
  <div>
    <h4 class="title-page">Thông tin tài khoản</h4>
    <InputComp 
      name="fullName"
      label="Họ và tên"
      subLabel="Vui lòng nhập tên đầy đủ như trên CMND. Nhập tên sai sẽ không nhận được khoản vay!"
      placeholder="Nguyễn Thu Giang"
      :rules="nameRules"
      v-model="fullName"
    />
    <InputComp 
      name="password"
      label="Mật khẩu"
      subLabel="Dùng nó để truy cập vào tài khoản của bạn sau này"
      placeholder=""
      :rules="passwordRules"
      v-model="password"
    />
    <InputComp 
      name="password"
      label="Nhập lại mật khẩu"
      placeholder=""
      :rules="passwordRules"
      v-model="password"
    />
    <InputComp 
      name="email"
      label="Email"
      placeholder="Địa chỉ E-mail của bạn"
      :rules="emailRules"
      v-model="email"
    />
    <p class="sub-label">Nếu chưa có email, bạn có đăng ký một tài khoản email tại đây <a href="https://www.gmail.com" style="color: #ff5e62">www.gmail.com</a></p>
    <!-- <SelectComp
      :items="['go', 'python', 'rust', 'javascript']"
      v-model="option"
      label="Tỉnh/ Thành phố"
    /> -->
  </div>
</template>
<script>
import InputComp from './InputComp.vue';
import SelectComp from './SelectComp.vue';
export default {
  components: {
    InputComp,
    SelectComp
  },
  data() {
    return {
      nameRules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 5) || 'Min 5 characters',
      ],
      passwordRules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 5) || 'Min 5 characters',
      ],
      password: "",
      fullName: "",
      option: "",
    }
  }
}
</script>
<style scoped>
.sub-label {
  font-size: 12px;
}
.title-page {
  font-weight: 700;
  color: #1f5169;
  line-height: 32px;
  font-size: 23px;
  margin-top: .5rem;
  margin-bottom: .5rem;
}
</style>