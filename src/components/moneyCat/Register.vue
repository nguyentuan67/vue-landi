<template>
    <div class="row">
        <div class="col-md-5 col-sm-12">
            <div class="welcom-text">
                <div class="welcom-text-main">Chào</div>
                <div class="welcom-text-second">
                    Vui lòng điền thông tin cá nhân của bạn một 
                    <span></span>
                    cách cẩn thận, điều này là cần thiết để được
                    <span></span>
                    duyệt và cấp cho bạn các điều khoản vay tốt hơn.
                </div>
            </div>
            <div class="step">
                <SelectComp
                    v-model="gender"
                    :items="genders"
                    ref="gender"
                    label="Giới tính"/>
                <InputComp
                    v-model="dob"
                    name="dob"
                    label="Ngày sinh"
                    ref="dob"
                    date-type
                    :rules="notBlankRule"/>
                <InputComp
                    v-model="identity"
                    name="identity"
                    label="Số CMND"
                    ref="cccd"
                    :rules="cccdRule"/>
                <SelectComp
                    v-model="carierphone"
                    :items="phoneBrands"
                    ref="phoneBrand"
                     label="Nhãn hiệu điện thoại bạn đang dùng"/>
                <SelectComp
                    v-model="location"
                    :items="provinces"
                    itemTitle="name"
                    ref="location"
                    label="Vị trí của bạn"/>
                <InputComp
                    v-model="relativePhone1"
                    name="relativePhone1"
                    :rules="phoneRules1"
                    ref="relativePhone1"
                    label="Số điện thoại người thân"/>
                <InputComp
                    v-model="relativePhone2"
                    name="relativePhone2"
                    :rules="phoneRules2"
                    ref="relativePhone2"
                    label="Số điện thoại nhà tuyển dụng/đồng nghiệp"/>
                <SelectComp
                    v-model="nameBank"
                    :items="nameBanks"
                    ref="nameBank"
                    label="Tên ngân hàng"/>
                <InputComp
                    v-model="accountNumber"
                    ref="accountNumber"
                    name="accountNumber"
                    :rules="notBlankRule"
                    label="Số tài khoản"/>
            </div>
        </div>
        <div class="offset-md-1 col-md-5 col-sm-12">
            <div class="social-block">
                <div class="social-block-header">Bạn muốn tăng khả năng được duyệt?</div>
                <div class="social-block-subtext">
                    You can select all./Những khách hàng để lại thông tin bổ sung của họ sẽ có nhiều khả năng được
                    duyệt. Vui lòng chọn các dịch vụ bạn đang sử dụng. Bạn có thể chọn tất cả.
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import InputComp from './InputComp.vue';
import SelectComp from './SelectComp.vue';
import { moneycatStore } from "../../stores/moneycatStore";
import { validateForm } from '../../utils/validateForm';
import axios from 'axios';
export default {
    components: {
        InputComp,
        SelectComp
    },
    data() {
        return {
            gender: null,
            genders: [{title: "Nam", value: 0}, {title: "Nữ", value: 1}],
            dob: "",
            messageDob: "",
            identity: "",
            carierphone: "",
            phoneBrands: ['Iphone', 'Samsung', 'Sony', 'Oppo', 'Nokia', 'LG', 'Asus', 'Huawei', 'Vivo', 'Khác' ],
            location: null,
            provinces: [],
            relativePhone1: "",
            relativePhone2: "",
            nameBank: "",
            nameBanks: [
                'BIDV', 'TechcomBank', 'SacomBank', 'VietinBank', 'MBBank', 'ACB', 'VPBank', 'Khác' 
            ],
            accountNumber: "",
            cccdRule: [
                (v) => /^(?:\d{9}|\d{12})$/.test(v) || "Số CCCD không hợp lệ",
                (v) => !this.oldCccd || v !== this.oldCccd || "Số CCCD không được trùng"
            ],
            phoneRules1: [
                (v) => !!v || "Không được để trống",
                (v) => /^0\d{9}$/.test(v) || "Số điện thoại không hợp lệ",
                (v) => !this.phone2 || v !== this.phone2 || "Số điện thoại không được trùng"
            ],
            phoneRules2: [
                (v) => !!v || "Không được để trống",
                (v) => /^0\d{9}$/.test(v) || "Số điện thoại không hợp lệ",
                (v) => !this.phone1 || v !== this.phone1 || "Số điện thoại không được trùng"
            ],
            accountNumberRules: [
                v => !!v || "Không được để trống"
            ],
            notBlankRule: [
                v => !!v || "Không được để trống"
            ]
        }
    },
    async created() {
        this.provinces = await this.getApi("https://provinces.open-api.vn/api/?depth=1")
    },
    methods: {
        async submit() {
            this.messageDob = "";
            if (!this.dob) {
                this.messageDob = "Không được để trống"
            }
            const isValid = validateForm(this.$refs);
            if(isValid && this.dob) {
                const data = {
                    gender: this.gender.value,
                    dob: this.dob,
                    nid: this.identity,
                    phoneType: this.carierphone,
                    address: this.location.name,
                    relativePhone1: this.relativePhone1,
                    relativePhone2: this.relativePhone2,
                    bankName: this.nameBank,
                    bankAccount: this.accountNumber
                }
                const res = await moneycatStore().registerBasicInfo(data);
                if (res.error == 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
            
        },
        async getApi(api) {
            return axios.get(api).then(res => res.data)
        },
    }
}
</script>
<style scoped>
.welcome-text {
    text-align: center;
    padding-bottom: 25px;
}
.welcom-text-main {
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000;
}
.welcom-text-second {
    font-size: 14px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000;
    padding: 0 7px;
}
.step {
    margin: 12px 0;
    margin-bottom: 0;
}
.social-block {
    border-radius: 5px;
    border: solid 1px #c4c4c4;
    background-color: #f8f8f8;
    padding: 8px 15px;
    width: 100%;
    margin-bottom: 25px;
    margin-top: 103px;
}
.social-block-header {
    font-size: 14px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
    margin-bottom: 14px;
}
.social-block-subtext {
    font-size: 14px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #9b9b9b;
    margin-bottom: 7px;
}
.input-date {
    width: 100%;
    margin-bottom: 8px;
}
.input-date input {
    outline: none;
    padding: 10px;
    border-radius: 5px;
    border: solid 1px #979797;
    background-color: #fff;
    font-size: 16px;
    font-weight: 400;
    width: 100%;
}
.input-date label {
    font-size: 14px;
    line-height: 24px;
    color: #3c3b3e;
    margin-bottom: 3px;
}
.message {
    color: #ff5454;
    margin-top: 4px;
    font-size: 12.8px;
}
</style>