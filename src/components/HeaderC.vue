<template>
  <div class="c-header">
    <div class="logo"><img src="../assets/image/logo.png"></div>
    <div class="navs">
      <ul>
        <li v-for="nav of navlist" :key="nav.value"><router-link v-text="nav.label" active-class="active" :to="{name: nav.value}"></router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
import mokeHeader from '../moke/mokeHeader.js'
export default {
  name: 'Header',
  data () {
    return {
      title: mokeHeader.name,
      navlist: mokeHeader.navlist
    }
  }
}
</script>
<style lang="scss" scoped>
.c-header {
  text-align: center;
  color: $color;
  .logo {
    line-height: 0;
    padding-top: rem(30);
    padding-bottom: rem(20);
    img {
      width: rem(292);
      height: rem(82);
    }
  }
  .navs {
    padding: 0 rem(60);
    background: linear-gradient(to right, currentColor, currentColor, currentColor) no-repeat center bottom;
    background-size: 100% 1px;
    background-origin: content-box;
  }
  ul {
    display: flex;
    justify-content: center;
    li {
      font-size: rem(20);
      line-height: rem(48);
      padding: 0 rem(35);
      cursor: pointer;
      font-family: 'GreyBold';
      transition: color $duration;
      &:hover, & a.active {
        color: $activeColor;
      }
    }
  }
}
</style>
