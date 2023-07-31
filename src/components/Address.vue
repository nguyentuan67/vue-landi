<template>
  <div>
    <SelectComp
      :items="cities"
      itemTitle="name"
      itemValue="code"
      v-model="selectedCity"
      label="Tỉnh/ Thành phố"
    />
    <SelectComp
      :items="districts"
      itemTitle="name"
      itemValue="code"
      v-model="selectedDistrict"
      label="Thị trấn/Quận"
    />
    <SelectComp
      :items="wards"
      itemTitle="name"
      itemValue="code"
      v-model="selectedWard"
      label="Phường/Xã"
    />
    <div>Địa chỉ: {{ selectedCity?.name }}, {{ selectedDistrict?.name }}, {{ selectedWard?.name }}</div>
  </div>
</template>
<script>
import { reactive } from 'vue';
import InputComp from './InputComp.vue';
import SelectComp from './SelectComp.vue';
import axios from 'axios';
export default {
  components: {
    InputComp,
    SelectComp
  },
  data() {
    return {
      cities: reactive([]),
      districts: reactive([]),
      wards: reactive([]),
      selectedCity: "",
      selectedDistrict: "",
      selectedWard: "",
      host: "https://provinces.open-api.vn/api/"
    }
  },
  methods: {
    async getApi(api) {
      return axios.get(api)
      .then(res => res.data)
    }
  },
  async created() {
    this.cities = await this.getApi("https://provinces.open-api.vn/api/?depth=1")
  },
  watch: {
    async selectedCity(value) {
      const res = await this.getApi(this.host + "p/" + value.code + "?depth=2")
      this.districts = res.districts
      this.selectedDistrict = "";
      this.selectedWard = "";
    },
    async selectedDistrict(value) {
      if (value.code) {
        const res = await this.getApi(this.host + "d/" + value.code + "?depth=2")
        this.wards = res.wards
        this.selectedWard = "";
      }
    },
  }
}
</script>
<style scoped>

</style>