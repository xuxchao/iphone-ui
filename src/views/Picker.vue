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
        ['上海', '黑龙江', '北京', '重庆', '江西', '内蒙古'],
        ['呼和浩特', '呼和浩特1', '呼和浩特2', '呼和浩特3', '呼和浩特4', '呼和浩特5', '呼和浩特6', '呼和浩特7']
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
