<template>
  <div id="app">
    <mt-header fixed title="Rent App"></mt-header>
    <router-view/>
    <BottomTabber />
  </div>
</template>

<script>
import './index.css'
import BottomTabber from './components/BottomTabber'

export default {
  components: {
    BottomTabber
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
}
.mint-header {
  background: #ff5100;
}
</style>
