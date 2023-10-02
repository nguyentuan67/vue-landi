<template>
    <div class="yo-form-group">
      <label for="">{{ label }}</label>
      <p class="sub-label">{{ subLabel }}</p>
      <div class="input-wrap">
        <input 
          v-if="dateType"
          :name="name"
          :placeholder="placeholder"
          ref="date"
          type="text" 
          @focus="openDatePicker" 
          @blur="closeDatePicker"
          v-model="computedValue"
        >
        <input 
          v-else
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
      modelValue: String,
      dateType: Boolean,
    },
    data() {
      return {
        message: "",
        value: "",
      }
    },
    methods: {
      validate() {
        this.message = '';
        for (let i = 0; i < this.rules.length; i++) {
          const result = this.rules[i](this.computedValue);
          if (result !== true) {
            this.message = result;
            break;
          }
        }
      },
      openDatePicker() {
        this.$refs.date.type = 'date'
      },
      closeDatePicker() {
        if (!this.computedValue) {
          this.$refs.date.type = 'text'
        }
      }
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
    width: 100%;
    margin-bottom: 8px;
  }
  .yo-form-group label {
    font-size: 14px;
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
    outline: none;
    padding: 10px;
    border-radius: 5px;
    border: solid 1px #979797;
    background-color: #fff;
    font-size: 16px;
    font-weight: 400;
    width: 100%;
  }
  .yo-form-group .message {
    color: #ff5454;
    margin-top: 4px;
    font-size: 12.8px;
  }
  </style>