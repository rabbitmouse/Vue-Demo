<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad" />
      <detail-param-info ref="params" :param-info="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from 'network/detail'
  import {itemListListenerMixin} from 'common/mixin'
  import {debounce} from 'common/utils'

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      GoodsList,
      BackTop,
    },
    mixins: [itemListListenerMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0,
        isShowBackTop: false,
      }
    },
    created() {
      this.iid = this.$route.params.id

      getDetail(this.iid).then(res=>{
        const data = res.result

        this.topImages = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        this.commentInfo = data.rate.cRate !== 0 ? data.rate.list[0] : {}

      }).catch(e=>{
        console.log(e)
      })

      getRecommend().then(res=>{
        this.recommends = res.data.list
      })

      this.getThemeTopY = debounce(()=> {
        this.themeTopYs = []
        this.themeTopYs.push(0),
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)

        console.log(this.themeTopYs)
      }, 100)
    },
    mounted() {

    },
    methods: {
      detailImageLoad() {
        this.newRefresh()
        this.getThemeTopY()
      },
      titleClick(index) {
        console.log(index, this.themeTopYs[index])
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 250)
      },
      contentScroll(position) {
        const positionY = -position.y

        let length = this.themeTopYs.length
        for (let i = 0; i < length - 1; ++i) {
          i = parseInt(i)
          if (this.currentIndex !== i && i < length-1 && positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) {

            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
        // 判断是否显示可以向往滚动
        this.isShowBackTop = Math.abs(position.y) > 1000
      },

      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },

      addToCart() {
        const product = {}
        product.img = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid

        // 添加到vuex
        this.$store.dispatch('addCart', product).then(res=> {
          console.log(res)
        })
      }
    },

  }
</script>

<style scoped>
 #detail {
   position: relative;
   background-color: #fff;
   z-index: 9;
   height: 100vh;
 }
 .detail-nav {
   position: relative;
   z-index: 9;
   background-color: #fff;
 }
 .content {
    height: calc(100% - 44px - 49px);
 }
</style>