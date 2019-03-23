<template>
  <div class="actionsheet">

    <!-- 第二组 年龄 -->
    <nut-cell
      :isLink = "true"
      title = "地区选择控件"
      subTitle = "带取消按钮"
      :showIcon = "true"
      @click.native="switchActionSheet('isVisible')">
      <span slot="desc">请选择</span>
    </nut-cell>
    <nut-actionsheet :is-visible="isVisible" @close="switchActionSheet('isVisible')">
        <div class="nut-picker" slot="custom" :class="customClassName ? customClassName : null">
            <div class="nut-picker-control">
                <span class="nut-picker-confirm-btn"  @click="switchActionSheet('isVisible')">{{cancelText}}</span>
                <div class="nut-picker-title">{{title ? title : ''}}</div>
                <span class="nut-picker-cancel-btn" @click="switchActionSheet('isVisible')">{{okBtnTxt}}</span>
            </div>
            <nut-picker
              :is-visible="isVisible"
              :default-value-data="defaultValueData"
              :list-data="listData"
              @choose="chooseValue"
            ></nut-picker>
        </div>
    </nut-actionsheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isVisible: false,
      menuItems: [
        { name: '男', value: 1 },
        { name: '女', value: 2 }
      ],

      // 传递的参数
      customClassName: false,
      cancelText: '取消',
      okBtnTxt: '确定',
      title: '地区控件',
      listData: [
        ['第一列', '第一列', '第一列', '第一列', '第一列', '第一列'],
        ['第二列', '第二列', '第二列', '第二列', '第二列', '第二列', '第二列', '第二列']
      ],
      defaultValueData: null
    }
  },
  methods: {
    switchActionSheet (param) {
      this[`${param}`] = !this[`${param}`]
    },
    chooseValue (value) {
      console.log('value', value)
    },
    chooseItem (itemParams) {
      this.sex = itemParams.name
    }
  }
}
</script>
<style lang="stylus" scoped>
.nut-picker{
    background-color: #FFF;
    width: 100%;
}
.nut-picker-control{
    display: flex;
    height: 40px;
    border-bottom: 1px solid $light-color;
    text-align: center;
    line-height: 40px;
    font-size: $font-size-base;
    .nut-picker-cancel-btn,
    .nut-picker-confirm-btn{
        width: 60px;
        color: $primary-color;
    }
    .nut-picker-title{
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>
