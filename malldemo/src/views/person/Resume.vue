<template>
  <main id="resume">
    <article>
      <header>
        <p class="title">个人简历</p>
      </header>
      <section class="section">
        <h3 class="h3">基本信息</h3>
        <div class='base-box'>
          <p class="base-text">朱志勤</p>
          <p class="base-text"> 男 | 29岁 | 本科 | 成都 | 在职-考虑机会</p>
          <p class="base-text">求职意向：iOS开发工程师 | 大前端开发工程师</p>
          <p class="base-text">工作经验：6年</p>
          <p class="base-text">毕业时间：2015年</p>
          <p class="base-text">英语等级：CET-4</p>
          <div class="inline" style="margin-top: 10px"><p class="base-text"> <img class="icon" src="./university.png"> 四川大学锦城学院</p></div>
          <div class="inline"><p class="base-text"> <img class="icon" src="./major.png"> 软件工程 </p></div>
          <div class="inline"><p class="base-text"> <img class="icon" src="./email.png">578259544@qq.com</p></div>
          <div class="inline"><p class="base-text"> <img class="icon" src="./phone.png"> 18582353519</p></div>
        </div>
      </section>
      <section>
        <div class="section">
          <h3 class="h3">自我评价</h3>
        </div>
        <div class="title-box">
          <p class="content-text">{{skills}}</p>
        </div>
      </section>
      <section>
        <div class="section">
          <h3 class="h3">专业技能</h3>
        </div>
        <div class="title-box">
          <p class="content-text">{{professional}}</p>
        </div>
      </section>
      <section>
        <div class="section">
          <h3 class="h3">工作经历</h3>
        </div>
        <div class="title-box" v-for="(item, index) in companys" :key="index">
          <div>
            <h2 class="h2 inline">{{item.name}}</h2>
            <span class="time-text">{{item.time}}</span>
          </div>
          <div class="title-box">
            <h3 class="h3">岗位职责</h3>
            <p class="content-text">{{item.job}}</p>
          </div>
          <div class="title-box">
            <h3 class="h3">工作内容</h3>
            <p class="content-text">{{item.content}}</p>
          </div>
          <div class="title-box">
            <h3 class="h3">主要业绩</h3>
            <p class="content-text">{{item.achievement}}</p>
          </div>
        </div>
      </section>
      <section>
        <div class="section">
          <h3 class="h3">项目经历</h3>
        </div>
        <div class="title-box bottom-line" v-for="(item, index) in products" :key="index">
          <div>
            <h2 class="h2 inline">{{item.name}}</h2>
            <span class="time-text">{{item.time}}</span>
            <p class="work">项目职责：{{item.work}}</p>
          </div>
          <div class="title-box">
            <h3 class="h3">项目描述</h3>
            <p class="content-text">{{item.desc}}</p>
          </div>
          <div class="title-box">
            <h3 class="h3">主要业绩</h3>
            <p class="content-text">{{item.duty}}</p>
          </div>
          <div class="title-box">
            <p class="content-text">{{item.content}}</p>
          </div>
          <div class="title-box">
            <div class="skill-box" v-for="skill in item.technique">
              {{skill}}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="section">
          <h3 class="h3">开源项目</h3>
        </div>
        <div class="title-box bottom-line" v-for="(item, index) in works" :key="index">
          <div>
            <h2 class="h2 inline">{{item.name}}</h2>
            <p class="work">项目描述：{{item.title}}</p>
          </div>
          <div class="title-box">
            <h3 class="h3">主要功能</h3>
            <p class="content-text">{{item.function}}</p>
          </div>
          <div class="title-box">
            <h3 class="h3">项目地址</h3>
            <p class="content-text url-text">{{item.url}}</p>
          </div>
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
        skills: '6年开发经验，深入了解iOS开发技术，掌握web相关开发技能，有大前端开发经验。\n熟练掌握iOS开发技术，可使用Objective-C、Swift开发iOS程序。\n 具备Hybrid开发经验，可使用JavaScript或React-Naive进行移动端的跨平台开发。\n 具有良好的沟通交流能力，有担任业务团队「PM」和敏捷团队「SM」。',
        professional: '深入理解Objective-C、Swift，熟悉C/C++\n熟练掌握JavaScript，Html，CSS，熟练使用ReactNative、Vue等前端开发框架\n深入理解iOS内存管理机制，block，runtime，runloop，多线程技术\n对iOS程序架构和性能优化有一定经验\n熟练使用git，svn进行代码管理\n掌握常用的数据结构与算法\n掌握HTTP，HTTPS，TCP，UDP等网络协议。\n熟练掌握iOS开发账号证书配置及应用上架流程',
        companys: [
          {
            name: '成都二十三魔方生物科技有限公司',
            time: '2019.8 - 至今',
            job: 'iOS高级开发、大前端开发、项目经理、敏捷教练',
            content: '负责App项目核心功能的开发、维护。通用组件的设计架构。\n负责web项目、后台项目的功能开发\n负责老技术的升级、维护。新技术的调研、推动落地\n负责敏捷团队的流程监督和项目需求的沟通协调，质量把控等',
            achievement: '主导ReactNative框架的升级\n推动业务模块的重构、迭代\n参与公司App、Web、后台相关项目的开发\n承担iOS原生功能的开发\n担任团队项目经理和敏捷教练，保证业务团队的良好运行和高质量的需求交付'
          },
          {
            name: '四川中清科华云联科技有限公司',
            time: '2018.6 - 2019.7',
            job: '高级iOS开发工程师',
            content: '项目的整体架构\n主要业务的开发\n复杂界面的绘制，通用组件的封装\napp性能调优',
            achievement: 'App性能优化\n业务模块的代码重构\n代码架构及核心业务逻辑开发\n完成复杂业务如：健康数据的复杂图表界面，AI智能助手模块的功能实现，IM界面框架的搭建和封装，搜索界面框架的搭建和封装'
          },
          {
            name: '成都炎龙科技有限公司',
            time: '2016.3 - 2018.3',
            job: 'iOS开发工程师',
            content: 'iOS App的基础架构及业务逻辑\n技术升级，新技术调研和实施，通用组件封装',
            achievement: '在职期间完成多个app的开发到上线的任务\n完成社交，娱乐，阅读，工具多种类型的产品需求\n阅读类app在app store的图书排行榜上最高排名前50\n实现社交类App的富文本编辑功能与html展示交互的技术方案'
          },
          {
            name: '成都华律网络服务有限公司（实习）',
            time: '2015.3 - 2016.3',
            job: 'iOS开发工程师',
            content: '根据产品需求开发iOS app的业务逻辑\n根据UI设计开发iOS app的界面',
            achievement: '独立完成律信，律信律师端app的架构开发\n根据产品需求完成IM，网络，消息推送等业务模块'
          },
        ],
        products: [{
          name: '23魔方',
          work: 'ReactNative开发，iOS开发',
          time: '2019.8 - 至今',
          desc: '23魔方是一款提供基因检测服务的医疗健康类项目。为用户提供遗传风险预测、祖源、健康等功能。',
          duty: '负责ReactNative项目的业务功能开发\n负责iOS原生基础模块的支持\n主导ReactNative框架升级\n负责第三方sdk的升级与私有库维护',
          technique: ['ReactNative', 'Swift', 'JavaScript'],
        },
        {
          name: '23魔方 - Web',
          work: '前端开发',
          time: '2019.8 - 至今',
          desc: '用于承载公司官网、web端业务、营销落地页的web项目',
          duty: '负责App中内嵌的web页面开发\n营销活动类的web页面开发',
          technique: ['Vue', 'Nuxt', 'JavaScript'],
        },
        {
          name: 'cms，uoms后台管理系统',
          work: '前端开发',
          time: '2019.8 - 至今',
          desc: 'cms、uoms是公司的后台项目，用于配置项目数据以实现C端项目的业务逻辑',
          duty: '负责活动、检测流程、营销等后台功能的开发',
          technique: ['Vue', 'Element-UI', 'JavaScript'],
        },
        {
          name: '中清协同助手',
          work: 'iOS开发，项目架构',
          time: '2018.10 - 2019.6',
          desc: '中清协同助手是企业内部管理App，提供合同管理，日程管理，渠道管理，商品展示等功能',
          duty: '项目整体架构搭建\n公共自定义UI控件封装\n其他业务逻辑开发',
          technique: ['iOS SDK', 'Objective-C', 'MVC'],
        },
        {
          name: '中清健康管家',
          work: 'iOS开发',
          time: '2018.7 - 2019.6',
          desc: '中清健康管家是一款医疗健康类项目，为用户提供基因检测，数据分析，健康文章，健康商城等功能',
          duty: '核心业务逻辑开发\nApp性能优化\n实现复杂界面和交互\n代码重构和公共组件封装',
          technique: ['iOS SDK', 'Objective-C', 'Charts', 'HTTPS'],
        },
        {
          name: '汝影（华西乳腺管家)',
          work: 'iOS开发',
          time: '2018.11 - 2019.6',
          desc: '该产品是为华西乳腺科提供的在线问诊APP，病人可以在APP上在线咨询医生，查看乳腺相关的疾病科普',
          duty: '完全自定义IM聊天界面框架\n对接百度语音合成与识别的SDK，封装工具类\n对接腾讯IM通讯协议',
          technique: ['Objective-C', '百度语音SDK', 'IM'],
        },
        {
          name: '老子搜书',
          work: 'iOS开发，项目架构，产品规划',
          time: '2016.9 - 2018.3',
          desc: '老子搜书是一款阅读器APP，使用定向的搜索引擎搜索全网的各类小说。用户可使用APP直接或离线阅读书籍。并且提供了另好的阅读体验，用户可以自定义阅读背景颜色，字体，段落等样式。应用还提供了多种翻页方式供用户选择。还实现了自动阅读，语音朗读这类方便的阅读方式。',
          duty: 'YYText+CoreText搭建富文本阅读界面\nAVFoundation实现语音朗读\nUIPageController，UITableView，自定义View实现的多种翻页动画\n实现自动阅读，手势亮度调整\nObjective-C和C++混编，集成搜索引擎\n整体项目架构\n产品需求设计，交互设计，APP在App Store图书类排行榜排名前50，次日留存60%-70%',
          technique: ['Objective-C','AVFoundation', 'NSOperationQueue', 'TCP', 'C++'],
        },
        {
          name: '一抓超人',
          work: 'iOS开发',
          time: '2017.11 - 2018.1',
          desc: '该项目是一款直播在线抓娃娃的娱乐APP，通过发送数据包的方式实现远程操作抓娃娃机，再通过直播的形式反馈给用户。',
          duty: '使用WebSocket发送数据协议包实现远程控制\n基于IJKMediaPlayer实现的视频直播\nMVC架构项目，实现瀑布流，自定义按钮等复杂UI',
          technique: ['Objective-C', 'UDP', 'WebSocket'],
        },
        {
          name: '妈妈咪呀',
          work: 'iOS开发，项目架构',
          time: '2016.11 - 2017.6',
          desc: '妈妈咪是一款母婴类社交app，主要模块包含新闻头条，母婴资讯，百科，论坛，问答。为用户搭建一块完整的母婴社区',
          duty: '核心业务功能开发\n自定义富文本编辑器\n复杂页面搭建',
          technique: ['iOS SDK', 'HTML', 'HTTP'],
        },
        {
          name: '202强力清扫',
          work: 'iOS开发',
          time: '2016.3 - 2016.5',
          desc: '202强力清扫是一款照片清理软件，帮助用户清理相似图片，压缩大体积图片的工具App',
          duty: '完成相册操作模块的封装\n实现基于NSOperationQueue的异步任务队列',
          technique: ['Objective-C', 'PhotoKit', 'NSOperationQueue'],
        },
        {
          name: '律信律师',
          work: 'iOS开发',
          time: '2015.3 - 2016.3',
          desc: '律信律师是一款针对公众的律师服务的app，用户可以通过平台获取全国各地的律师，向律师进行法律在线咨询，法务服务，案件委托等服务',
          duty: ' 项目架构搭建\n对接支付宝，微信等第三方SDK\n配置证书，推送消息，上线流程',
          technique: ['Objective-C', '支付SDK'],
        },
        {
          name: '律信',
          work: 'iOS开发',
          time: '2015.6 - 2016.3',
          desc: '律信是一款针对律师的律师服务的app，律师可以通过律信获取全国提交的法律问题。',
          duty: '聊天界面实现\n业务功能开发\n集成第三方SDK',
          technique: ['Objective-C', 'IM', 'MVC'],
        }],
        works: [
          {
            name: 'ZQSearchController',
            title: '搜索功能组件',
            function: '搜索主界面、模糊匹配界面，搜索结果界面之前的状态切换。\n可使用自定义结果界面进行搜索结果的展示。\n输入内容节流处理，输入完毕后 0.5 秒后再发生搜索事件。\n支持搜索历史，\n支持热门搜索配置',
            url: 'https://github.com/rabbitmouse/ZQSearchController'
          },
          {
            name: 'ZQChatKit',
            title: '聊天界面框架',
            function: 'UITableView搭建的聊天UI框架\n支持聊天气泡\n图片展示\n视频播放\n语音录制及播放\n失败异步重发\n自定义工具栏',
            url: 'https://github.com/rabbitmouse/ZQChatKit'
          },
          {
            name: 'ZQAsyncTaskQueue',
            title: '基于NSOperation的异步任务模块',
            function: '对多种异步任务场景的方法封装。\n支持异步下的单个任务、多个任务的异步回调和批量回调\n支持对单个任务的暂停、取消\n',
            url: 'https://github.com/rabbitmouse/ZQAsyncTaskQueue'
          }
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
  color: #000;
  padding: 0 20px;
}
.section {
  color: #000;
  margin-top: 20px;
}
.section .h3::before {
  content: '';
  border-left: 2px solid #049cfd;
  position: relative;
  left: -5px;
  top: 0;
  bottom: 0;
}
.bottom-line {
  border-bottom-color: #f1f1f3;
  border-bottom-width: 0.5px;
  border-bottom-style: solid;
}
.work {
  margin-top: 20px;
  font-size: 14px;
  color: #333;
}
.inline {
  display: inline-block;
  margin-right: 10px;
}
.h1 {
  font-weight: 700;
  color: #000;
  font-size: 18px;
}
.h2 {
  font-size: 18px;
}
.h3 {
  font-size: 16px;
}
.h3 + p {
  margin-top: 10px;
}
.content-text {
  color: #333;
  white-space: pre-line;
  line-height: 26px;
}
.url-text {
  color: #004bbb
}
.time-text {
  margin-left: 20px;
  color: #999;
  font-size: 14px;
}
.base-box {
  margin-top: 20px;
}
.title-box {
  margin-top: 20px;
}
.skill-box {
  padding: 4px 8px;
  background: rgba(64, 95, 104, 0.08);
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 20px;
  border-radius: 2px;
  color: #666;
}
.base-text {
  margin-top: 10px;
  line-height: 16px;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
}
.title {
  font-size: 22px;
  color: #444;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
}
.icon {
  width: 14px;
  margin-right: 5px;
}
</style>