<template>
  <div class="picker">
    <nut-picker
      :is-visible="isVisible1"
      :default-value-data="defaultValueData"
      :list-data="listData"
      @choose="chooseValue"
    ></nut-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isVisible1: false,
      listData: [
        ['第一列', '第一列', '第一列', '第一列', '第一列', '第一列'],
        ['第二列', '第二列', '第二列', '第二列', '第二列', '第二列', '第二列', '第二列']
      ],
      defaultValueData: null
    }
  },
  methods: {
    chooseValue (value) {
      console.log('value', value)
    }
  }
}
</script>
