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
@import "./assets/base/utils";
body {
  padding: 0;
  margin: 0;
  background-color: #f8f8f8;
}
a {
  color: $dark;
  text-decoration: none;

  //   &:hover {
  //     color: $primary;
  //   }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $dark;
}
</style>
