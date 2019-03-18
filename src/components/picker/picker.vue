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
import nutpickerslot from "./picker-slot.vue";
export default {
  name: "nut-picker",
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
      default: " "
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
  data() {
    return {
      chooseValueData: [],
      cacheValueData: [],
      isUpdate: false
    };
  },
  watch: {
    defaultValueData: function() {
      this.chooseValueData = [...this.defaultValueData];
      this.cacheValueData = [...this.defaultValueData];
      this.$emit("confirm", this.cacheValueData);
    }
  },
  methods: {
    updateChooseValue(self, index, value) {
      self.cacheValueData.splice(index, 1, value);
      let ref = `picer-slot-${index}`;
      console.log('111', ref,self.$refs)
      setTimeout(()=>{
        console.log('222', ref, self.$refs)
      })
      // self.$refs[ref][0].updateTransform(value);
    },

    closeActionSheet() {
      this.isUpdate = !this.isUpdate;
      this.cacheValueData = [...this.chooseValueData];
      this.$emit("close");
      this.$emit("close-update", this, this.chooseValueData);
    },

    confirm() {
      this.$emit("confirm", this.cacheValueData);
      this.chooseValueData = [...this.cacheValueData];
      this.$emit("close");
    },

    chooseItem(value, index) {
      if (this.cacheValueData[index] !== value) {
        this.cacheValueData[index] = value;
        this.$emit("choose", this, index, value, this.cacheValueData);
      }
    }
  },
  created() {
    if (this.defaultValueData && this.defaultValueData.length) {
      this.chooseValueData = [...this.defaultValueData];
    } else {
      let defaultValueData = [];
      this.listData.map((item, index) => {
        defaultValueData.push(item[0]);
      });
      this.chooseValueData = [...defaultValueData];
    }
  }
};
</script>