<template>
  <p class="vib-title mt-20">Thông tin nơi ở hiện tại</p>
  <div class="row mt-20">
    <div class="col-sm-6 col-12">
      <SelectComp
        label="Tỉnh/TP"
        itemTitle="name"
        v-model="province"
        :items="selectProvince"
        ref="province"
        errorMessage="Tên Tỉnh/TP không được để trống"
      />
    </div>
    <div class="col-sm-6 col-12">
      <SelectComp
        label="Quận/Huyện"
        itemTitle="name"
        v-model="district"
        :items="selectDistrict"
        ref="district"
        errorMessage="Tên Quận/Huyện không được để trống"
      />
    </div>
  </div>
  <div class="row mt-20">
    <div class="col-sm-6 col-12">
      <SelectComp
        label="Xã/Phường"
        itemTitle="name"
        v-model="commune"
        :items="selectCommune"
        ref="commue"
        errorMessage="Tên Xã/Phường không được để trống"
      />
    </div>
    <div class="col-sm-6 col-12">
      <InputComp
        v-model="detailAddress"
        label="Địa chỉ hiện tại (số nhà, đường)"
        :rules="detailAddressRules"
        ref="detailAddress"
      />
    </div>
  </div>
  <p class="vib-title mt-20">Thông tin cơ quan làm việc</p>
  <div class="col-12">
    <InputComp label="Tên công ty" v-model="companyName" :rules="companyNameRules" ref="companyName"/>
  </div>
  <div class="row mt-20">
    <div class="col-sm-6 col-12">
      <SelectComp
        label="Tỉnh/TP"
        itemTitle="name"
        v-model="provinceCompany"
        :items="selectProvinceCompany"
        ref="provinceCompany"
        errorMessage="Tên Tỉnh/TP không được để trống"
      />
    </div>
    <div class="col-sm-6 col-12">
      <SelectComp
        label="Quận/Huyện"
        itemTitle="name"
        v-model="districtCompany"
        :items="selectDistrictCompany"
        ref="districtCompany"
        errorMessage="Tên Quận/Huyện không được để trống"
      />
    </div>
  </div>
  <div class="row mt-20">
    <div class="col-sm-6 col-12">
      <SelectComp
        label="Xã/Phường"
        itemTitle="name"
        v-model="communeCompany"
        :items="selectCommuneCompany"
        ref="communeCompany"
        errorMessage="Tên Xã/Phường không được để trống"
      />
    </div>
    <div class="col-sm-6 col-12">
      <InputComp
        v-model="detailAddCompany"
        label="Địa chỉ công ty (số nhà, đường)"
        :rules="detailAddCompanyRules"
        ref="detailAddCompany"
      />
    </div>
  </div>
  <p class="txt_s_xs mt-20">Thời gian làm việc tại cơ quan hiện tại</p>
  <div class="row mt-20">
    <div class="col-sm-6 col-12">
      <SelectComp
        label="Thời gian làm việc - Năm"
        item-title="title"
        item-value="value" 
        v-model="byYear"
        :items="listYear"
        ref="byYear"
      />
    </div>
    <div class="col-sm-6 col-12">
      <SelectComp
        label="Thời gian làm việc - Tháng"
        item-title="title"
        item-value="value" 
        v-model="byMonth"
        :items="listMonth"
        ref="byMonth"
      />
    </div>
  </div>
  <p class="vib-title mt-20">Địa chỉ nhận thẻ</p>
  <div class="row mt-20">
    <div class="col-sm-6 col-12">
      <input type="radio" id="1" name="1" v-model="addressReceiving" value="0" />
      <label class="custom-control-label">&#160;Địa chỉ hiện tại</label>
    </div>
    <div class="col-sm-6 col-12">
      <input type="radio" id="1" name="1" v-model="addressReceiving" value="1" />
      <label class="custom-control-label">&#160;Địa chỉ làm việc</label>
    </div>
  </div>
