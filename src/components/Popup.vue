<template>
  <div class="popup-container">
    <div class="popup-header">选择方式</div>
    <div class="popup-body">
      <mt-button @click="toForm" :plain="true" size="large" type="default">租房</mt-button>
      <mt-button @click="toForm" :plain="true" size="large" type="default">求租</mt-button>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    methods: {
      toForm() {
        this.MessageBox(false)
        this.$router.push('/form')
      },
      ...mapActions([
        'MessageBox'
      ])
    }
  }
</script>
<style scoped>
  .popup-container {
    position: fixed;
    background: #ffffff;
    box-shadow: 1px 1px 6px rgba(0,0,0,0.1);
    border-radius: 4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    z-index: 10;
  }
  .popup-header {
    text-align: center;
    padding: 5px;
  }
  .popup-body {
    padding: 10px;
  }
  .popup-body button {
    margin-bottom: 5px;
  }
</style>