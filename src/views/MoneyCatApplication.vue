<template>
  <div class="header">
    <div class="header-image col-md-4">
      <img src="../assets/logo-money-cat.svg" alt="image-logo" />
    </div>
  </div>
  <div class="container">
    <router-view v-slot="{Component}">
      <component ref="currentStep" :is="Component" />
    </router-view>
    <div class="step col-md-5 move-buttons">
      <button @click="goBack" class="button-back-link">&#10226; Quay lại</button>
      <button
        type="submit"
        class="button-forward"
        name="submitButton"
        value="true"
        @click="submit"
      >
        Tiếp tục
      </button>
    </div>
  </div>
  <div class="model-loading" v-if="isLoading">
    <div class="loader"></div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  data: () => ({
    tabs: [
      {
        name: "MoneyCatRegister",
        tab: 0,
      },
      {
        name: "MoneyCatVerify",
        tab: 1,
      },
    ],
    tabIndex: ref(0),
    isLoading: false,
  }),
  created() {
    const contactInfo = JSON.parse(localStorage.getItem("contact-info"));
    if (!contactInfo) {
      this.$router.push({name: 'MoneyCatHome'})
    }
  },
  methods: {
    async submit() {
      if (this.tabIndex < this.tabs.length) {
        this.isLoading = true;
        const isValid = await this.$refs.currentStep.submit();
        this.isLoading = false;
        if (isValid) {
          if (this.tabIndex == this.tabs.length - 1) {
            this.$router.push({ name: 'MoneyCatHome' });
          } else {
            this.tabIndex++;
            this.$router.push({ name: this.tabs[this.tabIndex].name });
          }
        }
      }
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  updated() {
    this.tabs.forEach((tab, i) => {
      if(this.$route.name == tab.name) {
        this.tabIndex = i;
      }
    })
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 1px 10px -3px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  position: relative;
}
.container {
  max-width: 970px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
}
.header-image {
  justify-content: center;
  display: flex;
  /* text-align: center;
    margin: 20px auto; */
}
.move-buttons {
  display: flex;
  justify-content: space-between;
  margin: 0;
  margin-top: 30px;
  margin-bottom: 25px;
}
.button-back-link {
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000;
  text-decoration: none;
  border: 0;
  background: inherit;
}
.button-forward {
  min-width: 200px;
  height: 42px;
  border-radius: 5px;
  background-color: #ff7f00;
  color: #fff;
  border: 0;
}
.model-loading {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}
.loader {
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #3498db;
  width: 100px;
  height: 100px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>