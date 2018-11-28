<template>
  <div class="c-home">
    <div class="showCase">
      <ul>
        <li v-for="(caseItem, index) of showCase" :key="index">
          <p
            v-for="(item, itemIndex) of caseItem" :key="itemIndex + '-' + index"
            :class="{active: showCaseHover === itemIndex + '-' + index}"
            @mouseenter="showCaseHover = itemIndex + '-' + index"
            @mouseleave="showCaseHover = ''">
            <img :src="item.bannerUrl">
            <img :src="item.hoverUrl">
            <span>{{item.bannerDescription}}</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="productList">
      <ul>
        <li
          v-for="(item, index) of productList" :key="index"
          :class="{active: productListHover === index}"
          @mouseenter="productListHover = index"
          @mouseleave="productListHover = ''"
          @click="toDetail(item.id)">
          <div>
            <img :src="item.imageUrl">
            <img :src="item.hoverUrl">
          </div>
          <p>
            <span>{{item.description}}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      showCase: [],
      productList: [],
      showCaseHover: '',
      productListHover: ''
    }
  },
  created () {
    this.getBanner()
    this.getProductList()
  },
  methods: {
    getBanner () {
      this.$axios.get('/searchAllWebsiteBanner').then(({data}) => {
        if (data.code === 666) {
          this.showCase = data.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getProductList () {
      this.$axios.get('/searchAllWebsiteProduct').then(({data}) => {
        if (data.code === 666) {
          this.productList = data.data
        }
      })
    },
    toDetail (id) {
      this.$router.push({path: `/Home/product/${id}`})
    }
  }
}
</script>
<style lang="scss" scoped>
.c-home {
  color: $color;
  > div {
    max-width: 1440px;
    padding-left: rem(60);
    padding-right: rem(60);
    margin: 0 auto;
  }
  .showCase {
    padding-top: rem(50);
    padding-bottom: rem(50);
    ul {
      display: flex;
      margin-right: rem(-30);
      align-items: stretch;
      li {
        flex: 1;
        margin-right: rem(30);
        margin-bottom: rem(-30);
        display: flex;
        flex-flow: column nowrap;
        // align-content: stretch;
        p {
          position: relative;
          margin-bottom: rem(30);
          flex: 1;
          cursor: pointer;
          img {
            vertical-align: middle;
            object-fit: cover;
            width: 100%;
            height: 100%;
            &:last-of-type {
              display: none;
            }
          }
          span {
            position: absolute;
            bottom: 0;
            font-family: 'GreyBold';
            font-size: rem(32);
            width: 100%;
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            background: #eee repeating-linear-gradient(-45deg, transparent, transparent 2px, #fff 2px, #fff 6px);
          }
          &.active {
            img {
              display: none;
              &:last-of-type {
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }
  .productList {
    ul {
      display: flex;
      flex-flow: row wrap;
      li {
        flex: 0 0 25%;
        padding: 0 rem(50);
        margin-bottom: rem(60);
        cursor: pointer;
        div {
          line-height: 0;
          text-align: center;
          height: 0;
          padding-bottom: 100%;
          position: relative;
          img {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            vertical-align: middle;
            width: 100%;
            margin: auto;
            &:last-of-type {
              display: none;
            }
          }
        }
        p {
          font-family: 'GreyLight';
          font-size: rem(20);
          text-align: center;
          line-height: rem(30);
        }
        &.active {
          img {
            display: none;
            &:last-of-type {
              display: inline-block;
            }
          }
          p {
            color: $activeColor;
            transition: color $duration;
          }
        }
      }
    }
  }
}
</style>
