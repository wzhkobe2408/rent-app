<template>
  <div id="app">
    <mt-header fixed title="Rent App">
        <mt-button slot="left" @click="goBack" icon="back">back</mt-button>
      <router-link to="/search" slot="right">
        <mt-button icon="search"></mt-button>
      </router-link>
    </mt-header>
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
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    BottomTabber,
    Popup,
    BlackCover
  },
  methods: {
    ...mapActions([
      'goBack'
    ]),
    goBack() {
        this.$router.go(-1)
    }
  },
  computed: {
    ...mapState({
      showMessageBox: state => state.showMessageBox,
      checkGoBack: state => state.goBack
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
