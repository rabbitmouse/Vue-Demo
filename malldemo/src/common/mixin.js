import {debounce} from './utils'

export const itemListListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null
    }
  },
  mounted() {
    // 图片加载监听
    this.newRefresh = debounce(this.$refs.scroll.refresh, 500)
    this.itemImgListener = () => {
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  },
}