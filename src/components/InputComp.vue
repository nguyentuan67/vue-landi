<template>
  <div class="yo-form-group">
    <label for="">{{ label }}</label>
    <p class="sub-label">{{ subLabel }}</p>
    <div class="input-wrap">
      <input 
        type="text"
        :placeholder="placeholder"
        @input="handleInput"
        v-model="computedValue"
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
    modelValue: String
  },
  data() {
    return {
      message: "",
      value: "",
    }
  },
  methods: {
    validateInput() {
      this.message = '';
      for (let i = 0; i < this.rules.length; i++) {
        const result = this.rules[i](this.computedValue);
        if (result !== true) {
          this.message = result;
          break;
        }
      }
    },
    handleInput(e) {
      this.validateInput();
    }
  },
  computed: {
    computedValue: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit('update:modelValue', newValue);
      },
    },
  },
}
</script>
<style scoped>
.yo-form-group {
  font-family: 'Josefin Sans', sans-serif;
}
.yo-form-group label {
  font-size: 14px;
  line-height: 24px;
  color: #3c3b3e;
  margin-bottom: 3px;
  font-weight: 700;
}
.yo-form-group .sub-label {
  margin: -4px 0 4px;
  line-height: 18px;
  color: #737f99;
  font-size: 12px;
}
.yo-form-group .input-wrap {
  position: relative;
}
.yo-form-group input {
  padding: 6px 20px;
  border: 1px solid #dee3ee;
  height: 48px;
  line-height: 24px;
  color: #455073;
  width: 100%;
  background-color: #fff;
  outline: 0;
  border-radius: 4px;
  font-weight: 400;
}
.yo-form-group input:focus {
  border-color: #ff5e62;
  box-shadow: 0 0 0 4px #ffdede;
}
.yo-form-group .message {
  color: #ff5454;
  margin-top: 4px;
  font-size: 12.8px;
}
</style>