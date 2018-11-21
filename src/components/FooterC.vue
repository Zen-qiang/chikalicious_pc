<template>
  <div class="c-footer">
    <img src="../assets/image/footer-bg.png" alt="">
    <div>
      <div>
        <ul>
          <li v-for="(link, index) of links" :key="index">
            <span v-for="linkItem of link" :key="linkItem.label" v-text="linkItem.label"></span>
          </li>
        </ul>
        <p>{{slogan}}</p>
      </div>
      <p>{{address}}</p>
    </div>
  </div>
</template>
<script>
import mokeFooter from '../moke/mokeFooter.js'
export default {
  data () {
    return {
      slogan: mokeFooter.name,
      links: mokeFooter.links,
      address: mokeFooter.address
    }
  }
}
</script>

<style lang="less" scoped>
.c-footer {
  position: relative;
  height: 260px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, .9);
    z-index: 0;
  }
  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
    z-index: -1;
  }
  > div {
    height: 100%;
    max-width: 1024px;
    margin: 0 auto;
    position: relative;
    color: #fff;
    padding: 30px 0;
    background: linear-gradient(to top, transparent 29px,#fff, #fff) no-repeat center bottom;
    background-size: 100% 30px;
    > div {
      display: flex;
      justify-content: space-between;
      ul {
        li {
          font-size: 14px;
          display: flex;
          margin-right: -20px;
          line-height: 24px;
          &:first-of-type {
            span {
              flex: 1;
            }
          }
          span {
            padding-right: 20px;
            cursor: pointer;
          }
        }
      }
      p {
        font-size: 16px;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          margin: -6px auto 0;
          width: 3px;
          height: 3px;
          background: #fff;
          border-radius: 50%;
          vertical-align: top;
        }
      }
    }
    > p {
      font-size: 12px;
      position: absolute;
      bottom: 55px;
      left: 0;
    }
  }
}
</style>
