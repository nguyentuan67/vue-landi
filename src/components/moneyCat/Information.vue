<template>
  <div class="row">
    <div class="col-md-5 col-sm-12">
      <div class="welcom-text">
        <div class="welcom-text-main">Chào</div>
        <div class="welcom-text-second">
          Vui lòng điền thông tin cá nhân của bạn một
          <span></span>
          cách cẩn thận, điều này là cần thiết để được
          <span></span>
          duyệt và cấp cho bạn các điều khoản vay tốt hơn.
        </div>
      </div>
      <div class="step">
        <InputComp
          v-model="fullName"
          name="fullName"
          label="Họ và tên"
        />
        <InputComp
          v-model="phoneNumber"
          name="phoneNumber"
          label="Số di động của bạn"
        />
        <InputComp
          v-model="email"
          name="email"
          label="Email"
        />
      </div>
    </div>
    <div class="offset-md-1 col-md-5 col-sm-12">
      <div class="social-block">
        <div class="social-block-header">
          Bạn muốn tăng khả năng được duyệt?
        </div>
        <div class="social-block-subtext">
            Bằng cách nhấp vào nút Tiếp tục, bạn đồng ý rằng bạn đã đọc và đồng ý với
            <a class="orange-text" href="https://moneycat.vn/page/terms-and-conditions"> Điều kiện, Điều khoản </a>
            và <a class="orange-text" href="https://moneycat.vn/page/privacy-policy"> Chính sách quyền riêng tư </a>
            và cho phép khoản vay được duyệt có thể thấp hơn khoản vay đã chọn. Tính toán trên chỉ áp dụng với Khách hàng mới.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputComp from "./InputComp.vue";
import SelectComp from "./SelectComp.vue";

export default {
  components: {
    InputComp,
    SelectComp,
  },
  data() {
    return {
        fullName: "",
        phoneNumber: "",
        email: ""
    };
  },
};
</script>
<style scoped>
.welcome-text {
    text-align: center;
    padding-bottom: 25px;
}
.welcom-text-main {
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000;
}
.welcom-text-second {
    font-size: 14px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000;
    padding: 0 7px;
}
.step {
    margin: 12px 0;
    margin-bottom: 0;
}
.social-block {
    border-radius: 5px;
    border: solid 1px #c4c4c4;
    background-color: #f8f8f8;
    padding: 8px 15px;
    width: 100%;
    margin-bottom: 25px;
    margin-top: 103px;
}
.social-block-header {
    font-size: 14px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
    margin-bottom: 14px;
}
.social-block-subtext {
    font-size: 14px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #9b9b9b;
    margin-bottom: 7px;
}
.orange-text {
    text-decoration: none;
    color: #ff7f00;
}
</style>