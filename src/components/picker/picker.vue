<template>
  <div class="nut-picker" slot="custom" :class="customClassName ? customClassName : null">
    <div class="nut-picker-panel">
      <template v-for="(item, index) of listData">
        <nut-picker-slot
          :ref="`picer-slot-${(index)}`"
          :default-value="chooseValueData[index]"
          :is-update="isUpdate"
          :list-data="item"
          @chooseItem="chooseItem"
          :key="index"
          :key-index="index"
        ></nut-picker-slot>
      </template>
    </div>
  </div>
</template>
<script>
import nutpickerslot from './picker-slot.vue'
export default {
  name: 'nut-picker',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    customClassName: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: ' '
    },
    listData: {
      type: Array,
      default: () => []
    },
    defaultValueData: {
      type: Array,
      default: () => []
    }
  },
  components: {
    [nutpickerslot.name]: nutpickerslot
  },
  data () {
    return {
      chooseValueData: [],
      cacheValueData: [],
      isUpdate: false
    }
  },
  watch: {
    defaultValueData: function () {
      this.chooseValueData = [...this.defaultValueData]
      this.cacheValueData = [...this.defaultValueData]
      this.$emit('confirm', this.cacheValueData)
    }
  },
  methods: {
    updateChooseValue (self, index, value) {
      self.cacheValueData.splice(index, 1, value)
      let ref = `picer-slot-${index}`
      let refsLength = Object.keys(self.$refs).length
      // self.$refs[ref][0].updateTransform(value) 执行优先于 sele.$refs 的生产导致报错所以用没有时间的setTimeout来改变调用顺序
      if (refsLength !== this.listData.length) {
        setTimeout(() => self.$refs[ref][0].updateTransform(value))
      } else self.$refs[ref][0].updateTransform(value)
    },

    closeActionSheet () {
      this.isUpdate = !this.isUpdate
      this.cacheValueData = [...this.chooseValueData]
      this.$emit('close')
      this.$emit('close-update', this, this.chooseValueData)
    },

    confirm () {
      this.$emit('confirm', this.cacheValueData)
      this.chooseValueData = [...this.cacheValueData]
      this.$emit('close')
    },

    chooseItem (value, index) {
      if (this.cacheValueData[index] !== value) {
        this.cacheValueData[index] = value
        this.$emit('choose', this.cacheValueData)
      }
    }
  },
  created () {
    if (this.defaultValueData && this.defaultValueData.length) {
      this.chooseValueData = [...this.defaultValueData]
    } else {
      let defaultValueData = []
      this.listData.map(item => {
        defaultValueData.push(item[0])
      })
      this.chooseValueData = [...defaultValueData]
    }
  }
}
</script>
