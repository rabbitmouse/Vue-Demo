<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :param-info="paramInfo" />
      <detail-comment-info :comment-info="commentInfo" />
      <goods-list :goods="recommends"/>
    </scroll>
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

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'

  import {getDetail, getRecommend, Goods, Shop, GoodsParam} from 'network/detail'
  import {itemListListenerMixin} from 'common/mixin'

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
      Scroll,
      GoodsList,
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
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()
      }
    },
    mounted() {
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
    height: calc(100% - 44px);
 }
</style>