<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/about">联系我</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>