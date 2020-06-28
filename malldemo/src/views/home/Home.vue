<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" />
        <recommend-view :recommends="recommends" />
        <feature-view/>
        <tab-control ref="tabControl"
                    :titles="['流行','新款','精选']"
                    @tabClick="tabClick"/>
        <goods-list :goods="showGoods" />
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import { getMultiData, getProductData } from 'network/home'
  import {itemListListenerMixin} from 'common/mixin'

  export default {
    name: 'home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    mixins: [itemListListenerMixin],
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isShowBackTop: false,
        tabOffsetTop: 0,
        saveY: 0,
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getSrollY()
    },
    created() {
      this.getHomeMultidata()

      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      // 获取组件的属性
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    },
    methods: {
      // 事件
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.scroll.refresh()
      },

      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },

      contentScroll(positon) {
        this.isShowBackTop = Math.abs(positon.y) > 1000
      },

      loadMore() {
        this.getHomeGoods(this.currentType)
      },

      // 网络
      getHomeMultidata() {
          getMultiData().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const good = this.goods[type]
        const page = good.page + 1
        getProductData(type, page).then(res=> {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.finishPullUp()
      }).catch(e=>{
        console.log(e)
      })
      }
    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .content {
    height: calc(100% - 49px - 44px);
    overflow: hidden;
    margin-top: 44px;
  }
</style>