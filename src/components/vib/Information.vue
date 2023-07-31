<template>
  <p class="vib-title mt-20">Thông tin cơ bản</p>
  <div class="row mt-20">
    <div class="col-sm-6 col-12">
      <InputComp
        v-model="cccd" 
        label="Số CCCD/CMND"
        :rules="cccdRule1"
        ref="cccd"
        length="12"
        @input="errorCccd = ''"
      />
      <div class="error-message">{{ errorCccd }}</div>
    </div>
    <div class="col-sm-6 col-12">
      <InputComp
        v-model="oldCccd" 
        label="Số CCCD/CMND cũ (nếu có)"
        length="12"
      />
    </div>
  </div>
  <div class="row mt-20">
    <div class="col-sm-6 col-12">
      <InputComp
        v-model="dob" 
        label="Ngày sinh"
        type="date"
        ref="dob"
        :rules="notBlank"
        :type="'date'"
      />
    </div>
    <div class="col-sm-6 col-12">
      <SelectComp
        v-model="acedemic"
        :items="listAcedemic"
        label="Trình độ học vấn"
        ref="acedemic"
      />
    </div>
  </div>
  <div class="row mt-20">
    <div class="col-sm-6 col-12">
      <SelectComp
        :items="['Đi làm', 'Tự kinh doanh', 'Khác']"
        v-model="typeJob"
        label="Tình trạng việc làm"
        ref="typeJob"
      />
    </div>
    <div class="col-sm-6 col-12">
      <SelectComp
        :items="listJob"
        v-model="job" 
        label="Nghề nghiệp"
        ref="job"
      />
    </div>
  </div>
  <div class="row mt-20">
    <div class="col-sm-6 col-12">
      <InputComp
        v-model="income" 
        label="Thu nhập hàng tháng (VNĐ)"
        ref="income"
        :rules="notBlank"
        @update:modelValue="formatIncome"
      />
    </div>
    <div class="col-sm-6 col-12">
      <InputComp
        v-model="school" 
        label="Tên trường tiểu học của bạn (Câu hỏi bí mật)"
        ref="school"
        :rules="notBlank"
      />
    </div>
  </div>
  <p class="vib-title">Người liên hệ khi cần</p>
  <div class="row mt-20">
    <div class="col-sm-6 col-12">
      <InputComp
        v-model="phone1" 
        label="Số điện thoại bạn bè, người thân 1"
        ref="phon1"
        :rules="phoneRules1"
        length="10"
      />
    </div>
    <div class="col-sm-6 col-12">
      <InputComp
        v-model="phone2" 
        label="Số điện thoại bạn bè, người thân 2"
        ref="phon2"
        :rules="phoneRules2"
        length="10"
      />
    </div>
  </div>
  <div class="error-message">{{ errorMessage }}</div>
</template>
<script>
import InputComp from './InputComp.vue';
import SelectComp from './SelectComp.vue';
import { validateForm } from '../../utils/validateForm'
import { registerStore } from '../../stores/register.store'
export default {
  components: {
    InputComp,
    SelectComp
  },
  data() {
    return {
      cccd: "",
      oldCccd: "",
      dob: null,
      acedemic: "",
      listAcedemic: ["Sau đại học", "Đại học", "Cao đẳng", "Trung học phổ thông"],
      typeJob: "",
      listJob: ['Bác sĩ', 'Bán hàng', 'Cán bộ', 'Nhân viên', 'Giáo viên', 'Khác'],
      job: "",
      income: "",
      school: "",
      phone1: "",
      phone2: "",
      cccdRule1: [
        (v) => !!v || "Không được để trống",
        (v) => /^(?:\d{9}|\d{12})$/.test(v) || "Số CCCD không hợp lệ",
        (v) => !this.oldCccd || v !== this.oldCccd || "Số CCCD không được trùng"
      ],
      cccdRule2: [
        (v) => /^(?:\d{9}|\d{12})$/.test(v) || "Số CCCD không hợp lệ",
        (v) => !this.cccd || v !== this.cccd || "Số CCCD không được trùng"
      ],
      notBlank: [v => !!v  || "Không được để trống"],
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
      errorMessage: "",
      errorCccd: "",
    }
  },
  
  methods: {
    formatIncome(newValue) {
      if (newValue != "") {
        const formattedNumber = newValue.replace(/[^\d]/g, '');
        const formatter = new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
          currencyDisplay: "code"
        });
        this.income = formatter.format(formattedNumber).replace("VND", "").trim();
      }
    },
    async submit() {
      this.errorMessage = ""
      this.income = this.income.replace(/[^\d]/g, '');
      const isValid = validateForm(this.$refs);
      if(isValid) {
        // call api
        const data = {
          nid1: this.cccd,
          nid2: this.oldCccd,
          birthday: this.dob,
          literacy: this.acedemic,
          jobType: this.typeJob,
          job: this.job,
          income: this.income,
          secretQuestion: this.school,
          relativePhone1: this.phone1,
          relativePhone2: this.phone2
        }
        const response = await registerStore().apiRegisterBasicInfo(data);
        if (response.error == '0') {
          return true;
        } else if (response.error == '3') {
          response.detailMessage?.nid1 ? this.errorCccd = "Số CCCD đã được đăng ký." : "";
          return false;
        } else {
          this.errorMessage = "Có lỗi xảy ra, vui lòng thử lại"
          return false;
        }
      } else {
        return isValid;
      }
    }
  }
}
</script>
<style scoped>
.error-message {
  color: #ff5454;
  margin-top: 6px;
  font-size: 12.8px;
  font-family: 'Josefin Sans', sans-serif;
}
</style>