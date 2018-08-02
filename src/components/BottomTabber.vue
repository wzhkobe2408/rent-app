<template>
  <div class="bottom-tabbar" >
    <div @click="toHome">
      <font-awesome-icon icon="home" />
      <div>Home</div>
    </div>
    <div @click="popUp">
      <font-awesome-icon icon="plus" />
      <div>Add</div>
    </div>
    <div @click="toProfile">
      <font-awesome-icon icon="user" />
      <div>Me</div>
    </div>    
  </div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
      return {
        selected:'tab1'
      }
    },
    methods: {
      ...mapActions([
        'MessageBox'
      ]),
      popUp() {
        this.MessageBox(true)
        // this.$router.push('/form')
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
<style scoped>
  .bottom-tabbar {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 10;
  }
  .bottom-tabbar > div {
      flex: 1;
      text-align: center;
      padding: 5px 0;
      background: #e7e7e7;
      border-right: 1px solid #d8d8d8;
      cursor: pointer;
  }
  .bottom-tabbar > div:hover {
    background: #ff5e00;
    color: #fff;
  }
</style>

