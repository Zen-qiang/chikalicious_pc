<template>
  <div class="c-btnmore" :class="{active: active || isTouchDevice}">
    <span>{{btnText}}</span>
  </div>
</template>
<script>
export default {
  naem: 'BtnMore',
  props: {
    btnText: {
      type: String,
      default: 'READ MORE'
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isTouchDevice () {
      return 'ontouchstart' in document.documentElement
    }
  }
}
</script>
<style lang="scss" scoped>
.c-btnmore {
  color: $color;
  display: inline-block;
  text-align: center;
  padding: 0 rem(48);
  background: #eee repeating-linear-gradient(-45deg, transparent, transparent 2px, #fff 2px, #fff 6px);
  cursor: pointer;
  span {
    line-height: rem(40);
    font-size: rem(18);
    font-family: 'GreyBold';
    font-weight: bold;
    color: currentColor;
  }
  &.active {
    background: $activeColor;
    color: #fff;
    transition: all $duration;
  }
}
</style>
