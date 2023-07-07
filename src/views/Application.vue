<template>
  <div class="application">
    <div class="flow">
      <register-flow :tab-index="this.tabIndex"/>
    </div>
    <div class="content">
      <div class="app-header">
        <h3>Đơn vay</h3>
      </div>
      <div class="summary-wrapper">
        <div>
          <h4 class="value">500.000</h4>
          <div>Khoản vay của bạn</div>
        </div>
        <div>
          <h4 class="value">564.750</h4>
          <div>Tổng số thanh toán</div>
        </div>
        <div>
          <h4 class="value">27.06.2023</h4>
          <div>Ngày thanh toán đầu tiên</div>
        </div>
      </div>
      <router-view></router-view>
      <div class="submit-wrap mt-5">
        <button class="submit" @click="submit">Tiếp tục</button>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterFlow from '../components/RegisterFlow.vue'
import Address from '../components/Address.vue'
import ClientRegistration from '../components/ClientRegistration.vue'
import Employment from '../components/Employment.vue'
import Preview from '../components/Preview.vue'
import { ref } from "vue";
export default {
  components: {
    RegisterFlow,
    Address,
    ClientRegistration,
    Employment,
    Preview,
  },
  data: () => ({
    tabs: [
      {
        path: "/application/client-registration",
        tab: 0
      },
      {
        path: "/application/employment",
        tab: 1
      },
      {
        path: "/application/address",
        tab: 2
      },
      {
        path: "/application/preview",
        tab: 3
      },
    ],
    tabIndex: ref(0)
  }),
  methods: {
    submit() {
      if(this.tabIndex < this.tabs.length - 1) {
        this.tabIndex++;
        this.$router.push(this.tabs[this.tabIndex].path)
      }
    }
  }
}
</script>

<style scoped>
.application {
  display: flex;
  justify-content: space-between;
  height: 100%;
  min-height: 100vh;
}
.flow {
  padding: 40px;
}
.content {
  flex-grow: 2;
  padding: 0 80px;
  background-color: #f5f5f9;
}
.app-header {
  padding: 48px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.app-header h3 {
  font-family: Montserrat,sans-serif;
  font-weight: 700;
  color: #1f5169;
  font-size: 34px;
  line-height: 48px;
}
.summary-wrapper {
  background-color: #d5d4d8;
  border-radius: 6px;
  max-width: 480px;
  display: flex;
  justify-content: space-between;
  padding: 24px;
}
.summary-wrapper .value {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: #1f5169;
  text-align: center;
  font-size: 23px;
}
.application .submit-wrap {
  display: block;
}
.application .submit {
  width: 280px;
}
</style>