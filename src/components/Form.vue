<template>
  <div style="margin-bottom: 70px">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username" state="success" ></mt-field>
    <mt-field state="error" label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
    <mt-field state="warning" label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
    <mt-field label="网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>
    <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
    <mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>
    <mt-radio
      title="选择项目"
      v-model="value"
      :options="['选项一', '选项二', '选项三']">
    </mt-radio>
    <mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4" v-model="introduction"></mt-field>
    <div style="display: flex;padding: 0 10px;justify-content: center">
      <mt-button @click="handleSubmit" :plain="true" style="width: 50%;float:left" type="default">Join</mt-button>
      <mt-button :plain="true" size="normal" style="width: 50%" type="default">Mark</mt-button>
      </div>
  </div>  
</template>
<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        username: '',
        birthday: '',
        email: '',
        password: '',
        phone:'',
        website: '',
        number: 0,
        introduction: '',
        value: 'optionB'
      }
    },
    methods: {
      handleSubmit() {
        this.$router.push('/')
        //alert('test')
        // axios.post('/homes', {
        //   // all the fields
        //   firstName: 'Fred',
        //   lastName: 'Flintstone'
        // })
        // .then(response => {
        //   console.log(response)
        //   // back to home page
        //   this.$router.push('/')
        // })
        // .catch(error => {
        //   console.log(error)
        // })
      }
    }
  }
</script>
<style scoped>

</style>
