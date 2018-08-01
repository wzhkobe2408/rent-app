<template>
  <mt-tabbar v-model="selected" :fixed="true">
    <mt-tab-item id="tab1">
      <img slot="icon" v-on:click="toHome" src="../assets/100x100.png">
      Home
    </mt-tab-item>
    <mt-tab-item id="tab2" >
      <img slot="icon" v-on:click="toForm" src="../assets/100x100.png">
      Add
    </mt-tab-item>
    <mt-tab-item id="tab3" >
      <img slot="icon" v-on:click="toProfile" src="../assets/100x100.png" />
      Me
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>
  export default {
    data() {
      return {
        selected:'tab1'
      }
    },
    methods: {
      toForm() {
        this.$router.push('/form')
      },
      toHome() {
        this.$router.push('/')        
      },
      toProfile() {
        this.$router.push('/profile')
      }
    }
  }
</script>
