<template>
  <div id="app">
    <div id="nav">
      <Header/>
    </div>
    <router-view class="main-view"/>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
  font-family: $font-base;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $grey-dark;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $yellow;

    &.router-link-exact-active {
      color: $yellow;
    }
  }
}

.main-view {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
</style>
