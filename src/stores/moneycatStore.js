import { defineStore } from "pinia";
import ApiService from "../services/api.service";
import * as constants from "../constants";

export const moneycatStore = defineStore({
  id: "moneycat",
  state: () => ({
    phone: null,
  }),
  actions: {
    async registerContactInfo(data) {
      const res = await ApiService().post(constants.API_MC_CONTACT_INFO, data);
      if(res.data.error == 0) {
        this.phone = res.data.output.phone
        localStorage.setItem("contact-info", JSON.stringify(res.data.output))
      }
      return res.data;
    },
    async registerBasicInfo(data) {
      const phone = JSON.parse(localStorage.getItem('contact-info')).phone
      const request = {
        phone,
        ...data
      }
      const res = await ApiService().post(constants.API_MC_BASIC_INFO, request);
      return res.data;
    },
    async ekycOcr(data) {
      const phone = JSON.parse(localStorage.getItem('contact-info')).phone;
      const request = {
        phone,
        ...data
      }
      const res = await ApiService().post(constants.API_MC_EKYC_OCR, request)
      if (res.data.error == '0') {
        localStorage.removeItem("contact-info")
      }
      return res.data
    },
    async getBasicInfo() {
      const phone = JSON.parse(localStorage.getItem('contact-info')).phone;
      const res = await ApiService().get(constants.MC_GET_BASIC_INFO, {
        params: {
          phone
        }
      })
      return res.data;
    }
  }
})