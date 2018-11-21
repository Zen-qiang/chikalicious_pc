<template>
  <div class="c-header">
    <h1>CHIKALICIOUS</h1>
    <div>
      <ul>
        <li v-for="nav of navlist" :key="nav.value" v-text="nav.label" :class="{activeText: false}"></li>
      </ul>
    </div>
  </div>
</template>
<script>
import mokeHeader from '../moke/mokeHeader.js'
export default {
  data () {
    return {
      title: mokeHeader.name,
      navlist: mokeHeader.navlist
    }
  }
}
</script>
<style lang="less" scoped>
.c-header {
  text-align: center;
  color: #090909;
  h1 {
    font-size: 28px;
    letter-spacing: 4px;
    margin-top: 45px;
    margin-bottom: 15px;
    display: inline-block;
    &::before, &::after {
      content: '';
      display: inline-block;
      vertical-align: baseline;
      width: 4px;
      height: 4px;
      background: currentColor;
      border-radius: 100%;
      overflow: hidden;
    }
  }
  ul {
    display: flex;
    justify-content: center;
    max-width: 1024px;
    margin: 0 auto;
    background: linear-gradient(to right, transparent, currentColor, transparent) no-repeat center bottom;
    background-size: 100% 1px;
    li {
      font-size: 18px;
      padding: 20px 28px;
      cursor: pointer;
    }
  }
}
</style>
