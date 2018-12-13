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
@font-face {
  font-family: 'GreyBold';
  src: url('./assets/font/GreycliffCF-DemiBold.otf');
}
@font-face {
  font-family: 'GreyLight';
  src: url('./assets/font/GreycliffCF-Light.otf');
}
@font-face {
  font-family: 'GreyLight';
  src: url('./assets/font/GreycliffCF-Light.otf');
}
@font-face {
  font-family: 'PingFang-HK-Medium-2';
  src: url('./assets/font/PingFang-HK-Medium-2.otf');
}
@font-face {
  font-family: 'PingFang-Jian-ChangGuiTi-2';
  src: url('./assets/font/PingFang-Jian-ChangGuiTi-2.ttf');
}
#app {
  font-family: 'GreyBold', 'GreyLight', 'PingFang-HK-Medium-2', 'PingFang-Jian-ChangGuiTi-2',  PingFangSC-Regular, PingFangHK-Medium, 'Regular', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
