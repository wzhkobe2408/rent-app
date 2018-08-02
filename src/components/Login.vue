<template>
  <div>
    <h3>登录</h3>
    <mt-field label="邮箱" placeholder="输入邮箱" type="email" v-model="email"></mt-field>
    <mt-field label="密码" placeholder="输入密码" type="password" v-modal="password"></mt-field>
    <div style="padding: 0 10px;">
      <mt-button type="default" :plain="true" size="large">登录</mt-button>
    </div>
  </div>  
</template>
<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>
<style scoped>
  h3 {
    font-weight: 400;
    font-size: 28px;
    margin-top: 80px;
    margin-left: 10px;
    margin-bottom: 10px;
  }
</style>
