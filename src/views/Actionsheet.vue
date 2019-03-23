<template>
  <div class="actionsheet">

    <!-- 第一组 性别 -->
    <nut-cell
      :isLink = "true"
      title = "性别"
      :showIcon = "true"
      @click.native="switchActionSheet('isVisible')">
      <span slot="desc">{{sex}}</span>
    </nut-cell>
    <nut-actionsheet
      :is-visible="isVisible"
      @close="switchActionSheet('isVisible')"
      :menu-items="menuItems"
      @choose="chooseItem">
    </nut-actionsheet>

    <!-- 第二组 年龄 -->
    <nut-cell
      :isLink = "true"
      title = "年龄"
      subTitle = "带取消按钮"
      :showIcon = "true"
      @click.native="switchActionSheet('isVisible2')">
      <span slot="desc">{{age}}</span>
    </nut-cell>
    <nut-actionsheet
      :is-visible="isVisible2"
      @close="switchActionSheet('isVisible2')"
      cancelTxt="取消"
      :menu-items="menuItems2"
      @choose="chooseItemAgeSpec">
    </nut-actionsheet>

    <!-- 第三组 高亮年龄 -->
    <nut-cell
      :isLink = "true"
      title = "年龄"
      subTitle = "高亮年龄"
      :showIcon = "true"
      @click.native="switchActionSheet('isVisible3')">
      <span slot="desc">{{lightAge}}</span>
    </nut-cell>
    <nut-actionsheet
      :is-visible="isVisible3"
      @close="switchActionSheet('isVisible3')"
      cancelTxt="取消"
      :chooseTagValue="lightAge"
      :menu-items="menuItems3"
      @choose="chooseItemLightAgeSpec">
    </nut-actionsheet>
    <!-- 第四组 提示类 -->
    <nut-cell
      :isLink = "true"
      title = "我要提示你"
      subTitle = "我是描述"
      :showIcon = "true"
      @click.native = "switchActionSheet('isVisible4')"
      desc = "请选择">
    </nut-cell>
    <nut-actionsheet
      :is-visible="isVisible4"
      :menu-items="menuItems4"
      chooseTagValue="确定"
      cancelTxt="取消"
      @close="switchActionSheet('isVisible4')">
      <span slot="title"><label>确定删除吗？</label></span>
      <span slot="sub-title">删除之后不能，描述信息，删除之后不能，描述信息</span>
    </nut-actionsheet>
    <!-- 第五组 自定义 -->
    <nut-cell
      :isLink = "true"
      title = "自定义"
      :showIcon = "true"
      @click.native="switchActionSheet('isVisible5')">
      <span slot="desc">打开</span>
    </nut-cell>
    <nut-actionsheet :is-visible="isVisible5"
      @close="switchActionSheet('isVisible5')">
      <div slot="custom" class="custom-wrap"><span>自定义</span></div>
    </nut-actionsheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 第一组 性别
      sex: '请选择',
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
      isVisible: false,
      // 第二组 年龄
      age: '请选择',
      menuItems2: [
        {
          'name': '20岁以下',
          'value': 0
        },
        {
          'name': '20~40岁',
          'value': 1
        },
        {
          'name': '40~60岁',
          'value': 2
        },
        {
          'name': '60以上',
          'value': 3
        }
      ],
      isVisible2: false,
      // 第三组 高亮年龄
      lightAge: '请选择',
      menuItems3: [
        {
          'name': '20岁以下',
          'value': 0
        },
        {
          'name': '20~40岁',
          'value': 1
        },
        {
          'name': '40~60岁',
          'value': 2
        },
        {
          'name': '60以上',
          'value': 3
        }
      ],
      isVisible3: false,
      // 第四组 提示类
      menuItems4: [
        {
          'name': '确定'
        }
      ],
      isVisible4: false,
      // 第五组 提示类
      isVisible5: false
    }
  },
  methods: {
    switchActionSheet (param) {
      this[`${param}`] = !this[`${param}`]
    },
    chooseItem (itemParams) {
      this.sex = itemParams.name
    },
    chooseItemAgeSpec (itemParams) {
      this.age = itemParams.name
    },
    chooseItemLightAgeSpec (itemParams) {
      this.lightAge = itemParams.name
    }
  }
}
</script>
<style lang="stylus" scoped>
.custom-wrap{
    padding: 110px 0;
    text-align: center;
}
</style>
