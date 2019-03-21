<template>
  <div class="actionsheet">
    <div class="button" @click="switchActionSheet('isVisible')"></div>
    <nut-cell
      :isLink = "true"
      title = "性别"
      :showIcon = "true"
      desc="请选择"
      @click.native="switchActionSheet('isVisible')">
    </nut-cell>
    <nut-actionsheet
      :is-visible="isVisible"
      @close="switchActionSheet('isVisible')"
      :menu-items="menuItems"
      @choose="chooseItem"
    ></nut-actionsheet>
  </div>
</template>
<style lang="stylus" scoped>
.button {
  width: 100px;
  height: 50px;
  background: red;
}
</style>

<script>
export default {
  data () {
    return {
      menuItems: [
        {
          name: '男',
          value: 0
        },
        {
          name: '女',
          value: 1
        }
      ],
      isVisible: false
    }
  },
  methods: {
    switchActionSheet (param) {
      console.log('switchActionSheet', param)
      this[`${param}`] = !this[`${param}`]
    },
    chooseItem (itemParams) {
      console.log('chooseItem', itemParams)
    }
  }
}
</script>
