<template>
	<div id="app">
    <div id="banner" class="fullscreen">
      <div class="background" :style="{height: banner.bgHeight}">&nbsp;</div>
      <div class="words" v-for="index in wordsNum" :class="index" :style="wordsStyle()">{{ pickItem() }}</div>
      <h1 id="future" style="opacity: 0;">未来</h1>
      <transition name="fade">
        <div class="tip" v-if="banner.showTip">
          <div>由此展开</div>
          <img src="/util/expand_more.svg">
        </div>
      </transition>
    </div>
    <div id="intro" class="fullscreen col">
      <transition name="fade">
        <div class="row" v-if="open[1]">
          <div class="col transparent">
            <img class="icon" src="/util/auto.svg">
            <h2>自治自动</h2>
          </div>
          <div class="col transparent">
            <img class="icon" src="/util/collaborate.svg">
            <h2>团队合作</h2>
          </div>
          <div class="col transparent">
            <img class="icon" src="/util/lightbulb.svg">
            <h2>创意研发</h2>
          </div>
        </div>
      </transition>
      <div class="center">
        <img src="/ITI.svg">
        <h2>学生自主的信息技术团队</h2>  
      </div>
      <transition name="fade">
        <div class="row" v-if="open[1]">
          <div class="col transparent">
            <img class="icon" src="/util/code.svg">
            <h2>工程维护</h2>
          </div>
          <div class="col transparent">
            <img class="icon" src="/util/design.svg">
            <h2>美工设计</h2>
          </div>
          <div class="col transparent">
            <img class="icon" src="/util/educate.svg">
            <h2>教育共享</h2>
          </div>
        </div>
      </transition>
    </div>
    <div id="yzzx" class="fullscreen col">
      <img class="fullscreen background" src="/yzzx/shurentang.jpg">
      <transition name="slide-fade">
        <div class="row transparent" v-if="open[2]">
          <img class="quote" src="/util/quote.svg">
          <h1>人格健全 学术健全 <br> 自治自动 体育兼重</h1>
        </div>
      </transition>
      <div class="row title">
        <img class="yzzxlogo" src="/yzzx/logo.png">
        <img class="name" src="/yzzx/name.png">
      </div>
      <transition name="slide-fade">
        <a href="http://61.155.62.52/yzzx" target="_blank" class="button" v-if="open[2]">了解更多</a>
      </transition>
    </div>
    <div id="edu" class="row">
      <img src="/util/edu.svg">
      <div class="content col">
        <h1>教育</h1>
        <p><strong>ITI</strong>团队非常重视教育和学生个人能力的成长。在这里，不仅有团队内的软件开发技术培训，更有一年一度的著名信息技术普及教育课程<strong>信息学堂</strong>，帮助一届又一届的学生快速融入信息化的时代，广受学校和学生们的好评。新的一年信息学堂，期待你的到来！</p>
        <a class="button" href="./xxxt.html">了解更多</a>
      </div>
    </div>
    <div id="dev" class="row">
      <div class="content col">
        <h1>研发</h1>
        <p><strong>ITI</strong>一直以来与多方合作从事软件研发工作，并长期帮助学校维护各种网络服务，为江苏省扬州中学的信息化发展做出了卓越贡献。丰富多彩的应用和网页从ITI团队中绽放而出，架起信息的桥梁，展开信息化校园的未来画卷。</p>
        <a class="button" href="./project.html">了解更多</a>
      </div>
      <img src="/util/dev.svg">
    </div>
    
    <div id="footer" class="row">
      <div class="col">
        <h1>ITI</h1>
        <hr>
        <p>ITI Website &copy; 2019 ITI</p>
      </div>
      <a class="button" href="./team.html">了解我们的团队</a>
    </div>
  </div>
</template>
<script setup>
import anime from 'animejs/lib/anime.es.js';
import { onMounted } from 'vue'

ref: banner = {
  texts: ['信息', '发展', '潮流', '信心', '合作', '效率', '和谐', '交流', '学习', '进步', '科技', '前沿', '创新', '实践', '教育', '研发', '探索', '好奇', '严谨', '价值'],
  bgHeight: 0,
  showTip: false
} 
ref: open = []
ref: item = null
ref: wordsNum = Math.floor(window.innerHeight * window.innerWidth / 3e4)
console.log(wordsNum)


const pickItem = () => banner.texts[Math.round(Math.random() * banner.texts.length)]


function wordsStyle () {
  return {
    left: Math.random()*100 + '%',
    top: Math.random()*100 + '%'
  }
}

