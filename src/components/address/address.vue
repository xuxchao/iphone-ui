<template>
  <div class="iphone-address">
    <nut-actionsheet
      :is-visible="isVisible"
      @close="switchActionSheet('isVisible')"
      :menu-items="menuItems"
      @choose="chooseItem">
    </nut-actionsheet>
  </div>
</template>
<script>
import { Actionsheet } from '../actionsheet/actionsheet'
import { Picker } from '../Picker/Picker'
export default {
  name: 'iphone-actionsheet',
  components: [ Actionsheet, Picker ]
}
</script>
