<template>
  <div class="c-itemNews" :class="{active: active}">
    <div>
      <!-- <img :src="datas.surfacePlot"> -->
      <img :src="datas.hoverUrl">
    </div>
    <div>
      <h2>{{datas.title}}</h2>
      <time>{{datas.formatReleaseTime}}</time>
      <p v-text="datas.description"></p>
      <btn-more :active="active" @click.native="toDeatil(datas.id)"></btn-more>
    </div>
  </div>
</template>
<script>
import BtnMore from './BtnMore'
export default {
  name: 'ItemNews',
  components: {
    BtnMore
  },
  props: {
    datas: {
      type: Object
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    routerName () {
      return this.$route.name
    }
  },
  methods: {
    toDeatil (id) {
      this.$router.push({name: 'Detail', params: {type: this.routerName, id: id}})
    }
  }
}
</script>
<style lang="scss" scoped>
.c-itemNews {
  display: flex;
  flex-flow: row nowrap;
  min-height: rem(285);
  margin-bottom: rem(50);
  &.active {
    > div {
      &:first-of-type {
        img {
          filter: grayscale(0);
          // display: none;
          // &:last-of-type {
          //   display: inline-block;
          // }
        }
      }
      &:last-of-type {
        color: $activeColor;
        background: linear-gradient(to right, currentColor, currentColor) no-repeat center bottom;
        background-size: 100% 1px;
      }
    }
  }
  > div {
    font-size: 0;
    &:first-of-type {
      width: rem(380);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        vertical-align: middle;
        filter: grayscale(100%);
        transition: $duration;
        // &:last-of-type {
        //   display: none;
        // }
      }
    }
    &:last-of-type {
      color: $color;
      flex: 1;
      padding: rem(24) 0;
      margin-left: rem(40);
      background: linear-gradient(to right, currentColor, currentColor) no-repeat center bottom;
      background-size: 100% 1px;
      h2 {
        font-family: 'PingFang-HK-Medium-2', PingFangHK-Medium;
        font-weight: normal;
        font-size: rem(28);
        color: $color;
      }
      time {
        font-family: 'GreyLight';
        font-size: rem(18);
        color: #c2c2c2;
      }
      p {
        font-family: 'PingFang-Jian-ChangGuiTi-2', PingFangSC-Regular;
        font-size: rem(18);
        color: $color;
        margin-top: rem(20);
        margin-bottom: rem(10);
        display: -webkit-box;
        -webkit-line-clamp: 4;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
  @media (max-width: 576px) {
    > div {
      &:last-of-type {
        p {
          -webkit-line-clamp: 3;
        }
      }
    }
  }
}
</style>
