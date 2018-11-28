<template>
  <div class="c-index">
    <header>
      <header-c></header-c>
    </header>
    <main><router-view></router-view></main>
    <footer>
      <footer-c></footer-c>
    </footer>
    <back-to-top bottom="80px" right="60px"><span class="backtotop"></span></back-to-top>
  </div>
</template>
<script>
import HeaderC from '../components/HeaderC.vue'
import FooterC from '../components/FooterC.vue'
import BackToTop from 'vue-backtotop'
export default {
  name: 'index',
  components: {
    HeaderC,
    FooterC,
    BackToTop
  }
}
</script>
<style lang="scss" scoped>
.c-index {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main {
    flex: 1;
  }
  .backtotop {
    display: block;
    width: rem(50);
    height: rem(50);
    border: 1px solid #ddd;
    background: #0d0d0d;
    position: relative;
    &::before, &::after {
      content: '';
      position: absolute;
      height: 50%;
      width: 1px;
      background: #fff;
      left: 0;
      right: 0;
      top: rem(15);
      margin: 0 auto;
      transform-origin: 50% 0;
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
}
</style>
