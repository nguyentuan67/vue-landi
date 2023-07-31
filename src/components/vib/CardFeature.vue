<template>
  <p class="vib-title mt-20">Chọn loại ưu đãi</p>
  <div class="row mt-20">
    <div class="d-flex col-sm-6 col-12">
      <div class="col-6">
        <input id="1" name="1" value="1" v-model="promotionType" type="radio" class="me-2">
        <label for="1" class="custom-control-label">Hoàn tiền</label>
      </div>
      <div class="col-6">
        <input id="2" name="1" value="2" v-model="promotionType" type="radio" class="me-2">
        <label for="2" class="custom-control-label">Tích điểm</label>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <SelectComp
        class="mt-20"
        label="Gói ưu đãi chi tiêu chính"
        :items="packages"
        v-model="packageSelect"
        ref="packageSelect"
      />
      <div class="sub-note mt-20" v-if="packageSelect">
        Ưu đãi <strong>Hoàn tiền 15% cho chi tiêu {{ packageSelect }}</strong> và <strong>0.1% cho mọi chi tiêu khác</strong>
      </div>
    </div>
  </div>
  <p class="vib-title mt-20">Chọn tính năng thẻ</p>
  <div class="row mt-20">
    <div class="col-sm-6 col-12">
      <SelectComp  
        label="Sao kê hàng tháng"
        :items="dates"
        v-model="dateSelect"
        ref="dateSelect"
      />
    </div>
    <div class="col-sm-6 col-12">
      <SelectComp  
        label="Số tiền thanh toán tối thiểu"
        :items="pays"
        item-title="title"
        item-value="value"
        v-model="paySelect"
        ref="paySelect"
      />
    </div>
  </div>
</template>
<script>
import SelectComp from './SelectComp.vue';
import { validateForm } from '../../utils/validateForm';
import { registerStore } from '../../stores/register.store';
export default {
  components: {
    SelectComp,
  },
  data() {
    return {
      packages: [
        "Mua sắm", "Du lịch", "Nhà hàng", "Trực tuyến"
      ],
      dates: ["Ngày 5", "Ngày 10", "Ngày 15", "Ngày 20"],
      pays: [
        {title: "1%", value: 1},
        {title: "3%", value: 3},
        {title: "5%", value: 5},
      ],
      packageSelect: null,
      dateSelect: null,
      paySelect: null,
      promotionType: 1,
      errorMessage: "",
    }
  },
  methods: {
    async submit() {
      const isValid = validateForm(this.$refs);
      if(isValid) {
        // call api
        const data = {
          promotionType: this.promotionType,
          mainOffer: this.packageSelect,
          monthlyStatementDate: this.dateSelect,
          minPaymentAmount: this.paySelect.title
        }
        const response = await registerStore().apiRegisterCard(data);
        if (response.error == '0') {
          return true;
        } else {
          this.errorMessage = "Có lỗi xảy ra, vui lòng thử lại"
          return false;
        }
        // trả giá trị validate cho VibApplication
      } else {
        return isValid;
      }
    }
  }
}
</script>
<style scoped>
.sub-note {
  background: #F2F2F2;
  border-radius: 5px;
  padding: 15px 20px;
  margin-top: 20px;
}
</style>