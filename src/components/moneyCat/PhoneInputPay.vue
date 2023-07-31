<template>
  <div class="title-input">Số điện thoại của bạn :</div>
  <div class="input-block">
    <input
      class="phone-input"
      name="phone"
      type="text"
      v-model="inputValue"
      @keypress="onlyNumbers"
      @input="handleInput"
      :maxlength="12"
      @focus="handleFocus"
      @blur="handleBlur"
      ref="phoneInput"
    />
    <button type="button">TIẾP THEO</button>
  </div>
</template>

<script>
export default {
  name: "PhoneInputPay",
  data: () => ({
    inputValue: "",
  }),
  methods: {
    onlyNumbers(event) {
      const charCode = event.which ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
      }
    },
    
     handleInput() {
        let value = this.inputValue;

      if (/^\d*$/.test(value) && value !== "") {
      // Giới hạn số chữ số tối đa là 10
      if (value.length <= 10) {
        // Định dạng số điện thoại theo mẫu xxxx xxx xxx
        const formattedValue = value.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
        this.inputValue = formattedValue;
      }
      } else {
         this.inputValue = "0";
      }
     },
     
     handleFocus() {
      // Kiểm tra nếu trường rỗng thì hiển thị số 0 khi click vào trường
      if (this.inputValue === "") {
        this.inputValue = "0";
      }
    },

     handleBlur() {
      // Kiểm tra nếu trường vẫn là số 0 thì reset giá trị về trống khi click ra ngoài trường
      if (this.inputValue === "0") {
        this.inputValue = "";
      }
    },
  },

  mounted() {
     this.$refs.phoneInput.addEventListener("click", () => {
      if (this.inputValue === "") {
        this.inputValue = "0";
      }
    });
    // Mặc định bắt đầu bằng số 0 và không thể xóa khỏi input
    this.$refs.phoneInput.addEventListener("keydown", (event) => {
      if (event.key === "Backspace" && this.inputValue.length <= 1) {
        event.preventDefault();2
      }
    });
  },
};
</script>

<style scoped>
.title-input {
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 120%;
  margin-bottom: 10px;
  color: #767676;
}

.input-block {
  display: flex;
  justify-content: flex-start;
}

.phone-input {
  background: #fff;
  border: 1px solid #979797;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 14px 7px;
  font-size: 14px;
}

button {
  background: #f62;
  box-shadow: 0 10px 10px -4px rgba(238, 68, 0, 0.3);
  border-radius: 44px;
  border: 0;
  width: 60%;
  padding: 11px 0;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  max-width: 300px;
  color: #fff;
  margin-left: 40px;
}
</style>
