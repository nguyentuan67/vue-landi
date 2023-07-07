<template>
  <div>
    <div class="banner">
      <h1 class="title">Vay lần 2 với số tiền cao hơn và hoàn trả chỉ trong 10 ngày để tiết kiệm chi phí!</h1>
      <div class="form-wrap">
        <div class="form">
          <div style="padding: 32px;">
            <div>
              <div class="caption">
                <div class="caption-text"> Tôi muốn vay </div>
                <div class="caption-price">
                  <input v-model="priceText" type="text" name="amout">
                  <span class="value-unit">₫</span>
                </div>
              </div>
              <div class="slider">
                <input 
                  type="range"
                  :style="{background: lineProgress}"
                  @input="caculationPrice"
                  min="0" max="58"
                  v-model="slideValue"
                >
                <div class="label">
                  <span>500.000₫</span>
                  <span>15.000.000₫</span>
                </div>
              </div>
            </div>
            <div ref="message" class="message">Tối đa là 4 triệu đồng cho khoản vay đầu tiên</div>
            <div>
              <div class="phone-caption">Số điện thoại của bạn</div>
              <div class="phone-desc">Bạn sẽ nhận được cuộc gọi xác nhận</div>
              <input class="phone-input" type="text" name="phoneNumber" value="" placeholder="0 XXX-XXX-XXX" data-slots="X" data-required="1" inputmode="numeric">
            </div>
            <div class="term">
              <label>
                <input type="checkbox" checked>
              </label>
              <span>Bằng việc nhấn vào nút Đăng ký bên dưới, tôi cam kết rằng, tôi đã đọc, hiểu và đồng ý với nội dung của <a href="https://vamo.vn/vi/cac-dieu-khoan-va-dieu-kien/">Các điều khoản và điều kiện</a> và <a href="https://vamo.vn/vi/chinh-sach-bao-mat/">Chính sách bảo mật</a> của Vamo.vn <a href="https://vamo.vn/vi/cac-dieu-khoan-va-dieu-kien/"></a>
						</span>
            </div>
          </div>
          <div class="form-bottom">
            <div class="submit-wrap">
              <router-link class="d-block w-100 text-center" to="/application/client-registration">
                <button class="submit">Đăng ký ngay</button>
              </router-link>
            </div>
            <div class="info-wrap">
              <div class="mx-2">
                <div class="info-value">2.000.000</div>
                <div class="info-caption">Khoản vay</div>
              </div>
              <div class="mx-2">
                <div class="info-value">2.259.000</div>
                <div class="info-caption">Tổng số tiền thanh toán bao gồm phí*</div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-banner">
          <img src="../assets/Get-our-APP-top.png" alt="get our app">
        </div>
      </div>
    </div>
    <div class="container">
      <section class="section-padding">
        <h1 class="page-title">Vay online nhận tiền ngay trong ngày</h1>
        <p class="my-2 text-center">Thủ tục đơn giản. Giải ngân nhanh</p>
        <div class="flow-guild row">
          <div class="col-12 col-md-6 col-lg-3">
            <div class="flow-item">
              <img src="../assets/1-2.png" alt="flow 1">
              <br>
              <span>Chọn khoản vay bạn mong muốn và đăng kí</span>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="flow-item">
              <img src="../assets/2-2.png" alt="flow-2">
              <br>
              <span>Điền đầy đủ thông tin vào đơn</span>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="flow-item">
              <img src="../assets/3.png" alt="flow-3">
              <br>
              <span>Nhận tiền ngay trong tíc tắc</span>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="flow-item">
              <img src="../assets/4.png" alt="flow-4">
              <br>
              <span>Thanh toán khoản vay với thời hạn đã xác định</span>
            </div>
          </div>
        </div>
      </section>
      <div class="text-center mt-5">
        <div class="submit-wrap">
          <button class="submit mb-3">Đăng ký ngay</button>
        </div>
      </div>
    </div>
    <div class="page-benefit">
      <section class="section-padding">
        <h2 class="page-title">Lợi ích khi sử dụng dịch vụ</h2>
        <div class="row">
          <div class="col-12 col-lg-4">
            <article class="card-benefit text-center">
              <img src="../assets/love_transparent.png" alt="respect">
              <div class="card-content">
                <h3><strong>Chúng tôi tôn trọng khách hàng</strong></h3>
                <p>&nbsp;</p>
                <h4>Khách hàng thân thiết của chúng tôi sẽ được phục vụ tận tình và nhanh chóng</h4>
              </div>
            </article>
          </div>
          <div class="col-12 col-lg-4">
            <article class="card-benefit text-center">
              <img src="../assets/output-onlinepngtools.png" alt="offer">
              <div class="card-content">
                <h3><strong>Lãi suất ưu đãi</strong></h3>
                <p>&nbsp;</p>
                <h4>Chúng tôi phục vụ lãi suất thấp nhất trên thị trường</h4>
              </div>
            </article>
          </div>
          <div class="col-12 col-lg-4">
            <article class="card-benefit text-center">
              <img src="../assets/shield_transparent.png" alt="security">
              <div class="card-content">
                <h3><strong>Bảo mật</strong></h3>
                <p>&nbsp;</p>
                <h4>Dịch vụ của chúng tôi được tin dùng bởi hơn 3.000.000 khách hàng</h4>
              </div>
            </article>
          </div>
        </div>
      </section>
      <div class="text-center mt-5">
        <div class="submit-wrap">
          <button class="submit mb-3">Đăng ký ngay</button>
        </div>
      </div>
    </div>
    <div class="page-loan-conditions">
      <h4 class="loan-header">Khoản vay trả góp linh hoạt tại Vamo</h4>
      <div class="row">
        <div class="col-12 col-md-4 g-2 text-center">
          <div class="loan-content-wrap">
            <p><strong>Kỳ hạn vay</strong></p>
            <p>90 – 180 ngày</p>
          </div>
        </div>
        <div class="col-12 col-md-4 g-2 text-center">
          <div class="loan-content-wrap">
            <p><strong>Hạn mức vay</strong></p>
            <p>500,000 Đ – 15,000,000 Đ</p>
          </div>
        </div>
        <div class="col-12 col-md-4 g-2 text-center">
          <div class="loan-content-wrap">
            <p><strong>Lãi suất</strong></p>
            <p>12 – 18,25%/năm</p>
          </div>
        </div>
        <div class="col-12 g-3 text-center">
          <div class="loan-content-wrap">
            <p>-Số tiền thanh toán bao gồm tiền gốc, lãi và phí.</p>
            <p>-Khoản vay được duyệt có thể khác với yêu cầu của bạn.</p>
            <p>Ví dụ: Nếu khoản vay online đầu tiên là 500.000 ₫ (0% lãi, phí), tổng số tiền phải trả vào ngày đến hạn là 500.000 ₫.</p>
          </div>
        </div>
      </div>
    </div>
    <section class="section-padding page-offer">
      <h1 class="page-title">Ưu đãi đặc biệt</h1>
      <p class="text-center fs-5">Đăng ký khoản vay tại Vamo từ 1.000.000 đồng đến 15 triệu đồng và nhận ưu đãi phù hợp dành riêng cho bạn</p>
      <div class="text-center">
        <div class="submit-wrap">
          <button class="submit">Đăng ký ngay</button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Home",
  data:() => ({
    spacePrice: 250000,
    price: 500000,
    priceText: "500,000",
    slideValue: 0,
    slidePercent: 0,
  }),
  methods: {
    caculationPrice() {
      this.slidePercent = this.slideValue / 58 * 100;
      this.price = 500000 + 250000 * this.slideValue;
      this.priceText = new Intl.NumberFormat('en-US').format(this.price)
      if(this.price > 4000000) {
        this.$refs.message.style.opacity = '1';
      } else {
        this.$refs.message.style.opacity = '0';
      }
    }
  },
  computed: {
    lineProgress() {
      return `linear-gradient(90deg, #003A50 0%, #CC4D72 ${this.slidePercent}%, rgb(222, 227, 238) 0%, rgb(222, 227, 238) 100% )`
    }
  }
}
</script>

