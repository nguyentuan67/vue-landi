import { defineStore } from "pinia";
import ApiService from "../services/api.service";
import * as constants from "../constants";

export const registerStore = defineStore({
    id: "register",
    state: () => ({
        id: null,
        cardTypeId: 1,
        base64ImageCmt: null,
        registerStep: null
    }),
    actions: {
        async apiRegisterCard(data) {
            const request = {
                cardTypeId: this.cardTypeId,
                ...data
            }
            const response = await ApiService().post(constants.API_REGISTER_CARD, request);
            if (response.data.error == 0) {
                localStorage.setItem("cardId", JSON.stringify(response.data.output))
            }
            return response.data;
        },

        async apiRegisterContactInfo(data) {
            const cardInfo = JSON.parse(localStorage.getItem('cardInfo'))
            const resquest = {
                ...data, 
                cardTypeId: this.cardTypeId,
                ...cardInfo
            }
            const response = await ApiService().post(constants.API_REGISTER_CONTACT_INFO, resquest);
            if(response.status == 200 && response.data.output) {
                localStorage.setItem("userId", response.data.output.id)
                localStorage.setItem("cardId", response.data.output.cardId)
                localStorage.setItem("registerStep", response.data.output.registerStep);
            }
            return response.data;
        },

        async apiRegisterBasicInfo(data) {
            const id = JSON.parse(localStorage.getItem('userId'))
            const request = {
                id,
                ...data
            }
            const response = await ApiService().post(constants.API_REGISTER_BASIC_INFO, request);
            return response.data;
        },

        async apiRegisterAdditionalInfo(data) {
            const id = localStorage.getItem('userId')
            const cardId = localStorage.getItem('cardId')
            const request = {
                id,
                cardId,
                ...data
            }
            const response = await ApiService().post(constants.API_REGISTER_ADDITIONAL_INFO, request);
            return response.data;
        },

        async apiOcr(data) {
            const id = localStorage.getItem('userId')
            const request = {
                userId: id,
                ...data
            }
            this.base64ImageCmt = data.imageFront
            const response = await ApiService().post(constants.API_EKYC_OCR, request);
            if (response.data.error == '0') {
                localStorage.setItem("base64ImageCmt", data.imageFront)
            }
            return response.data;
        },
        async apiFaceVerification(data) {
            const id = JSON.parse(localStorage.getItem('userId'))
            const imageCmt = localStorage.getItem('base64ImageCmt')
            const request = {
                imageCmt,
                userId: id,
                imageLives: data
            }
            const res = await ApiService().post(constants.API_EKYC_FACEVERIFY, request)
            if (res.data.error == '0') {
                localStorage.clear()
            }
            return res.data
        }
    }
})