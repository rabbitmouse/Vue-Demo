<template>
  <main id="resume">
    <article>
      <section>
        <div class="section">基本信息</div>
        <div class="base-info">
          <h1>猪猪猪</h1>
          <div class='personal'>
            <p>电话：18294944223</p>
            <p>邮箱：58232212@qq.com</p>
            <p>成都</p>
            <p>在职</p>
          </div>
        </div>
      </section>
      <section>
        <div class="section">专业技能</div>
        <div class="base-box" v-for="(item, index) in skills" :key="index">
          <span>{{index + 1}}. {{item}}</span>
        </div>
      </section>
      <section>
        <div class="section">工作经历</div>
        <div class="base-box" v-for="(item, index) in companys" :key="index">
          <div>
            <span class="h2">{{item.name}}</span>
            <span class="time-text">{{item.time}}</span>
          </div>
          <div class="base-box">
            <p class="h3">工作内容</p>
            <p class="content-text">侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在</p>
          </div>
          <div class="base-box">
            <p class="h3">主要业绩</p>
            <p class="content-text">侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在侄子我吱吱吱吱在</p>
          </div>
        </div>
      </section>
      <section>
        <div class="section">项目经历</div>
        <div class="base-box" v-for="(item, index) in skills" :key="index">
          <span>{{index + 1}}. {{item}}</span>
        </div>

      </section>
      <section>
        <div class="section">开源项目</div>
        <div class="base-box" v-for="(item, index) in skills" :key="index">
          <span>{{index + 1}}. {{item}}</span>
        </div>
      </section>
    </article>
  </main>
</template>

<script>


  export default {
    name: "Detail",
    components: {

    },
    data() {
      return {
        skills: ['111111', '222222,', '3333333'],
        companys: [
          {
            name: '成都二十三魔方生物科技有限公司',
            time: '2019.8 - 至今',
            content: '',
            achievement: ''
          },
          {
            name: '四川中清科华云联科技有限公司',
            time: '2018.6 - 2019.7',
            content: '',
            achievement: ''
          },
          {
            name: '四川品胜电子有限公司',
            time: '2018.3 - 2018.6',
            content: '',
            achievement: ''
          },
          {
            name: '成都炎龙科技有限公司',
            time: '2016.3 - 2018.3',
            content: '',
            achievement: ''
          },
          {
            name: '成都华律网络服务有限公司',
            time: '2015.3 - 2016.3',
            content: '',
            achievement: ''
          },
        ]
      }
    },

    mounted() {

    },
    methods: {
    },

  }
</script>

<style scoped>
#resume {
  background: #fff;
  width: 650px;
  font-size: 14px;
}
.section {
  background: #00bbff;
  color: #fff;
  margin-top: 20px;
  height: 30px;
}
.h1 {
  font-weight: 700;
  color: #000;
  font-size: 18px;
}
.h2 {
  color: #333;
  font-size: 16px;
  font-weight: 700;
}
.h3 {
  color: #444;
  font-size: 14px;
  font-weight: 500;
}
.h3 + p {
  margin-top: 10px;
}
.content-text {
  color: #444;
  line-height: 18px;
}
.time-text {
  margin-left: 20px;
  color: #bbb;
  font-size: 12px;
}
.base-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.base-box {
  margin-top: 20px;
}
</style>