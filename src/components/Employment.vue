<template>
  <div>
    <p class="title-page">Thông tin về nghề nghiệp của bạn</p>
    <SelectComp
      :items="['go', 'python', 'rust', 'javascript']"
      v-model="option"
      label="Loại công việc"
    />
    <SelectComp
      :items="['go', 'python', 'rust', 'javascript']"
      v-model="option"
      label="Chức danh công việc"
    />
    <InputComp
      name="companyName"
      label="Tên công ty"
      placeholder=""
      :rules="companyNameRules"
      v-model="companyName"
    />
    <InputComp
      class="phone-input"
      name="phoneNumber"
      label="Số điện thoại đồng nghiệp"
      placeholder="0__ ___ ____"
      :rules="phoneNumberRules"
      v-model="phoneNumber"
      inputmode="numeric"
    />
    <div class="form-group">
      <label class="title-form-group">Thời gian công tác</label>
      <div class="custom-control custom-radio">
        <input id="1" name="1" value="1" type="radio" class="custom-control-input">
        <label class="custom-control-label"> &#60; 6 tháng</label>
      </div>
      <div class="custom-control custom-radio custom-radio--selected">
        <input id="2" name="1" value="2" type="radio" class="custom-control-input">
        <label class="custom-control-label"> 6 tháng - 1 năm</label>
      </div>
      <div class="custom-control custom-radio">
        <input id="3" name="1" value="3" type="radio" class="custom-control-input">
        <label class="custom-control-label"> 1 năm - 3 năm</label>
      </div>
      <div class="custom-control custom-radio">
        <input id="4" name="1" value="4" type="radio" class="custom-control-input">
        <label class="custom-control-label"> &#62; 3 năm</label>
      </div>
    </div>
    <InputComp
      name="incomMonthly"
      label="Thu nhập hàng tháng của bạn"
      subLabel="Tổng thu nhập của bạn sau thuế"
      placeholder="1 000 000"
      :rules="incomMontlyRules"
      v-model="incomMontly"
    />
    <InputComp
      name="paymentMonthly"
      label="Khoản thanh toán hàng tháng cho khoản vay"
      subLabel="Tổng khoản chi hàng tháng bạn trả cho tất cả khoản nợ"
      placeholder="1 000 000"
      :rules="paymentMonthlyRules"
      v-model="paymentMonthly"
    />
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
      option: "",
    };
  },
};
</script>
<style scoped>
.title-page {
  font-weight: 700;
  color: #1f5169;
  line-height: 32px;
  font-size: 23px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.input-group-append {
  margin-left: -2px;
  display: flex;
}
.title-form-group {
  font-size: 14px;
  line-height: 24px;
  color: #3c3b3e;
  margin-bottom: 3px;
  font-weight: 700;
}
.form-group {
    margin-bottom: 17px;
}
.form-group .custom-control {
    font-size: 14px;
    color: #737f99;
    border-radius: 5px;
    line-height: var(--input-line-height, 24px);
    padding: 6px 17px 5px 59px;
    position: relative;
    display: flex;
}
</style>