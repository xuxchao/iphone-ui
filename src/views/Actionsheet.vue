<template>
  <div class="actionsheet">
    <div class="button" @click="switchActionSheet('show')"></div>
    <transition name="bounce">
      <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
    </transition>
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

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */

.bounce-enter-active {
  animation: bounce-in 5s;
}
.bounce-leave-active {
  animation: bounce-in 5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

<script>
export default {
  data () {
    return {
      show: false,
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
