<template>
  <div class="app-flow-logo">
    <img src="../assets/logo.png" alt="logo">
  </div>
  <div class="mt-5">
    <Wizard 
      vertical-tabs
      :customTabs="steps"
      :startIndex="tabIndex"
    >
    </Wizard>
  </div>
</template>
<script>
import 'form-wizard-vue3/dist/form-wizard-vue3.css'
import Wizard from 'form-wizard-vue3'
export default {
  components: {
    Wizard,
  },
  props: {
    tabIndex: { type: Number, default: 0},
  },
  data() {
    return {
      steps: [
        {
          title: 'Thiết lập tài khoản của bạn',
        },
        {
          title: 'Địa chỉ, nghề nghiệp và thông tin tài chính',
        },
        {
          title: 'Thông tin cá nhần và xác minh chứ minh thư',
        },
        {
          title: 'Thông tin cá nhần và xác minh chứ minh thư',
        } 
      ],
      nextBtnEl: null
    }
  },
  watch: {
    tabIndex() {
      this.nextBtnEl.click()
    }
  },
  mounted() {
    this.nextBtnEl = document.querySelector(".fw-footer-right .fw-btn")
  }
}
</script>
<style>
.fw-vertical {
  max-height: none;
}
.fw-vertical .fw-body {
  display: none ;
}
.fw-vertical .fw-body-list {
  padding: 0 ;
}
.fw-vertical .fw-body-list li {
  padding: 0;
}
.form-wizard-vue .fw-body-list>li>.fw-list-wrapper {
  flex-direction: row;
  font-family: 'Josefin Sans', sans-serif !important;
  font-size: 20px;
  color: #3c3b3e;
  align-items: center;
}
.fw-step-title {
  margin-left: 30px;
  max-width: 210px;
  text-align: left;
}
.form-wizard-vue .fw-body-list li .fw-list-wrapper-icon {
  background: #fff;
  color: #949397;
  font-weight: bold;
  font-style: normal;
  width: 62px;
  height: 62px;
  border: 4px solid #b4b3b7;
  border-radius: 50%;
}
.form-wizard-vue .fw-step-active {
  background: #fff !important;
  color: #949397 !important;
  border-color: #1f5169 !important;
}
.form-wizard-vue .fw-step-checked {
  border-color: #1f5169 !important;
}
.fw-vertical .fw-body-list li .fw-list-progress-active {
  background: linear-gradient(0deg,#D5D4D8 2.41%,#B1B1BC 21.44%,#8B90A0 40.48%,#647286 59.52%,#3A556B 78.56%,#003A50 97.59%) !important;
}
.fw-vertical .fw-body-list li .fw-list-progress {
  width: 4px;
  height: 100%;
  background: #b4b3b7;
  top: 50%;
  left: 10%;
}
</style>