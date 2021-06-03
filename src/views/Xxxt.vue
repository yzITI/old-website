<template>
  <div id="app">
    <a @click="router.push('/')"><img class="logo" src="/ITI.svg"></a>
    <!-- banner -->
    <div id="banner">
      <img class="background" src="/xxxt/banner.svg">
      <div class="content col">
        <h1>信息<br class="wrap">学堂</h1>
        <a class="button" href="https://www.bilibili.com/video/av59024668">观看视频</a>
      </div>
    </div>
    <div id="intro" class="col">
      <h2>信息即价值&nbsp;效率即真理</h2>
      <p>在信息大爆炸的今天，让<strong>智力借助算力</strong>，已经成为每个人都要面对的问题。上至紧跟时代潮流，下至战胜大学程设，往日的前沿已经成为今日<strong>必备的技能</strong>。</p>
      <p>在扬中，特色课程<strong>信息学堂</strong>，带你零基础入门，轻松应对大学程序设计！在这里，有学校的官方指导，有各方教育人士的好评，有学长学姐的强烈推荐，有竞赛省队和开发大佬亲自坐镇，还有往届无数的组织经验。我们通过最贴近学生的方式，带你们走入程序设计的大门！</p>
      <h4 style="text-align: center;">学生自主课程信息学堂<br>期待您的到来！</h4>
      <img src="/util/expand_more.svg">
    </div>
    <div id="feature" class="col">
      <h2>特色展示</h2>
      <div class="row">
        <img src="/xxxt/poster.png">
        <div class="content col">
          <h3>海报</h3>
          <p>信息学堂海报由团队内专业人士设计，突出课程特色而不失优雅。在与扬州中学的合作下，海报张贴在校园内并在信息课上向同学们进行宣传。此外，信息学堂还印制了数千份传单，供感兴趣的同学传阅。同时，在校外我们进行网络宣传，欢迎各年龄段对信息技术感兴趣的初学者报名参加！</p>
        </div>
      </div>
      <div class="row reverse">
        <div class="content col">
          <h3>讲义</h3>
          <p>信息学堂的教学团队使用<strong>L<sup>A</sup>T<sub>E</sub>X</strong>系统精心编排了彩色讲义，清晰地呈现了代码与注释，数学公式与符号。完美还原了课堂演示内容。讲义内容全面细致，帮助同学们更好的复习和巩固，同时也可以成为自学的极佳材料。</p>
        </div>
        <img src="/xxxt/handout.jpg">
      </div>
      <div class="row">
        <img src="/xxxt/checkin.png">
        <div class="content col">
          <h3>签到</h3>
          <p>信息学堂配备了先进的二维码签到系统，工作人员扫描学员证上的二维码，<strong>ITI</strong>自行开发的统一身份认证系统便会验证学员信息，并自动完成该学员的当日签到。</p>
        </div>
      </div>
      <div class="row reverse">
        <div class="content col">
          <h3>课堂</h3>
          <p>信息学堂的授课主要安排在扬州中学机房中进行。学员们可以直接使用高配的电脑和最新的软件，讲师会使用希沃触控白板进行板书和演示。课堂内容丰富，形式多样。除主讲外，上课时会有6-10名团队成员担任助教在行间走动，为需要的同学进行辅导。</p>
        </div>
        <img src="/xxxt/class.png">
      </div>
      <div class="row">
        <img src="/xxxt/tutor.png">
        <div class="content col">
          <h3>讲师</h3>
          <p>竞赛省队选手和开发大佬亲自坐镇教学团队，他们有着过硬的专业知识、丰富的经验、对计算机领域敏锐的嗅觉以及更强的好奇心与创造力。同为学生，他们的讲解更贴近学生的生活，能激起学员们的兴趣与共鸣；身为前辈，他们懂得难点与易错点，可以更好的引领初学者入门；作为老师，他们也知道如何保持学员的注意力、带领学员思考，言传身教。</p>
        </div>
      </div>
      <div class="row reverse">
        <div class="content col">
          <h3>实践</h3>
          <p>除了基础知识和技能的传授，信息学堂也很注重上机实践。团队中的命题组为每天的课程定制了高质量的测验与作业，同时助教在线下和线上解答学员的各种问题，帮助学员巩固知识，拓展技能，培养独立解决问题的能力。</p>
        </div>
        <img src="/xxxt/practice.jpg">
      </div>
    </div>
    <div id="contact">
      <!-- ways to sign up for xxxt, currently nothing -->
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
  height: 120vh;
  position: absolute;
  top: -20vh;
  left: 0;
  z-index: -2;
  object-fit: cover;
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

#intro {
  position: relative;
  width: 90%;
  height: 90vh;
  padding: 5vh 5%;
  background-color: rgb(50, 54, 57);
  color: white;
  font-size: 2rem;
}

#intro img {
  position: absolute;
  bottom: 30px;
}

@media (max-width: 600px) {
  #banner h1 {
    font-size: 7rem;
  }
  
  #intro {
    font-size: 1.3rem;
  }
}

@media (min-width: 600px) {
  br.wrap {
    display: none;
  }
}

#feature {
  width: 90%;
  height: 100%;
  padding: 5vh 5%;
}

#feature h2 {
  font-size: 3rem;
}

#feature div.row {
  width: 100%;
  margin: 60px 0;
  color: rgb(50, 54, 57);
  justify-content: space-around;
}

#feature img {
  width: 530px;
  max-width: 90%;
  border-radius: 10px 10px 10px 10px;
  border: 3px solid white;
}

#feature h3 {
  font-size: 2.5rem;
  margin: 10px 0;
}

#feature div.content {
  width: 40%;
}

@media (max-width: 900px) {
  #feature div.row {
    flex-direction: column;
  }

  #feature div.reverse {
    flex-direction: column-reverse;
  }

  #feature div.content {
    width: 90%;
  }
}
</style>