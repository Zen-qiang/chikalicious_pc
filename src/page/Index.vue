<template>
  <div class="c-index">
    <div class="header">
      <header-c></header-c>
    </div>
    <main class="body"></main>
    <div class="footer">
      <footer-c></footer-c>
    </div>
  </div>
</template>
<script>
import HeaderC from '../components/HeaderC.vue'
import FooterC from '../components/FooterC.vue'
export default {
  name: 'index',
  components: {
    HeaderC,
    FooterC
  }
}
</script>
<style lang="less" scoped>
.c-index {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  > div {
  }
  main {
    flex: 1;
  }
}
</style>
