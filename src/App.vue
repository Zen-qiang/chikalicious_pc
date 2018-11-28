<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#font-face {
  font-family: 'GreyBold';
  src: url('./assets/font/GreycliffCF-DemiBold.otf');
}
@font-face {
  font-family: 'GreyLight';
  src: url('./assets/font/GreycliffCF-Light.otf');
}
#app {
  font-family:  'GreyBold', 'GreyLight', 'Regular', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
