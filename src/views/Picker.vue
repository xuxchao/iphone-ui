<template>
  <div class="picker">
    <nut-picker
      :is-visible="isVisible1"
      :default-value-data="defaultValueData1"
      :list-data="listData1"
      @close="switchPicker('isVisible1')"
      @confirm="setYearValue"
    ></nut-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible1: false,
      listData1: [
        ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]
      ],
      defaultValueData1: null 
    };
  },
  methods: {
    setYearValue(chooseData) {
      this.year = `${chooseData[0]}年`;
    }
  }
};
</script>