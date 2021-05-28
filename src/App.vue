<template>
	<router-view></router-view>
</template>

<style>
body {
  margin: 0;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
/* Following are common class */
div.row {
  display: flex;
  justify-content: center;
  align-items: center;
}

div.col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.fullscreen {
  width: 100%;
  height: 100vh;
}

.transparent {
  opacity: 0.6;
  transition: all 0.5s ease;
}

.transparent:hover {
  opacity: 0.9;
}

.button {
  padding: 15px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  color: inherit;
  transition: all 0.5s ease;
}

.button:hover {
  box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
  padding: 15px 20px;
}

img.logo {
  position: absolute;
  z-index: 10000;
  max-width: 33vw;
  width: 150px;
  left: 10px;
  top: 10px;
}


/* Following are transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .5s ease;
}

.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
