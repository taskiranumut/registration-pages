<script>
import country from "@/assets/country.json";

export default {
  name: "CountrySelect",
  data() {
    return {
      selectedValue: null,
      countryJson: null,
    };
  },
  created() {
    this.countryJson = this.sortCountryList();
    this.selectedValue = this.findInitialCountry();
  },
  methods: {
    sortCountryList() {
      return country.sort((a, b) => {
        const val1 = a.name.toUpperCase();
        const val2 = b.name.toUpperCase();
        return val1 < val2 ? -1 : val1 > val2 ? 1 : 0;
      });
    },
    findInitialCountry() {
      return this.countryJson.find((item) => item.code === "us");
    },
    handleToggle() {
      this.$refs.optionContainer.classList.toggle("active");
    },
    selectCountry(countryItem) {
      this.selectedValue = countryItem;
      this.$refs.optionContainer.classList.remove("active");
    },
  },
};
</script>

<template>
  <div class="select-box">
    <div class="options-container" ref="optionContainer">
      <div
        @click="selectCountry(countryItem)"
        v-for="(countryItem, index) in countryJson"
        :key="index"
        class="option"
      >
        <label :for="countryItem.code"
          ><span :class="`flag-icon flag-icon-${countryItem.code}`"></span
          >{{ countryItem.name }}</label
        >
      </div>
    </div>

    <div class="selected form-control" @click="handleToggle">
      <div>
        <span :class="`flag-icon flag-icon-${selectedValue.code}`"></span>
        <span>{{ selectedValue.name }}</span>
      </div>
      <span><i class="fas fa-angle-down"></i></span>
    </div>
  </div>
</template>

<style scoped>
.select-box {
  display: flex;
  position: relative;
  flex-direction: column;
  box-shadow: 0px 6px 2px -4px #f3f3f5;
}

.select-box .options-container {
  background: #fff;
  color: #3c4257;
  max-height: 0;
  width: 100%;
  overflow: hidden;
  order: 1;
  z-index: 100;
  position: absolute;
  top: 45px;
}

.selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  color: #3c4257;
  font-size: 14px;
  font-weight: bold;
  order: 0;
  padding-left: 13px;
  cursor: pointer;
}

.select-box .options-container.active {
  max-height: 260px;
  overflow-y: scroll;
  border: 1px solid #dddee2;
  border-radius: 0.25rem;
}

.select-box .option {
  padding-left: 13px;
  height: 32px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.select-box .option:hover {
  background: #dddee2;
}

.select-box label {
  cursor: pointer;
}

.select-box .option .radio {
  display: none;
}

.flag-icon {
  font-size: 12px;
  margin-right: 4px;
}
</style>
