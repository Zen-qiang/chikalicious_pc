<template>
  <div class="c-footer">
    <div>
      <ul>
        <li v-for="(link, index) of links" :key="index"><router-link  active-class="active" :to="{name: link.value}" v-text="link.label"></router-link></li>
      </ul>
      <img src="../assets/image/logoWhite.png">
    </div>
    <p v-html="address"></p>
  </div>
</template>
<script>
import mokeFooter from '../moke/mokeFooter.js'
export default {
  name: 'Footer',
  data () {
    return {
      links: mokeFooter.links,
      address: mokeFooter.address
    }
  },
  computed: {
    currentRouteName () {
      return this.$route.name
    }
  }
}
</script>
<style lang="scss" scoped>
.c-footer {
  padding: rem(36) rem(60) rem(58);
  color: #fff;
  font-family: 'GreyLight';
  background: $color linear-gradient(to right, currentColor, currentColor, currentColor) no-repeat center bottom;
  background-size: 100% 1px;
  background-origin: content-box;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    ul {
      line-height: 0;
      li {
        font-size: rem(16);
        display: inline-block;
        line-height: rem(48);
        vertical-align: middle;
        margin-right: rem(50);
        cursor: pointer;
        & a.active {
          color: $activeColor;
        }
      }
    }
    img {
      width: rem(162);
      height: rem(46);
    }
  }
  > p {
    font-size: 12px;
    margin: rem(100) 0 rem(40);
  }
}
</style>
