<template>
  <div id="app">
    <mt-header fixed title="Rent App"></mt-header>
    <router-view/>
    <BottomTabber />
    <Popup v-if="showMessageBox" />
    <BlackCover v-if="showMessageBox" />
  </div>
</template>

<script>
import './index.css'
import BottomTabber from './components/BottomTabber'
import Popup from './components/Popup'
import BlackCover from './components/BlackCover'
import { mapState } from 'vuex'

export default {
  components: {
    BottomTabber,
    Popup,
    BlackCover
  },
  computed: {
    ...mapState({
      showMessageBox: state => state.showMessageBox
    })
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
