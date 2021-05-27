<template>
	<router-view></router-view>
</template>

<script setup>

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
body {
  margin: 0;
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

a.button {
  padding: 15px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  color: inherit;
}

img.logo {
  position: absolute;
  z-index: 10000;
  max-width: 33vw;
  width: 150px;
  left: 10px;
  top: 10px;
}
</style>
