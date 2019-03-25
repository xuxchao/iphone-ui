<template>
  <div class="cell">
    <h4>基本用法</h4>
    <nut-cell
      title = "模式一"
      subTitle = "无单机状态"
      desc = "右侧描述文字"
      :showIcon = "true"
    >
    </nut-cell>
    <nut-cell
      :isLink = "true"
      title = "模式二"
      subTitle = "不显示icon"
      desc="右侧描述文字">
    </nut-cell>
    <nut-cell
      :isLink = "true"
      linkUrl = "https://github.com/mrxu0"
      title = "模式三"
      subTitle = "跳转链接"
      desc="右侧描述文字"
      :showIcon = "true">
    </nut-cell>
    <nut-cell
      :isLink = "true"
      title = "模式四"
      desc="右侧描述文字"
      :showIcon = "true">
    </nut-cell>
  </div>
</template>
<script>
export default {

}
</script>
