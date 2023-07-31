<template>
  <div class="container justify-content-between align-items-center">
    <section class="breadcrumbs_section">
      <ul class="breadcrumb">
        <li>
          <router-link to="/" class="home-link"> Trang chủ</router-link>
        </li>
        <li>
          <b>THANH TOÁN KHOẢN VAY </b>
        </li>
      </ul>
    </section>
    <div class="d-flex pay-nmd">
      <div class="pay-menu">
        <div
          class="pay-option"
          v-for="option in options"
          :key="option.id"
          :class="{ selected: selectedOption === option.id }"
          @click="selectOption(option.id)"
        >
          <router-link class="d-flex routerlink" :to="{ name: option.link }">
            <div class="option-icon">
              <img :src="option.img" alt="atm" />
            </div>
            <div class="option-text">{{ option.text }}</div>
            <div class="option-arrow"></div>
          </router-link>
        </div>
      </div>
      <div class="pay-wrap">
        <div class="pay-display">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  name: "MoneyCatPayNavbar",
  data() {
    return {
      options: [
        {
          id: 1,
          link: "PhoneInput",
          text: "Thanh toán qua ATM Card",
          img: new URL('../assets/atm_icon.png', import.meta.url).href,
        },
        {
          id: 2,
          link: "PhoneInput",
          text: "MOMO",
          img: new URL('../assets/mom_icon.png', import.meta.url).href,
        },
        {
          id: 3,
          link: "NidInput",
          text: "TÀI KHOẢN NHANH",
          img: new URL('../assets/icon_vn.png', import.meta.url).href,
        },
        {
          id: 4,
          link: "PhoneInput",
          text: "Chuyển Khoản Ngân Hàng",
          img: new URL('../assets/bk_icon.png', import.meta.url).href,
        },
      ],

      selectedOption: null,
    };
  },
  methods: {
    selectOption(optionId) {
      this.selectedOption = optionId;
    },
  },
};
</script>
<style scoped>
.routerlink {
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-decoration: none;
}
.breadcrumbs_section {
  width: 100%;
  max-width: 747px;
  margin: 0 auto;
}
.breadcrumb {
  list-style: none;
  display: flex;
  padding: 0;
  font-size: 12px;
  color: #000;
  margin: 30px 0 15px;
}
.breadcrumb > li + li::before {
  padding: 0 5px;
  color: #ccc;
  content: "/";
}
.home-link {
  text-decoration: none;
  color: #000;
}
.home-link:hover {
  text-decoration: underline;
}
.pay-mnd {
  display: flex;
  justify-content: space-between;
  align-items: start;
}
.pay-menu {
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 100%;
  padding: 3.5px 0;
  max-width: 312px;
}
.pay-wrap {
  flex-grow: 1;
  margin-left: 20px;
}
.pay-display {
  width: 100%;
  background: #fff;
  box-shadow: 4px 8px 15px rgba(21, 48, 88, 0.101961);
  padding: 16px 16px;
  border-radius: 12px;
}
.pay-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  margin: 3.5px 0;
  background: #fff;
  box-shadow: 4px 8px 15px rgba(21, 48, 88, 0.101961);
  border-radius: 12px;
  width: 100%;
  cursor: pointer;
}

.option-icon {
  max-width: 48px;
}
.line {
  margin-top: 30px;
}
.option-text {
  width: 60%;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000;
}
.option-arrow {
  width: 16px;
  height: 16px;
  background-image: url(../assets/arrow-right.png);
  background-size: contain;
  background-repeat: no-repeat;
}

.selected {
  border: 1px solid #f62;
  box-shadow: 4px 8px 15px rgba(21, 48, 88, 0.101961);
}

.selected .option-text {
  color: #f62;
}
</style>