<style scoped>
.banner {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 40px 15px;
  position: relative;
  background-image: url(../assets/bg-gradient.jpg);
}
.title {
  max-width: 800px;
  margin: 0 auto;
  color: #fff;
  text-shadow: 0 0 10px rgba(0,0,0,0.8);
  font-family: "Montserrat", sans-serif;
  font-size: 34px;
  line-height: 48px;
  margin-bottom: 17px;
  font-weight: bold;
}
.form-wrap {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  margin: 40px auto 0 auto;
  max-width: 800px;
  min-height: 360px;
  border-radius: 6px;
}
.form {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 8px rgba(21, 41, 53, 0.04);
  width: 50%;
}
.caption {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.caption-text {
  max-width: 100px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 13.6px;
  font-weight: bold;
  line-height: 16px;
  color: #3C3B3E;
  padding-top: 10px;
  width: 50%;
}
.caption-price {
  width: 50%;
  position: relative;
}
.caption-price input {
  border-radius: 6px;
  border: 2px solid #D5D4D8;
  display: block;
  box-sizing: border-box;
  text-indent: 20px;
  height: 48px;
  line-height: 48px;
  color: #3C3B3E;
  width: 100%;
  font-family: "Josefin Sans", sans-serif;
  font-size: 17px;
}
.caption-price .value-unit {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: #949397;
  font-size: 14px;
  font-family: "Josefin Sans", sans-serif;
}
.slider {
  margin: 8px 0 0px ;
}
.slider input {
  -webkit-appearance: none;
  width: 100%;
  cursor: pointer;
  height: 4px;
  border-radius: 2px;
  outline: none;
  transition: 0.4s all ease-out;
  overflow: visible;
}
.slider input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fff;
  border: 8px solid #CC4D72;
}
.label {
  font-family: "Josefin Sans", sans-serif;
  font-size: 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  padding-top: 12px;
}
.message {
  background: #E1424B;
  color: #FFFFFF;
  font-family: "Josefin Sans", sans-serif;
  font-size: 13.6px;
  line-height: 20px;
  border-radius: 12px;
  text-align: center;
  margin: 8px 0 24px 0;
  padding: 2px 0;
  transition: 0.2s all;
  opacity: 0;
}

