<template>
  <section class="banner-top">
    <div class="container">
      <div class="calculator-form">
        <div class="left-form">
          <div class="form-title">
            Vay online <span class="orange-text">0%</span> lãi suất cho khách hàng mới!<br>Nhận tiền trong <span class="orange-text">5 phút</span> 24/7
          </div>
          <div class="form-subtitle">
            109.884 khách hàng được vay online với 0% lãi suất và chi phí
          </div>
          <div class="slider">
            <div class="mb-4 flex-between">
              <div>Tôi cần vay tiền</div>
              <div class="loan-amount">{{ loanAmountText }} Vnd</div>
            </div>
            <input 
              type="range"
              :style="{background: lineProgress}"
              @input="caculationPrice"
              min="0" max="18"
              v-model="slideValue"
            >
            <div class="label flex-between">
              <span>1 000 000₫</span>
              <span>10 000 000₫</span>
            </div>
          </div>
          <div class="form-info">
            <div class="form-info-title flex-between">
              <div>Tôi trả lại (Vnd)</div>
              <div>Ngày thanh toán đầu tiên</div>
            </div>
            <div class="form-info-value flex-between">
              <div class="pay-value">
                <span class="old-pay">{{ oldPay }}</span>
                <span>{{ newPay }}</span>
              </div>
              <div class="date-value">2.08.2023</div>
            </div>
          </div>
        </div>
        <div class="right-form">
          <div class="form-input">
            <InputComp 
              label="Họ và tên"
              v-model="fullName"
              :rules="nameRules"
              ref="fullName"
            />
            <InputComp 
              label="Số di động của bạn"
              v-model="phone"
              :rules="phoneRules"
              ref="phone"
            />
            <InputComp 
              label="Email"
              v-model="email"
              :rules="emailRules"
              ref="email"
            />
            <div class="error-message">{{ errorEmail }}</div>
            <div class="error-message">{{ errorMessage }}</div>
          </div>
          <button class="submit-moneycat" @click="registerContactInfo">
            <span>Đăng ký ngay</span>
          </button>
          <div class="term-condition">
            Bằng cách nhấp vào nút Đăng ký, bạn đồng ý rằng bạn đã đọc và đồng ý với <span class="orange-text">Điều khoản, Điều kiện</span> và <span class="orange-text">Chính sách quyền riêng tư</span> và cho phép khoản vay được duyệt có thể thấp hơn khoản vay đã chọn.
            Tính toán trên chỉ áp dụng với Khách hàng mới.
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="step-section">
    <h2 class="step-title">
      4 bước đơn giản để nhận tiền và thanh toán khoản vay
    </h2>
    <p class="step-desc">MoneyCat - Nền tảng cho vay online uy tín nhất, cho vay với cách thức đơn giản, giải ngân nhanh chóng đáp ứng những nhu cầu vay tiền online nhanh trong ngày hoặc cần vay vốn online để kinh doanh…</p>
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-3">
          <div class="step-wrap">
            <div class="step-num">01</div>
            <div class="step-pic">
              <img src="../assets/moneycat/steps-1.svg" alt="">
            </div>
            <div class="step-text text-center">
              <strong>Đăng ký dịch vụ</strong><br>
              Chọn điều khoản vay trong biểu mẫu và để lại yêu cầu vay
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="step-wrap">
            <div class="step-num">02</div>
            <div class="step-pic">
              <img src="../assets/moneycat/steps-1.svg" alt="">
            </div>
            <div class="step-text text-center">
              <strong>Nhận tư vấn</strong><br>
              Đợi câu trả lời. Chúng tôi sẽ trả lời bạn trong vòng 30 phút.            </div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="step-wrap">
            <div class="step-num">03</div>
            <div class="step-pic">
              <img src="../assets/moneycat/steps-1.svg" alt="">
            </div>
            <div class="step-text text-center">
              <strong>Nhận tiền nhanh</strong><br>
              Nhân viên giao dịch sẽ liên lạc với bạn và cho bạn biết làm thế nào để có được một khoản vay.</div>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="step-wrap">
            <div class="step-num">04</div>
            <div class="step-pic">
              <img src="../assets/moneycat/steps-1.svg" alt="">
            </div>
            <div class="step-text text-center">
              <strong>Thanh toán khoản vay</strong><br>
              Nhận tiền vào tài khoản của bạn</div>
          </div>
        </div>
      </div>
      <div class="section-btn text-center">
        <button class="submit-moneycat">Vay online ngay</button>
      </div>
    </div>
  </section>
  <section class="map-section">
    <div class="container">
      <h2 class="map-title">
        Ai có thể vay tiền?
      </h2>
      <div class="map-desc">
        Là một trong những nền tảng cho vay online uy tín nhất tại Việt Nam, MoneyCat cung cấp dịch vụ cho đa dạng khách hàng với quy trình thủ tục đơn giản. Tại MoneyCat, chúng tôi mong muốn đem lại giải pháp tài chính thông minh, hiện đại, phục vụ các nhu cầu đa dạng của khách hàng.
      </div>
      <div class="row">
        <div class="col-12 col-sm-4">
          <div class="map-wrap">
            <img class="map-img" src="../assets/moneycat/map_new.png" alt="map">
            <p class="text-center map-text">Độ tuổi từ 22 đến 60</p>
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <div class="map-wrap">
            <img class="map-img" src="../assets/moneycat/map_new.png" alt="map">
            <p class="text-center map-text">Sinh sống ở tất cả các tỉnh thành tại Việt Nam</p>
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <div class="map-wrap">
            <img class="map-img" src="../assets/moneycat/map_new.png" alt="map">
            <p class="text-center map-text">Người có thu nhập ổn định</p>
          </div>
        </div>
      </div>
      <div class="section-btn text-center">
        <button class="submit-moneycat">Vay online ngay</button>
      </div>
    </div>
  </section>
  <section class="guild-section">
    <div class="container">
      <h2 class="guild-title">Khoản vay trả góp với kì hạn vay linh hoạt</h2>
      <p class="guild-desc">
        MoneyCat - Nền tảng cho vay tiền online uy tín nhất với các khoản vay linh hoạt, giúp khách hàng tự cân đối tài chính theo khả năng chi trả. Khách hàng có thể dễ dàng chọn được khoản vay online tùy theo khả năng tài chính và kế hoạch chi tiêu của mình.
      </p>
      <div class="row">
        <div class="col-12 col-sm-4">
          <div class="guild-wrap">
            <div class="panel-title">Kì hạn vay</div>
            <div class="panel-text">Kỳ hạn tối thiểu 91 ngày - Tối đa 182ngày</div>
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <div class="guild-wrap">
            <div class="panel-title">Hạn mức vay</div>
            <div class="panel-text">VND 1 000 000 to VND 10 000 000</div>
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <div class="guild-wrap">
            <div class="panel-title">Lãi suất</div>
            <div class="panel-text">Lãi suất tối thiểu<br> 12% - tối đa 18.25% % *</div>
          </div>
        </div>
      </div>
      <div class="guild-text">
        <b>Ví dụ: </b>Khoản vay online: 3 000 000 VND, Thời gian vay: 90 ngày, Phí tư vấn: 585,000 VND, Phí dịch vụ: 630,000 VND, Lãi suất (18.0%/năm): 91,500 VND, Tổng số tiền thanh toán: 4,306,500 VND <br> <br>
        Lãi suất vay online có thể thay đổi tùy vào thời điểm khách hàng đăng ký tư vấn khoản vay, và điểm tín dụng của khách hàng. <br> <br>
        * Khoản vay được cung cấp bởi các đối tác giải ngân của MoneyCat
      </div>
    </div>
  </section>
