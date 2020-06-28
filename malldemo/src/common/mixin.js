import {debounce} from './utils'

export const itemListListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    // 图片加载监听
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  },
}