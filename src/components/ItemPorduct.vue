<template>
  <section class="c-itemProduct">
    <h1>YOU MAY ALSO LOVE</h1>
    <ul>
      <li v-for="(item, index) of datas" :key="index"
        :class="{active: isTouchDevice}"
        @click="$emit('clickaction', item.id)">
        <div class="imgContent">
          <!-- <img :src="item.src"> -->
          <!-- <img class="hoverImg" :src="item.srcHover" v-if="item.srcHover"> -->
          <img class="hoverImg" :src="item.srcHover">
        </div>
        <div>
          <p>{{item.title}}</p>
          <p>{{item.sub}}</p>
        </div>
      </li>
    </ul>
    <div class="btnmore">
      <btn-more :btnText="btnText" :active="active || btnActive"
        @click.native="$router.push({name: moreRouteName})"
        @mouseenter.native="btnActive = true"
        @mouseleave.native="btnActive = false">
      </btn-more>
    </div>
  </section>
</template>
<script>
import BtnMore from '../components/BtnMore'
export default {
  name: 'ItemPorduct',
  components: {
    BtnMore
  },
  props: {
    btnText: {
      type: String,
      default: 'READ MORE'
    },
    active: {
      type: Boolean,
      default: false
    },
    datas: {
      type: Array
    },
    flagHover: {
      type: Boolean,
      default: false
    },
    moreRouteName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      btnActive: false
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
.c-itemProduct {
  color: $color;
  font-family: 'GreyLight';
  h1 {
    font-size: rem(28);
    font-weight: normal;
    padding: rem(20) 0;
  }
  ul {
    display: flex;
    flex-flow: row nowrap;
    margin-right: rem(-40);
    li {
      flex: 0 0 33.3333333%;
      padding-right: rem(40);
      font-size: 0;
      &:hover, &.active {
        .imgContent {
          img {
            filter: grayscale(0);
            // &.hoverImg {
            //   display: inline-block;
            // }
          }
        }
      }
      .imgContent {
        height: 0;
        padding-bottom: 100%;
        position: relative;
        img {
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto 0;
          width: 100%;
          vertical-align: middle;
          filter: grayscale(100%);
          transition: $duration;
          // &.hoverImg {
          //   display: none;
          // }
        }
      }
      p {
        font-size: rem(24);
        padding: rem(6) 0;
        &:last-of-type {
          font-size: rem(14);
          color: #c2c2c2;
        }
      }
    }
  }
  .btnmore {
    font-size: 0;
    text-align: center;
    margin: rem(60) 0 rem(100);
  }
}
</style>
