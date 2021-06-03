<template>
  <a @click="router.push('/')"><img class="logo" src="/ITI.svg"></a>
  <div id="banner">
    <img class="background" src="/project/banner.svg">
    <div class="content col">
      <h1>项目展示</h1>
      <div class="space">&nbsp;</div>
      <a class="button" href="http://blog.yzzx.tech">技术博客</a>
    </div>
  </div>
  <!-- sizes of images are in the css file -->
  <div id="project" class="container">
    <div class="row">
      <div class="picture">
        <img class="laptop" src="/project/YZSA_laptop.png">
        <img class="tablet" src="/project/YZSA_tablet.png">
        <img class="mobile" src="/project/YZSA_mobile.png">
        <img class="frame" src="/project/frame.png">
      </div>
      <div class="col">
        <h1>学生事务系统</h1>
        <p>江苏省扬州中学<strong>学生事务系统（YZSA）</strong>，是一款任务化、模块化，支持分布式部署，高效简明的学生事务平台，用于学校学生选课、问卷和通知等事务。它解决了选课卡顿卡死、应用页面太多太杂的问题，凭借杰出的页面设计和丰富多样的管理工具，帮助学校老师和同学们快速完成日常事务，帮助学校完成信息化建设。</p>
      </div>
    </div>
    <div class="row reverse">
      <div class="col">
        <h1>AceWords</h1>
        <p><strong>AceWords</strong>是一款先进的背单词应用，支持多语言词库。优化的记忆算法使它能够显著提高记忆效率，节约记忆时间。特殊的单词测试方法更具有别样的乐趣。存档可以在云端存储，单词学习进度可以在多个设备之间同步。一起来学习吧！</p>
      </div>
      <div class="picture">
        <img class="laptop" src="/project/AceWords_laptop.png">
        <img class="tablet" src="/project/AceWords_tablet.png">
        <img class="mobile" src="/project/AceWords_mobile.png">
        <img class="frame" src="/project/frame.png">
      </div>
    </div>
    <div class="row">
      <div class="picture">
        <img class="laptop" src="/project/yzwall_laptop.png">
        <img class="tablet" src="/project/yzwall_tablet.png">
        <img class="mobile" src="/project/yzwall_mobile.png">
        <img class="frame" src="/project/frame.png">
      </div>
      <div class="col">
        <h1>扬中匿名墙</h1>
        <p><strong>扬中匿名墙</strong>是<strong>ITI</strong>团队的一个实验性项目。团队成员的学习使用多样的web程序建设方案，与扬中表白墙合作建设的一个匿名发布墙。发布内容通过墙君的审核即可被所有人看到。目前已经支持多文本样式的内容和图片上传，同时还支持了回复功能。用户无需登录即可发布、查看和回复匿名墙上的留言。</p>
      </div>
    </div>
    <div class="row reverse">
      <div class="col">
        <h1>ITIOJ</h1>
        <p><strong>ITIOJ</strong>是江苏省扬州中学信息竞赛团队的专用在线测评系统，部署并配置了先进的开源OJ<strong>SYZOJ</strong>（LOJ的测评系统），支持大量编程语言，具有精简优美的UI界面和卓越的测评性能，帮助越来越多的萌新在扬中成长为神犇！</p>
      </div>
      <img class="picture" src="/project/ITIOJ.png">
    </div>
    <div class="row">
      <img class="picture" src="/project/yzVideo.png">
      <div class="col">
        <h1>校内直播</h1>
        <p>使用了P2P技术的校内直播系统，支持局域网内大型活动的流畅高清直播，同时支持了多频道同时直播。配备有先进的网络实时监控，在高效的信息传递中尽可能保证了稳定。优秀的视频播放界面和简单快捷的部署过程，更使得它无比精简而灵活。</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter(), route = useRoute()
</script>
<style scoped>
#banner {
  position: relative;
  color: white;
  width: 100%;
  height: 100vh;
}

#banner img.background {
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -2;
  object-fit: contain;
  object-position: center;
}

#banner div.content {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
}

#banner h1 {
  margin: 10px;
  font-size: 8rem;
}

#banner a {
  position: absolute;
  bottom: 60px;
  margin: 0 auto;
  background-color: rgb(50, 54, 57);
}

#banner div.space {
  height: 50vh;
}

@media (max-width: 600px) {
  #banner h1 {
    font-size: 5rem;
  }
}

@media (min-width: 600px) {
  div.space {
    display: none;
  }
}

#project {
  color: white;
  overflow: hidden;
}

.picture {
  position: relative;
  width: 400px;
}

div.picture img.frame {
  position: relative;
  width: 100%;
  z-index: 10;
}

/* 1:0.63743 */
div.picture img.laptop {
  position: absolute;
  z-index: 1;
  top: 4.29%;
  left: 19.51%;
  width: 73.544%;
  height: 52.231%;
  object-fit: cover;
}

/* 1:1.3567 */
div.picture img.tablet {
  position: absolute;
  z-index: 2;
  top: 46.5%;
  left: 6.58%;
  width: 27.132%;
  height: 41.013%;
  object-fit: cover;
}

/* 1:1.5321 */
div.picture img.mobile {
  position: absolute;
  z-index: 3;
  top: 74.1%;
  left: 33.07%;
  width: 11.613%;
  height: 19.823%;
  object-fit: cover;
}

#project div.row {
  padding: 20px 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.5s ease;
}

#project div.row:hover {
  padding: 40px 0;
  color: #3f3d56;
  background-color: transparent;
  transform: scale(1.1, 1.1);
}

#project div.col {
  margin: 0 50px;
  max-width: 600px;
  text-align: center;
}

@media (max-width: 600px) {
  #project div.row {
    flex-direction: column;
  }

  #project div.reverse {
    flex-direction: column-reverse;
  }

  .picture {
    width: 80%;
  }
}
</style>