function sleep(time) { // ms
  return new Promise((resolve) => setTimeout(resolve, time))
}
async function start() {
  await sleep(500)
  banner.text = ''

  anime({
    targets: '.words',
    easing: 'easeOutExpo',
    duration: 5000,  
    keyframes: [
      { opacity: 1, scale: 1.2 },
      { scale: 1.5, opacity: 0 }
    ],
    delay: anime.stagger(2500/wordsNum)
  })
  
  await sleep(3000)
  anime({
    targets: '#future',
    duration: 2000,
    opacity: 1,
    scale: 1.7
  })
  await sleep(4000)
  banner.bgHeight = "100vh"
  await sleep(1100)
  banner.showTip = true

}
start()
</script>

<style scoped>
div {
  overflow-x: hidden;
}

.words {
  width: 100px;
  position: absolute;
  color: #BDBDBD;
  opacity: 0;
}

#banner {
  color: white;
  text-align: center;
  background: rgb(50, 54, 57);
}

#banner div.background {
  width: 100%;
  height: 0;
  position: absolute;
  z-index: 1;
  background: linear-gradient(#85a5ff, #b37feb);
  transition: all 1s ease;
}

#banner h1 {
  position: relative;
  z-index: 100;
  line-height: 100vh;
  margin: 0;
  padding: 0;
  font-size: 7rem;
}

#banner div.tip {
  position: absolute;
  z-index: 2;
  font-size: 1.5rem;
  bottom: 10px;
  width: 100%;
  height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease;
}

#banner div.tip:hover {
  height: 73px;
  bottom: 5px;
}

#banner img {
  width: 30px;
  opacity: 0.8;
}

@media (max-width: 500px) {
  #banner h1 {
    font-size: 8rem;
  }
}

#intro {
  background-color: rgb(50, 54, 57);
  color: white;
  justify-content: space-around;
}

#intro img {
  width: 100%;
}

#intro img.icon {
  max-height: calc(50vh - 190px);
}

#intro h2 {
  text-align: center;
  margin: 0;
}

#intro div.center {
  max-width: 90%;
  width: 500px;
}

#intro div.row {
  width: 100%;
  justify-content: space-around;
}

#intro div.row div.col {
  max-width: 30%;
}

#yzzx {
  color: white;
  justify-content: space-around;
}

#yzzx img.background {
  position: absolute;
  z-index: -1;
  object-fit: cover;
}

#yzzx br {
  display: none;
}

#yzzx h1 {
  margin: 0 10px;
  font-size: 3rem;
}

#yzzx img.yzzxlogo {
  width: 20%;
}

#yzzx img.name {
  width: 75%;
}

#yzzx img.quote {
  width: 100px;
}

#yzzx a {
  background-color: rgb(53, 114, 171);
}

@media (max-width: 1000px) {
  #yzzx br {
    display: inline-block;
  }

  #yzzx h1 {
    font-size: 1.8rem;
  }

  #yzzx img.quote {
    width: 60px;
  }
}

@media (max-width: 500px) {
  #yzzx img.logo {
    width: 60%;
  }

  #yzzx img.name {
    width: 80%;
    margin: 10px 0;
  }

  #yzzx div.title {
    flex-direction: column;
  }
}

#edu,
#dev {
  width: 100%;
  margin: 60px 0;
  color: rgb(50, 54, 57);
  justify-content: space-around;
}

#edu h1,
#dev h1 {
  font-size: 5rem;
  margin: 10px 0;
  text-align: center;
}

#edu img,
#dev img {
  width: 500px;
  max-width: 90%;
}

#edu div.content,
#dev div.content {
  width: 40%;
  text-align: center;
}

#edu a,
#dev a {
  background-color: #ffc53d;
}

@media (max-width: 900px) {
  #edu {
    flex-direction: column;
  }

  #dev {
    flex-direction: column-reverse;
  }

  #edu h1,
  #dev h1 {
    font-size: 3rem;
  }

  #edu div.content,
  #dev div.content {
    width: 90%;
    text-align: center;
  }
}

#footer {
  background-color: rgb(50, 54, 57);
  color: white;
  justify-content: space-between;
}

#footer div.col {
  width: 300px;
  margin: 20px 30px;
  align-items: flex-start;
}

#footer hr {
  border: 1px solid white;
  width: 100%;
}

#footer h1,
#footer p {
  margin: 2px 0;
}

#footer a {
  margin: 30px;
  color: rgb(50, 54, 57);
  background-color: #ddd;
}

@media (max-width: 600px) {
  #footer {
    flex-direction: column-reverse;
  }

  #footer div.col {
    width: 80%;
    align-items: center;
  }
}


#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
</style>