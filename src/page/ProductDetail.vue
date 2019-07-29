<template>
  <div class="c-productDetail">
    <div class="detail">
      <div class="imgSwiper">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="(item, index) of detail.imageList" :key="index"><img class="detailimg" :src="item"></swiper-slide>
          <div class="swiper-pagination swiper-pagination-white"  slot="pagination"></div>
        </swiper>
      </div>
      <div class="productInfo">
        <div>
          <h1>{{detail.description}}</h1>
          <h4>{{detail.name}}</h4>
          <p class="price"><span><small>￥</small>{{detail.preferentialPrice}}</span><span><small>￥</small>{{detail.originalPrice}}</span></p>
        </div>
        <div>
          <p class="dsc">
            <span>规格：</span><span v-for="(specificationIds, index) of detail.specificationIds" :key="index">{{specificationIds}}<small v-if="index !== detail.specificationIds.length-1">、</small></span>
          </p>
          <p class="dsc">
            <span>销售区域：</span><span v-for="(regionIds, index) of detail.regionIds" :key="index">{{regionIds}}<small v-if="index !== detail.regionIds.length-1">、</small></span>
          </p>
        </div>
      </div>
    </div>
    <div class="content">
      <h1>商品详情</h1>
      <div class="rchContent" v-html="detail.content"></div>
    </div>
    <div class="relativeProduct">
      <div>
        <item-product btnText="MORE" :active="false" :datas="datasFormart" moreRouteName="Home" @clickaction="jump"></item-product>
      </div>
    </div>
  </div>
</template>
<script>
import ItemProduct from '../components/ItemPorduct'
export default {
  name: 'ProductDetail',
  components: {
    ItemProduct
  },
  data () {
    return {
      detail: '',
      productList: [],
      swiperOption: {
        loop: true,
        grabCursor: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false
        // },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    datasFormart () {
      let arr = []
      this.productList.forEach(element => {
        let obj = {
          src: element.imageUrl,
          srcHover: element.hoverUrl,
          title: element.description,
          sub: element.specificationIds,
          id: element.id
        }
        arr.push(obj)
      })
      return arr
    },
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  watch: {
    $route (to, from) {
      Object.assign(this.$data, this.$options.data())
      this.getProductDetail()
      this.getProductList()
    }
  },
  created () {
    this.getProductDetail()
    this.getProductList()
  },
  mounted () {
    // console.log('this is current swiper instance object', this.swiper)
  },
  methods: {
    getProductDetail () {
      this.$axios.get('/searchWebsiteProductById', {
        params: {
          websiteProductId: this.id
        }
      }).then(({data}) => {
        if (data.code === 666) {
          this.detail = data.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getProductList () {
      this.$axios.get('/searchAllWebsiteProduct').then(({data}) => {
        if (data.code === 666) {
          this.productList = data.data.slice(0, 3)
        }
      })
    },
    jump (id) {
      this.$router.push({path: `/Home/product/${id}`})
    }
  }
}
</script>
<style lang="scss" scoped>
.c-productDetail {
  .detail {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    padding: rem(80) 0;
    // background: linear-gradient(to right, currentColor, currentColor, currentColor) no-repeat center bottom;
    // background-size: 100% 1px;
    color: $color;
    border-bottom: 1px solid currentColor;
    .imgSwiper {
      width: rem(500);
      height: rem(500);
      border: 1px solid #ddd;
      overflow: hidden;
      .swiper-container {
        width: 100%;
        height: 100%;
      }
    }
    .productInfo {
      flex: 1;
      height: rem(500);
      overflow: hidden;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      padding: rem(60) rem(80) rem(60) rem(100);
      h1 {
        font-size: rem(40);
        font-weight: normal;
        font-family: 'GreyBold';
        line-height: rem(46);
      }
      h4 {
        font-size: rem(18);
        font-weight: normal;
        font-family: 'GreyLight';
      }
      p {
        font-size: initial;
      }
      span {
        display: inline-block;
      }
      .price {
        font-size: 0;
        font-family: 'GreyBold';
        color: #c2c2c2;
        padding-top: rem(20);
        small {
          font-size: rem(16);
        }
        span {
          font-size: rem(22);
          position: relative;
          margin-right: rem(16);
          line-height: rem(30);
          &:first-of-type {
            font-size: rem(30);
            color: $color;
            &::after {
              content: '';
              background: none;
            }
          }
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, currentColor, currentColor) no-repeat center;
            background-size: 100% 1px;
          }
        }
      }
      .dsc {
        font-size: rem(16);
        font-family: 'GrayLight';
      }
    }
    .detailimg {
      height: 100%;
      object-fit: contain;
    }
  }
  .content {
    max-width: 960px;
    margin: 0 auto;
    font-size: initial;
    padding: rem(40) 0 rem(100);
    color: $color;
    font-family: 'GreyLight';
    time {
      font-size: rem(18);
      color: #c2c2c2;
    }
    h1 {
      font-size: rem(28);
      font-weight: normal;
      text-align: center;
      padding: rem(10) 0;
    }
    .rchContent {
      max-width: 700px;
      margin: 0 auto;
    }
  }
  .relativeProduct {
    padding: 0 rem(60);
    > div {
      max-width: 960px;
      margin: 0 auto;
      background: linear-gradient(to right, currentColor, currentColor, currentColor) no-repeat center top;
      background-size: 100% 1px;
    }
  }
  @media (max-width: 576px) {
    .detail {
      padding: rem(80) rem(30);
      .productInfo {
        padding: rem(40) rem(40) rem(40) rem(60);
      }
    }
    .content {
      .rchContent {
        padding: 0 rem(120);
        font-size: rem(18);
      }
    }
  }
}
</style>
