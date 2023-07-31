<template>
  <div class="content">
    <div class="max-720 m-auto">
      <div class="nav-step">
        <ul>
          <li v-for="(flow, i) in listFlow" :key="i" class="active">
            <i v-if="tabIndex != i" class="step-number hide-large">{{i + 1}}</i>
            <span v-else>
              <span class="hide-small">{{ flow }}</span>
            </span>
            <div class="icon">
              <img
                class="img-nextpage"
                v-if="i + 1 != listFlow.length"
                src="../../assets/Angle_right_black.svg"
                alt="img"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabIndex: { type: Number, default: 0 },
  },
  data() {
    return {
      listFlow: [
        "1. Thông tin liên hệ",
        "2. Thông tin cơ bản",
        "3. Thông tin bổ sung",
        "4. Xác thực giấy tờ",
        "5. Xác thực khuôn mặt",
      ],
      nextPage: null,
    };
  },
  mounted() {
    this.nextPage = document.querySelector(".fw-footer-right .fw-btn");
  },
};
</script>
<style scoped>
.nav-step ul {
  display: flex;
  vertical-align: middle;
}
.nav-step ul li {
  margin-right: auto;
  height: 55px;
  display: flex;
  align-items: center;
  position: relative;
}
.nav-step ul li .step-number {
  width: 30px;
  height: 30px;
  border: 1px solid #5e5c62;
  background: none;
  line-height: 30px;
  border-radius: 50%;
  text-align: center;
  border: 1px solid #000 !important;
  color: #000;
}
.nav-step ul li span {
  font-weight: 600 !important;
  font-size: 14px;
}
.icon {
  width: 24px;
  height: 24px;
}
</style>