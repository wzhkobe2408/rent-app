<template>
  <div class="profile">
    <div class="pic-part">
      <h1>This is the about me page</h1> 
      <img @click="uploadImg"  src="../assets/profile.jpg" >
    </div>
    <div class="activity-header">
      Recent Activity
    </div>
    <div style="padding: 10px;" v-if="loading">Loading...</div>
    <ul v-if="!loading" class="profile-list" style="list-style: none">
      <li v-for="post in data" :key="post.id">{{ post.title.substr(0,100) + '...' }}</li>
    </ul>
    <form style="display:none">
      <input type="file" ref="file-upload" />
    </form>
  </div>  
</template>
<script>
  export default {
    data() {
      return {
        data: [],
        loading: true
      }
    },
    methods: {
      uploadImg() {
        this.$refs['file-upload'].click();
      }
    },
    created() {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(res => res.json())
        .then(data => { 
          this.data = data
          this.loading = false
        })
    }
  }
</script>
<style scoped>
  .profile {
    margin-bottom: 50px;
  }
  .pic-part {
    padding: 10px;
    background:#3a3a3a;
  }
  .pic-part img {
    width: 40%;
    border-radius: 50%;
    margin-bottom: 10px;
    margin-left: 30%;
    cursor: pointer;
  }
  .pic-part img:hover {
    filter: brightness(0.6);
  }
  .pic-part h1 {
    margin: 0 0 10px 0;
    color:#fff;
    font-weight: 400;
    text-align: center;
  }
  .profile-list {
    padding: 0px;
    margin: 0;
  }
  .profile-list li {
    padding: 10px;
    cursor: pointer;
    border-top: 1px solid #f4f4f4;
  }
  .profile-list li:hover {
    background: #f4f4f4;
  }
  .activity-header {
    text-align: center;
    font-size: 26px;
    padding: 10px;
    background: #686868;
    color: #fff;
  }
</style>
