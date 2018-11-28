<template>
  <div class="c-news">
    <div>
      <item-news v-for="(news, index) of newsData" :key="index" :active="activeIndex === index" @mouseenter.native="activeIndex = index" @mouseleave.native="activeIndex = null" :datas="news"></item-news>
      <load-more :identifier="paramsType" @handeraction="getNews"></load-more>
    </div>
  </div>
</template>
<script>
import ItemNews from '../components/ItemNews'
import LoadMore from '../components/LoadMore'
export default {
  name: 'News',
  components: {
    ItemNews,
    LoadMore
  },
  props: {
    paramsType: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      newsData: [],
      page: 1,
      size: 10,
      activeIndex: null
    }
  },
  watch: {
    $route (to, from) {
      Object.assign(this.$data, this.$options.data())
    }
  },
  methods: {
    getNews (state) {
      this.$axios.get('/searchNews', {
        params: {
          page: this.page,
          size: this.size,
          type: this.paramsType
        }
      }).then(({data}) => {
        if (data.code === 666) {
          if (data.data.resultList.length) {
            this.page += 1
            this.newsData.push(...data.data.resultList)
            state.loaded()
          } else {
            state.complete()
          }
        } else {
          state.error()
        }
      }).catch(err => {
        console.log(err)
        state.error()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.c-news {
  max-width: 960px;
  margin: rem(50) auto;
}
</style>
