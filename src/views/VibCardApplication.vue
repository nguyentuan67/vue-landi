<template>
  <div class="wrapper">
    <div class="content">
      <div class="form">
        <register-flow v-if="tabIndex > -1" :tab-index="this.tabIndex"/>
        <div class="banner">
          <img src="../assets/Banner-card-mobile.jpg" alt="">
        </div>
        <router-view v-slot="{Component}">
          <component ref="currentStep" :is="Component" />
        </router-view>
        <div class="continute-wrap">
          <button class="continute" @click="submit">Tiếp tục</button>
        </div>
      </div>
    </div>
    <div class="model-loading" v-if="isLoading">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
</template>
<script>
import RegisterFlow from '../components/vib/RegisterFlow.vue';
import { ref } from 'vue';
import { emitter } from "../utils/emitter";
import * as constants from "../constants";
export default {
  components: {
    RegisterFlow
  },
  data: () => ({
    tabs:[
      {
        name: "VibCardRegister",
        tab: 0
      },
      {
        name: "VibInformation",
        tab: 1
      },
      {
        name: "VibAddress",
        tab: 2
      },
      {
        name: "VibVerify",
        tab: 3
      },
      {
        name: "VibFaceAuthen",
        tab: 4
      },
    ],
    tabIndex: ref(-1),
    isValid: false,
    isLoading: false
  }),
  created() {
    const id = localStorage.getItem('userId')
    const cardInfo = JSON.parse(localStorage.getItem('cardInfo'))
    if (id) {
      this.checkStep();
    } else if (!cardInfo) {
      this.$router.push({name: 'VibCardFeature'})
      this.tabIndex = -1
    }
    emitter.on("loading", isLoading => this.isLoading = isLoading)
  },
  watch: {
    '$route.path'() {
      this.checkStep()
    }
  },
  methods: {
    async submit() {
      if(this.tabIndex < this.tabs.length - 1) {
        this.isLoading = true
        const isValid = await this.$refs.currentStep.submit();
        this.isLoading = false
        if(isValid) {
          if (this.tabIndex == 0) {
            let registerStep = localStorage.getItem("registerStep")
            this.tabIndex = registerStep;
          } else {
            this.tabIndex++;
          }
          if (this.tabIndex < this.tabs.length) {
            this.$router.push({name: this.tabs[this.tabIndex]?.name})
            localStorage.setItem("registerStep", this.tabIndex)
          } else {
            this.tabIndex = 0
          }
        }
      }
    },
    checkStep() {
      this.tabIndex = this.tabs.findIndex(tab => this.$route.name == tab.name)
      if (this.tabIndex < 0) {
        return;
      }
      let registerStep = localStorage.getItem("registerStep")
      if (this.tabIndex < registerStep) {
        this.$router.push({name: 'VibCardFeature'});
        this.tabIndex = -1;
        //xoa localStorage tru cardInfo
        localStorage.removeItem("userId")
        localStorage.removeItem("registerStep")
        localStorage.removeItem("cardId")
        localStorage.removeItem("base64ImageCmt")
      } else {
        const imageCmt = localStorage.getItem('base64ImageCmt')
        if (registerStep >= constants.REGISTER_STEP_OCR && !imageCmt) {
          this.tabIndex = constants.REGISTER_STEP_OCR - 1;
          localStorage.setItem("registerStep", this.tabIndex)
        } else {
          this.tabIndex = registerStep;
        }
        this.$router.push({name: this.tabs[this.tabIndex].name});
      }
    },
  }
}
</script>
<style scoped>
.wrapper {
  background-color: #f5f5f5;
  font-family: 'Montserrat', sans-serif;
  min-height: 100vh;
}
.wrapper .content {
  margin: 0 auto 40px;
  max-width: 1100px;
}
.form {
  box-shadow: 0px 1px 5px rgba(188, 188, 188, 0.25);
  border-radius: 5px;
  max-width: 768px;
  background: #fff;
  margin-top: 40px !important;
  padding: 30px;
  margin: auto;
}
.banner {
  background-image: url(../assets/Banner-card.jpg);
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
  display: flex;
  margin: 0 -30px;
  padding-left: 30px;
  border-radius: 5px 5px 0px 0px;
  align-items: center!important;
}
.banner img {
  display: none;
}
.continute-wrap {
  margin-top: 30px;
  text-align: right;
}
.continute {
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: #000;
  border-radius: 5px;
  display: inline-block;
  background: #FDB814;
  text-align: center;
  transition: all 0.5s ease;
  margin: 0 auto;
  padding: 12px 32px;
  line-height: 24px;
  text-decoration: none;
  border: none;
  position: relative;
  z-index: 1;
  height: auto;
}
.model-loading {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  z-index: 101;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #2560C2;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #2560C2  transparent transparent transparent;
  z-index: 101;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 767px) {
  .wrapper .content {
    margin: 0 auto 40px;
    max-width: 1100px;
  }
  .wrapper .form {
    padding: 0 20px;
  }
  .banner {
    padding-left: 0;
    background-image: none;
    text-align: center;
    margin: 0 -20px;
    height: auto;
  }
  .banner img {
    display: block;
    width: 100%;
  }
}
</style>