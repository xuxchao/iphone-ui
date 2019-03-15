<template>
    <div class="iphone-picker"></div>
</template>
<script>
import Scroller from './scroller'
export default {
  name: 'IphonePicker',
  mounted () {
    new Scroller('.iphone-picker')
  }
}
</script>
<style>
@import './scroller.css';
</style>