</template>
<script>
import InputComp from "../components/moneyCat/InputComp.vue";
import { moneycatStore } from "../stores/moneycatStore";
import { validateForm } from "../utils/validateForm";
export default {
  name: "MoneyCatHome",
  components: {
    InputComp
  },
  data() {
    return {
      fullName: "",
      phone: "",
      email: "",
      nameRules: [v => !!v || 'Họ và tên không được trống'],
      phoneRules: [
        v => !!v || 'Số điện thoại không được trống',
        v => /^0\d{9}$/.test(v) || 'Số điện thoại không hợp lệ'
      ],
      emailRules: [
        v => !!v || 'Email không được trống',
        (v) => {
          const emailRegex = /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
          return emailRegex.test(v) || "Email không đúng định dạng"
        }
      ],
      loanAmount: 1000000,
      loanAmountText: "1,000,000",
      oldPay: "1,210,000",
      newPay: "1,000,000",
      slideValue: 0,
      slidePercent: 0,
      loanTerm: 5,
      errorEmail: "",
      errorMessage: "",
    }
  },
  methods: {
    caculationPrice() {
      this.slidePercent = this.slideValue / 18 * 100;
      this.loanAmount = 1000000 + 500000 * this.slideValue;
      this.loanAmountText = new Intl.NumberFormat('en-US').format(this.loanAmount)
      this.newPay = this.loanAmountText
      this.oldPay = new Intl.NumberFormat('en-US').format(this.loanAmount * 1.21)
    },
    async registerContactInfo() {
      const isValid = validateForm(this.$refs)
      if (isValid) {
        const data = {
          loanAmount: this.loanAmount,
          fullName: this.fullName,
          phone: this.phone,
          email: this.email,
          loanTerm: this.loanTerm
        }
        const res = await moneycatStore().registerContactInfo(data);
        if(res.error == 0) {
          this.$router.push({name: 'MoneyCatRegister'})
        } else if (res.error == '3') {
          res.detailMessage?.email ? this.errorEmail = "Email đã được đăng ký" : "";
        } else {
          this.errorMessage = "Có lỗi xảy ra, vui lòng thử lại"
        }
      }
    }
  },
  computed: {
    lineProgress() {
      return `linear-gradient(90deg, rgb(253, 225, 160) 0%, rgb(253, 225, 160) ${this.slidePercent}%, rgb(230, 230, 230) ${this.slidePercent}% )`
    }
  }
}
</script>
<style scoped>
.error-message {
  color: #ff5454;
  margin-top: 6px;
  font-size: 12.8px;
}
.flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.banner-top {
  padding-top: 30px;
  background: url("../assets/moneycat/front-bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 650px;
}
.calculator-form {
  width: 100%;
  max-width: 920px;
  display: flex;
  justify-content: center;
  box-shadow: 0 0 57px -12px rgba(0,0,0,.5);
  margin: auto;
}
.calculator-form .left-form {
  padding: 18px;
  background: #fff;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  box-shadow: 0 0 50px rgb(38 43 82/5%);
  flex: 2;
}
.form-title {
  font-size: 24px;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  color: #000;
}
.form-subtitle {
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  color: #979797;
  margin-top: 5px;
  margin-bottom: -10px;
}
.slider {
  margin: 20px 0;
}
.top-slider div {
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: #000;
}
.top-slider .loan-amount {
  font-size: 20px;
  font-weight: 700;
  text-align: right;
}
.slider input {
  -webkit-appearance: none;
  width: 100%;
  cursor: pointer;
  height: 8px;
  border-radius: 2px;
  outline: none;
  transition: 0.4s all ease-out;
  overflow: visible;
}
.slider input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ff7f00;
}
.label {
  flex-wrap: nowrap;
  margin: 5px 0 25px;
}
.form-info-title div {
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: #000;
}
.form-info-value span {
  font-size: 16px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f88b00;
  margin-left: 5px;
}
.form-info-value .old-pay {
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  color: #3c3c3c;
}
.form-info-value .old-pay::before {
  position: absolute;
  border-bottom: 1px solid #f82e00;
  height: 0;
  margin-left: -5px;
  margin-top: 12px;
  transform: rotate(8deg);
  content: "";
  width: 55px;
}
.calculator-form .right-form {
  background-color: #e6e6e6;
  padding: 10px 15px;
  display: flex;
  align-content: center;
  flex-direction: column;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 0 50px rgb(38 43 82/5%);
  flex: 1;
}
.form-input {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
}
.form-submit {
  margin-bottom: 25px;
  text-align: center;
  display: block;
  text-decoration: none;
}
.submit-moneycat {
  width: 100%;
  height: 44px;
  padding: 10px;
  max-width: 296px;
  border: 0 solid #fb7d01;
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: normal;
  box-shadow: 0 0 50px rgba(38,43,82,.05);
  margin-bottom: 25px;
}
.form-submit .submit-moneycat span {
  font-size: 20px;
  line-height: 120%;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: normal;
  color: #fff;
  cursor: pointer;
}
.term-condition {
  font-size: 11px;
  line-height: 130%;
  color: #868686;
  max-width: 810px;
  text-align: center;
}

