<template>
  <div class="c-about">
    <div class="cover">
      <p v-for="cItem of cover" :key="cItem.id"><img :src="cItem.pictureUrl"></p>
    </div>
    <div class="content">
      <div v-for="cItem of content" :key="cItem.id">
        <div v-html="cItem.contentHtmlValue"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cover: [],
      content: []
    }
  },
  created () {
    this.getAbout()
  },
  methods: {
    getAbout () {
      this.$axios.post('/searchAboutUs').then(({data}) => {
        if (data.code === 666) {
          let {cover, content} = data.data
          this.cover = cover
          this.content = content
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.c-about {
  max-width: 960px;
  margin: rem(50) auto;
  font-size: rem(16);
  @media (max-width: 576px) {
    padding: 0 20px;
  }
  .cover {
    p {
      text-align: center;
    }
    img {
      vertical-align: middle;
    }
  }
  .content {
    user-select: none;
  }
}
</style>
