<template>
  <div class="picker">
    <nut-picker
      :is-visible="isVisible1"
      :default-value-data="defaultValueData"
      :list-data="listData"
      @choose="updateChooseValue"
    ></nut-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible1: false,
      data: {
        北京: ["北京"],
        黑龙江: [
          "哈尔滨",
          "绥化",
          "漠河",
          "大兴安岭",
          "牡丹江",
          "佳木斯",
          "齐齐哈尔",
          "大庆",
          "五大连池"
        ],
        江西: ["九江", "南昌", "赣州"],
        上海: ["上海"],
        重庆: ["重庆"],
        内蒙古: [
          "呼和浩特",
          "呼和浩特1",
          "呼和浩特2",
          "呼和浩特3",
          "呼和浩特4",
          "呼和浩特5",
          "呼和浩特6",
          "呼和浩特7"
        ]
      },
      dataSub: {
        上海: ["测试1", "测试2"],
        北京: ["西城区", "东城区", "大兴区", "朝阳区", "海淀区"],
        南昌: ["青山湖区", "西湖区", "宏都中路", "梦时代", "八一广场"],
        绥化: ["明水", "拜泉"],
        哈尔滨: ["道里区", "道外区"]
      },
      listData: [["上海", "黑龙江", "北京", "重庆", "江西", "内蒙古"]],
      defaultValueData: null
    };
  },
  methods: {
    updateChooseValue(self, index, value) {
      index < 2 && this.updateLinkage(self, value, index + 1, null);
    },
    updateLinkage(self, value, index, chooseValue, cacheValueData) {
      if (!value) {
        return false;
      }
      switch (index) {
        case 1: {
          let i = this.listData[0].indexOf(value);
          this.listData.splice(index, 1, [...this.data[this.listData[0][i]]]);
          chooseValue = chooseValue ? chooseValue : this.listData[index][0];
          self && self.updateChooseValue(self, index, chooseValue);
          this.updateLinkage(
            self,
            chooseValue,
            2,
            cacheValueData && cacheValueData[2] ? cacheValueData[2] : null
          );
          break;
        }
        case 2: {
          let areaData = this.dataSub[value] ? this.dataSub[value] : [];
          this.listData.splice(index, 1, [...areaData]);
          chooseValue = chooseValue ? chooseValue : this.listData[index][0];
          self && self.updateChooseValue(self, index, chooseValue);
          break;
        }
      }
    }
  }
};
</script>