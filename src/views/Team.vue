<template>
  <div id="app">
    <div class="banner">
      <img src="/ITI.svg" @click="router.push('/')">
    </div>
    <div id="grid" class="row" v-for="i in index">
      <div class="card" v-for="j in length" >
        <div class="row" v-if="profiles[(i - 1) * length + (j - 1)] != undefined">
          <h1 v-if="profiles[(i - 1) * length + (j - 1)].nickName">{{ profiles[(i - 1) * length + (j - 1)].nickName }} ·&nbsp</h1>
          <h1>{{ profiles[(i - 1) * length + (j - 1)].name }}</h1>
        </div>
        <div class="row" v-if="profiles[(i - 1) * length + (j - 1)] != undefined">
          <a class="icon mdi mdi-24px mdi-github" v-if="profiles[(i - 1) * length + (j - 1)].github" :href="profiles[(i - 1) * length + (j - 1)].github"></a>
          <div v-for="t in profiles[(i - 1) * length + (j - 1)].tags" class="tag" :style="tagStyle(t)">{{t}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter(), route = useRoute()
ref: length = 3
ref: profiles = [{
      name: '李世衡',
      nickName: 'Phantomlsh',
      tags: ['AD', 'ED'],
      github: 'https://github.com/phantomlsh'
    },
    {
      name: '朱庆刚',
      nickName: 'Cmdblock',
      tags: ['AD', 'BE', 'FE'],
      github: 'https://github.com/CmdBlock-zqg'
    },
    {
      name: '丁浩然',
      nickName: 's1mple',
      tags: ['ED'],
    },
    {
      name: '季雨彤',
      nickName: 'Tina',
      tags: ['FE', 'BE'],
      github: 'https://github.com/CutePikachu'
    },
    {
      name: '季雨琦',
      nickName: 'Queenie',
      tags: ['FE', 'BE'],
      github: 'https://github.com/QueenieJi'
    },
    {
      name: '陈柏澜',
      nickName: 'Nick',
      tags: ['BE', 'FE']
    },
    {
      name: '乔子昂',
      nickName: 'Sashimi',
      tags: ['BE', 'FE'],
      github: 'https://github.com/SiuGaaLei'
    },
    {
      name: '张静远',
      nickName: '',
      tags: ['BE'],
    },
    {
      name: '陈雨涵',
      nickName: '',
      tags: ['ED'],
      pic: './img/team/CYH.jpeg',
    },
    {
      name: '刘怡',
      nickName: 'Orange',
      tags: ['AD', 'CO'],
      pic: './img/team/LY.jpg',
    }]
ref: index = Math.ceil(profiles.length / length)

const color = []
color['AD'] = "#ffccc7"
color['BE'] = "#f4ffb8"
color['CO'] = "#ffe7ba"
color['DS'] = "#ffd6e7"
color['ED'] = "#efdbff"
color['FE'] = "#d6e4ff"

function tagStyle(tag) {
  return "background-color: " + color[tag] + ";"
}
</script>
<style scoped>
#app {
  background: rgb(50, 54, 57);
  text-align: center;
  color: white;
  width: max-content;
  min-height: 100vh;
  overflow-x: hidden;
}
img {
  margin: 20%;
}
a {
  color: white;
}
p {
  color: white;
}
h1 {
  font-weight: 100;
}
div.tag {
  border-radius: 4px;
  text-align: center;
  color: rgb(50, 54, 57);
  padding: 1px;
  width: 35px;
  margin-right: 6px;
  font-weight: bold;
}
.banner {
  width: 100vw;
}
.card {
  width: 30vw;
  margin-bottom: 20px;
  text-align: initial;
}
.icon {
  margin-right: 6px;
}
@media (max-width: 900px) {
  #grid {
    display: block;
    margin: 20px;
  }
  .card {
    width: 100%;
  }
  img {
    width: 60%;
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 25px;
  }
}

</style>