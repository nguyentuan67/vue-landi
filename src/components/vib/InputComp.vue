<template>
  <div class="yo-form-group">
    <label :class="isFocus || computedValue ? 'isFocus' : ''">{{ label }}</label>
    <p class="sub-label">{{ subLabel }}</p>
    <div class="input-wrap">
      <input 
        :name="name"
        :ref="type =='date' ? 'date' : ''"
        :placeholder="placeholder"
        v-model="computedValue"
        @focus="openDatePicker"
        @blur="closeDatePicker"
        :maxlength="length"
      >
    </div>
    <div class="message">{{ message }}</div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    label: String,
    subLabel: String,
    hideMessage: Boolean,
    placeholder: String,
    rules: Array,
    modelValue: String,
    type: {
      type: String,
      require: false,
      default: "text"
    },
    length: String
  },
  data() {
    return {
      message: "",
      value: "",
      isFocus: false,
    }
  },
  methods: {
    validate() {
      this.message = '';
      if (this.rules) {
        for (let i = 0; i < this.rules.length; i++) {
          const result = this.rules[i](this.computedValue);
          if (result !== true) {
            this.message = result;
            break;
          }
        }
      }
    },
    openDatePicker() {
      this.isFocus = true
      this.type == 'date' ? this.$refs.date.type = 'date' : ''
    },
    closeDatePicker() {
      if (!this.computedValue) {
        this.type == 'date' ?this.$refs.date.type = 'text' : ''
        this.isFocus = false;
      }
    },
  },
  computed: {
    computedValue: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.validate();
        this.$emit('update:modelValue', newValue);
      },
    },
  },
  watch: {
    computedValue(newValue) {
      this.$emit('update:modelValue', newValue);
    },
    modelValue(newValue) {
      this.computedValue = newValue;
    }
  },
}
</script>
<style scoped>
.yo-form-group {
  font-family: 'Josefin Sans', sans-serif;
  position: relative;
  height: 50px;
}
.yo-form-group label {
  position: absolute;
  left: 0;
  transition: all .4s ease;
  top: 50%;
  transform: translateY(-50%);
  color: #5E5C62;
  z-index: 1;
}
.yo-form-group label.isFocus {
  top: 5px;
  transform: translateX(0);
  font-size: 14px;
}
.yo-form-group .sub-label {
  margin: -4px 0 4px;
  line-height: 18px;
  color: #737f99;
  font-size: 12px;
}
.yo-form-group input {
  position: relative;
  z-index: 2;
  font-size: 18px;
  font-weight: 400;
  width: 100%;
  padding: 25px 0 0;
  border: 0;
  border-bottom: 1px solid #AAAAAA;
  background-color: transparent;
  border-radius: 0;
  color: #333;
  outline: none;
  line-height: 24px;
}
input:focus {
  border-bottom: 2px solid #000000;
}
.yo-form-group .message {
  color: #ff5454;
  margin-top: 4px;
  font-size: 12.8px;
}
@media only screen and (max-width: 575px) {
  .row .col-12 + .col-12 .yo-form-group {
    margin-top: 20px;
  }
}
</style>