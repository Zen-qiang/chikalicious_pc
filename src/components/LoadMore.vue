<template>
  <infinite-loading :identifier="identifier" @infinite="action">
    <div slot="spinner" class="spinner">
      <P>LOAD MORE</P>
      <P><span></span></P>
    </div>
    <div slot="no-more" class="nomore">NO MORE</div>
    <div slot="no-results" class="noresults">NO RESULTS</div>
  </infinite-loading>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
  name: 'LoadMore',
  components: {
    InfiniteLoading
  },
  props: {
    identifier: {
      type: Number
    }
  },
  methods: {
    action ($state) {
      this.$emit('handeraction', $state)
    }
  }
}
</script>
<style lang="scss" scoped>
.infinite-loading-container {
  margin-top: rem(80);
}
.spinner, .nomore, .noresults {
  font-size: rem(18);
  font-family: 'GreyLight';
}
.spinner {
  > p:first-of-type {
    margin-bottom: rem(10);
  }
  span {
    display: inline-block;
    background: #eee repeating-linear-gradient(-45deg, transparent, transparent 2px, #fff 2px, #fff 6px);
    width: rem(54);
    height: rem(30);
    clip-path: polygon(0 0, rem(54) 0, rem(27) rem(30));
  }
}
</style>
