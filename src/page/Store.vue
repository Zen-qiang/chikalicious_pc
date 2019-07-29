<template>
  <div class="c-store">
    <div class="logoPic">
      <img :src="logoSrc">
    </div>
    <div class="content">
      <ul>
        <li v-for="(item, index) of list" :key="index" class="row">
          <div class="col-12 col-sm-6"><img :src="item.cover"></div>
          <div class="col-12 col-sm-6 info">
            <section>
              <p><span>{{item.label}}</span></p>
              <p><span>{{item.name}}</span></p>
              <p><span>地址：</span><span>{{item.address}}</span></p>
              <p><span>电话：</span><span>{{item.contactNumber}}</span></p>
              <p><span>营业时间：</span><span>{{item.businessHours}}</span></p>
            </section>
          </div>
        </li>
        <load-more @handeraction="getStores"></load-more>
      </ul>
    </div>
  </div>
</template>
<script>
import LoadMore from '../components/LoadMore'
export default {
  name: 'Store',
  components: {
    LoadMore
  },
  data () {
    return {
      logoSrc: '',
      list: [],
      page: 1,
      size: 10
    }
  },
  created () {
    // this.getStores()
  },
  methods: {
    getStores (state) {
      this.$axios.get('/searchShops', {
        params: {
          page: this.page,
          size: this.size
        }
      }).then(({data}) => {
        if (data.code === 666) {
          if (data.data.resultList.length) {
            this.page += 1
            if (!this.logoSrc) this.logoSrc = data.data.websiteShopPicture
            this.list.push(...data.data.resultList)
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
.c-store {
  max-width: 960px;
  margin: rem(50) auto;
  .logoPic {
    @media (max-width: 576px) {
      margin: 0 20px;
    }
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  .content {
    margin: rem(100) 0;
    img {
      vertical-align: middle;
    }
    p {
      font-family: 'GreyLight';
      font-size: rem(18);
      line-height: rem(26);
      margin: rem(8) 0;
    }
    li {
      // display: flex;
      // flex-flow: row nowrap;
      > div {
        // flex: 1;
        img {
          width: 100%;
        }
      }
      .info {
        text-align: center;
        line-height: 0;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        section {
          padding-left: rem(50);
          text-align: left;
          vertical-align: middle;
          position: relative;
        }
      }
      &:nth-child(even) {
        flex-direction: row-reverse;
        section {
          padding-right: rem(50);
          padding-left: 0;
          text-align: right;
        }
      }
    }
    @media (max-width: 576px) {
      ul {
        padding: 0 40px;
        li {
          margin-bottom: 30px;
          .info section {
            text-align: center;
            p {
              // font-size: 12px;
              line-height: rem(32);
            }
          }
        }
      }
    }
  }
}
</style>
