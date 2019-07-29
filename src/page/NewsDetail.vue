<template>
  <div class="c-newsDetail">
    <div class="content">
      <time>{{detail.formatReleaseTime}}</time>
      <h1>{{detail.title}}</h1>
      <div class="rchContent" v-html="detail.content"></div>
    </div>
    <div class="relativeNews">
      <div>
        <item-product btnText="MORE" :active="false" :datas="datasFormart" :moreRouteName="paramsType" @clickaction="jump"></item-product>
      </div>
    </div>
  </div>
</template>
<script>
import ItemProduct from '../components/ItemPorduct'
export default {
  name: 'NewsDetail',
  components: {
    ItemProduct
  },
  data () {
    return {
      detail: {
        formatReleaseTime: '',
        title: '',
        content: ''
      },
      datas: []
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    paramsType () {
      return this.$route.params.type
    },
    datasFormart () {
      let arr = []
      this.datas.forEach(element => {
        let obj = {
          srcHover: element.hoverUrl,
          title: element.title,
          sub: element.formatReleaseTime,
          id: element.id
        }
        arr.push(obj)
      })
      return arr
    }
  },
  watch: {
    $route (to, from) {
      Object.assign(this.$data, this.$options.data())
      this.getDetail()
      this.getNews()
    }
  },
  created () {
    this.getDetail()
    this.getNews()
  },
  methods: {
    getDetail () {
      this.$axios.get('/searchNewsById', {
        params: {
          newsId: this.id
        }
      }).then(({data}) => {
        if (data.code === 666) {
          let {formatReleaseTime, title, content} = data.data
          this.detail = {
            formatReleaseTime: formatReleaseTime,
            title: title,
            content: content
          }
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getNews () {
      this.$axios.get('/searchNews', {
        params: {
          page: 1,
          size: 3,
          type: 1
        }
      }).then(({data}) => {
        if (data.code === 666) {
          this.datas = data.data.resultList
        }
      }).catch(err => {
        console.log(err)
      })
    },
    jump (id) {
      this.$router.push({name: 'Detail', params: {type: this.paramsType, id: id}})
    }
  }
}
</script>
<style lang="scss" scoped>
.c-newsDetail {
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
  .relativeNews {
    padding: 0 rem(60);
    > div {
      max-width: 960px;
      margin: 0 auto;
      background: linear-gradient(to right, currentColor, currentColor, currentColor) no-repeat center top;
      background-size: 100% 1px;
    }
  }
  @media (max-width: 576px) {
    .content {
      padding: rem(60);
      .rchContent {
        padding: 0 rem(80);
        font-size: rem(18);
      }
    }
  }
}
</style>