.phone-caption {
  font-family: "Josefin Sans", sans-serif;
  color: #3C3B3E;
  font-weight: bold;
  font-size: 13.6px;
  line-height: 16px;
  margin-bottom: 9px;
}
.phone-desc {
  font-family: "Josefin Sans", sans-serif;
  color: #949397;
  font-size: 13.6px;
  line-height: 14px;
  margin-bottom: 7px;
}
.phone-input {
  border-radius: 6px;
  border: 2px solid #D5D4D8;
  display: block;
  box-sizing: border-box;
  text-indent: 20px;
  height: 48px;
  line-height: 48px;
  color: #3C3B3E;
  width: 100%;
  font-family: "Josefin Sans", sans-serif;
  font-size: 17px;
}
.form-bottom {
  background-color: #F5F5F9;
  position: relative;
  padding: 52px 32px 32px;
}
.form-bottom .submit-wrap {
  position: absolute;
  left: 0;
  top: -30px;
}
.form-bottom .submit {
  width: 50%;
  padding: 0;
  height: 60px;
  font-weight: normal;
}
.form-banner {
  border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    align-self: flex-end;
    text-align: center;
    margin-top: 25px;
    width: 50%;
}
.form-banner img {
  max-width: 100%;
}
.term {
  margin-top: 20px;
  margin-bottom: 20px;
  color: #3C3B3E;
  font-family: "Josefin Sans", sans-serif;
  font-size: 14px;
  display: flex;
  line-height: 16px;
}
.term label {
  display: inline-block;
  margin-right: 12px;
  cursor: pointer;
}
.term a {
  text-decoration: none;
  color: #ff0000;
}
.term a:hover {
  text-decoration: underline;
}
.info-wrap {
  border-radius: 6px;
  background: #E3E2E6;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 21px 16px;
  margin-bottom: 33px;
}
.info-value {
  color: #1F5169;
  font-size: 16px;
  line-height: 20px;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  font-weight: bold;
}
.info-caption {
  color: #343330;
  font-size: 13.6px;
  line-height: 20px;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
}
.flow-guild {
  margin-top: 50px;
  text-align: center;
}
.flow-item {
  vertical-align: top;
  padding: 5px;
  display: inline-block;
  margin-right: -5px;
}
.flow-item span {
  font-size: 18px;
}
.page-benefit {
  background-color: #F5F5F9;
}
.card-content {
  padding: 20px 25px 15px;
  font-family: Montserrat;
  color: #1F5169;
}
.card-content h3 {
  font-size: 24px;
}
.card-content h4 {
  font-size: 18.72px;
  font-weight: 400;
}
.page-loan-conditions {
  padding: 30px;
  margin: 40px auto;
  max-width: 100%;
  width: 800px;
  background-color: #F5F5F9;
  box-sizing: border-box;
  color: #1F5169;
}
.loan-header {
  font-size: 16px;
  margin-bottom: 30px;
  text-align: center;
}
.loan-content-wrap {
  align-self: center;
  padding: 15px;
  background-color: #E3E2E6;
  border-radius: 6px;
  font-size: 0.925rem;
  line-height: 1.125rem;
  box-sizing: border-box;
}
.loan-content-wrap p:last-child {
  margin-bottom: 0;
}
.page-offer .submit {
  text-align: center;
  padding: 15px 15px;
  width: 384px;
  margin-top: 25px;
  line-height: 20px;
}
</style>