</template>
<script>
import SelectComp from "./SelectComp.vue";
import InputComp from "./InputComp.vue";
import { reactive } from 'vue';
import axios from 'axios';
import { validateForm } from "../../utils/validateForm";
import { registerStore } from "../../stores/register.store";
export default {
  components: {
    SelectComp,
    InputComp,
  },
  data() {
    return {
      province: "",
      district: "",
      commune: "",
      selectProvince: reactive([]),
      selectDistrict: reactive([]),
      selectCommune: reactive([]),
      detailAddress: "",
      companyName: "",
      selectProvinceCompany: reactive([]),
      selectDistrictCompany: reactive([]),
      selectCommuneCompany: reactive([]),
      provinceCompany: "",
      districtCompany: "",
      communeCompany: "",
      detailAddCompany: "",
      byYear: null,
      byMonth: null,
      listMonth: [
        {title: "0 tháng", value: 0},
        {title: "1 tháng", value: 1},
        {title: "2 tháng", value: 2},
        {title: "3 tháng", value: 3},
        {title: "4 tháng", value: 4},
        {title: "5 tháng", value: 5},
        {title: "6 tháng", value: 6},
        {title: "7 tháng", value: 7},
        {title: "8 tháng", value: 8},
        {title: "9 tháng", value: 9},
        {title: "10 tháng", value: 10},
        {title: "11 tháng", value: 11},
        {title: "12 tháng", value: 12},
      ],
      listYear: [
        {title: "0 năm", value: 0},
        {title: "1 năm", value: 1},
        {title: "2 năm", value: 2},
        {title: "3 năm", value: 3},
        {title: "4 năm", value: 4},
        {title: "5 năm", value: 5},
        {title: "Trên 5 năm", value: 6},
      ],
      addressReceiving: 0,
      host: "https://provinces.open-api.vn/api/",
      detailAddressRules: [
        (data) => !!data || "Địa chỉ không được để trống"
      ],
      companyNameRules: [
        (data) => !!data || "Tên công ty không được để trống"
      ],
      detailAddCompanyRules: [
        (data) => !!data || "Địa chỉ công ty không được để trống"
      ],
      errorMessage: "",
    };
  },
  methods: {
    async getApi(api) {
        return axios.get(api).then(res => res.data)
    },
    async submit() {
      const isValid = validateForm(this.$refs);
      if(isValid) {
        // call api
        const data = {
          address: this.province.name + "," + this.district.name + "," + this.commune.name + "," + this.detailAddress,
          workAddress: this.companyName + "," + this.provinceCompany.name + "," + this.districtCompany.name + "," + this.communeCompany.name + "," + this.detailAddCompany,
          monthsOfWork: this.byMonth.value,
          yearsOfWork: this.byYear.value,
          receiveLocation: this.addressReceiving
        }
        const response = await registerStore().apiRegisterAdditionalInfo(data);
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
  },
  async created() {
    this.selectProvince = await this.getApi("https://provinces.open-api.vn/api/?depth=1")
    this.selectProvinceCompany = await this.getApi("https://provinces.open-api.vn/api/?depth=1")
  },
  watch: {
    async province(value) {
        const res = await this.getApi(this.host + "p/" + value.code + "?depth=2")
        this.selectDistrict = res.districts
        this.district = "";
        this.commune = "";
        this.selectCommune = [];
    },
    async district(value) {
        if(value.code) {
            const res = await this.getApi(this.host + "d/" + value.code + "?depth=2")
            this.selectCommune = res.wards
            this.commune = "";
        }
    },
    async provinceCompany(value) {
        const res = await this.getApi(this.host + "p/" + value.code + "?depth=2")
        this.selectDistrictCompany = res.districts
        this.districtCompany = "";
        this.communeCompany = "";
        this.selectCommuneCompany = [];
    },
    async districtCompany(value) {
        if(value.code) {
            const res = await this.getApi(this.host + "d/" + value.code + "?depth=2")
            this.selectCommuneCompany = res.wards
            this.communeCompany = "";
        }
    },
  }
};
</script>
<style scoped>
.txt_s_xs {
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 1rem;
}
</style>