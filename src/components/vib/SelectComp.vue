<template>
  <div class="yo-select" @blur="open = false" tabindex="0">
    <label v-if="label" :class="selected ?  'isSelected' : ''">{{ label }}</label>
    <p v-if="subLabel" class="sub-label">{{ subLabel }}</p>
    <div class="select-wrap">
      <div class="selected"
       :class="{ open: open }" 
       @click="items.length > 0 ? open = !open : ''"
      >
        {{ selected[itemTitle] || selected["title"] || selected }}
      </div>
      <div class="message">{{ message }}</div>
      <div class="items-wrap" :class="{ selectHide: !open }">
        <div
          v-for="(item, i) in items"
          :key="i"
          @click="
            selected = item;
            open = false;
            $emit('update:modelValue', item);
          "
        >
          {{ item[itemTitle] || selected["title"] || item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true },
    default: { type: String, required: false, default: null },
    modelValue: { type: [String, Object] },
    label: { type: String, required: false },
    subLabel: { type: String, required: false },
    itemTitle: { type: String, required: false },
    itemValue: { type: [String, Number], required: false },
    errorMessage: { type: String, required: false }
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : "",
      open: false,
      message: "",
    };
  },
  mounted() {
    // this.$emit("update:modelValue", this.selected);
  },
  methods: {
    validate() {
      this.message = ""
      if (!this.modelValue || Object.keys(this.modelValue).length === 0 && this.modelValue.constructor === Object) {
        this.message = this.errorMessage || "Trường này là bắt buộc"
      }
    }
  },
  watch: {
    modelValue(value) {
      this.selected = value
      this.validate()
    }
  }
};
</script>

<style scoped>
.yo-select {
  width: 100%;
  font-family: 'Josefin Sans', sans-serif;
  position: relative;
}
.yo-select label {
  position: absolute;
  left: 0;
  transition: all .4s ease;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  color: #5E5C62;
}
.yo-select label.isSelected {
  top: 5px;
  font-size: 14px;
  transform: translateY(0);
}
.yo-select .sub-label {
  margin: -4px 0 4px;
  line-height: 18px;
  color: #737f99;
  font-size: 12px;
}
.yo-select .selected {
  height: 50px;
  font-size: 18px;
  font-weight: 400;
  padding: 25px 20px 0 0;
  cursor: pointer;
  border-bottom: 1px solid #AAAAAA;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.yo-select .selected.open {
  border-bottom: 2px solid #000000;
}

.yo-select .selected:after {
  position: absolute;
  content: "";
  top: 20px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #4842f4 transparent transparent transparent;
}

.yo-select .items-wrap {
  padding: 8px 0;
  border-radius: 0px 0px 4px 4px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  overflow: auto;
  position: absolute;
  font-size: 16px;
  left: 0;
  right: 0;
  z-index: 4;
  max-height: 310px;
  background-color: #fff;
}

.yo-select .items-wrap div {
  color: #737f99;
  padding: 4px 16px;
  min-height: 48px;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
}

.yo-select .items-wrap div:hover {
  background-color: #e4e4e4;
}

.selectHide {
  display: none;
}
.yo-select .message {
  color: #ff5454;
  margin-top: 4px;
  font-size: 12.8px;
}
@media only screen and (max-width: 575px) {
  .row .col-12 + .col-12 .yo-select {
    margin-top: 20px;
  }
}
</style>
