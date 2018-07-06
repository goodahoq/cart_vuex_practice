<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import home from '@/components/home'
import detail from '@/components/detail'
import checkout from '@/components/checkout'
import navbar from '@/components/navbar'
import cartPage from '@/components/cartPage'
export default {
    name: 'App',
    components: {
        navbar, home, detail, checkout, cartPage
    }
}
</script>

<style lang="scss">
@import "./assets/main.scss";
body {
  padding: 0;
  margin: 0;
}
a {
  color: #000;
  text-decoration: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