.step-section {
  margin-top: -180px;
  align-items: center;
  padding-bottom: 50px;
  border-bottom: 1px solid #333;
}
.step-title {
  font-size: 2.1em;
  font-weight: 600;
  width: 95%;
  color: #fff;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 15px;
}
.step-desc {
  color: #fff;
  margin-bottom: 15px;
}
.step-wrap {
  max-width: 212px;
  min-height: 340px;
  margin-bottom: 40px;
  background: #fff;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 4px 6px 0 rgba(50,50,50,.3);
}
.step-num {
  color: #e5e5e5;
  font-size: 2em;
  font-weight: 600;
}
.step-pic {
  margin-bottom: 17px;
  height: 126px;
  text-align: center;
}
.step-pic img {
  max-width: 100%;
  max-height: 100%;
}
.section-btn .submit-moneycat {
  height: 50px;
  font-size: 16px;
  font-weight: 700;
  width: 323px;
}
.map-section {
  align-items: center;
  padding-bottom: 50px;
  background: linear-gradient(to bottom,#ffffff 0%,#e5e5e5 100%);
}
.map-title {
  font-size: 2.1em;
  font-weight: 600;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 15px;
}
.map-desc {
  max-width: 900px;
  text-align: center;
  margin: auto;
}
.map-wrap {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 6px 0 rgba(50,50,50,.3);
  margin: 40px auto;
  width: 212px;
  height: 231px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.map-img {
  width: 100px;
  max-height: 100px;
  margin: 20px;
}
.guild-section {
  text-align: center;
  padding: 20px 0 60px;
  font-family: 'Roboto', sans-serif;
  background-image: linear-gradient(to bottom, rgba(248, 126, 2, 0.66) 29%, rgba(253, 228, 170, 0.39) 74%, rgba(253, 228, 170, 0));
}
.guild-title {
  font-size: 21px;
  font-weight: bold;
  line-height: normal;
  text-align: center;
  color: #ffffff;
  margin-bottom: 30px;
}
.guild-desc {
  text-align: center;
  margin-bottom: 15px;
  color: #fff;
}
.guild-wrap {
  border-radius: 10px;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.5);
  background-color: #f4f4f4;
  min-height: 100px;
  display: block;
  box-sizing: border-box;
}
.panel-title {
  font-size: 18px;
  font-weight: bold;
  line-height: normal;
  text-align: center;
  color: #000000;
  padding: 20px 0 10px;
}
.panel-text {
  font-size: 14px;
  line-height: normal;
  text-align: center;
  color: #000000;
  margin-bottom: 20px;
}
.guild-text {
  font-size: 14px;
  line-height: 1.36;
  text-align: center;
  color: #000000;
  max-width: 1000px;
  display: inline-block;
  margin-top: 45px;
}
</style>