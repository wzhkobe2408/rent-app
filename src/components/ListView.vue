<template>
  <ul
    v-if="list.length > 0"
    class="list-group"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10">
    <router-link v-for="(item) in list" :key="item._id" :to= "'/home?_id=' + item._id">
      <li class="list-item" >
          <div class="home_img">
            <img :src="item._source.image" />
          </div>
          <div class="intro">
            <p class="home_name">{{ item._source.name }}</p>
            <p class="owner_name">-- {{ item._source.host_name }}</p>
            <p class="price">$ {{ item._source.price }}</p>
          </div>
      </li>
    </router-link>

  </ul>
</template>

<script>
export default {
  data () {
    return {
      list:[],
      page: 1,
      limit: 10,
      loading: false
    }
  },
  methods: {
    loadMore() {
      this.loading = true;
      this.page++;   
      fetch(`http://localhost:3000/homes?_page=${this.page}&_limit=${this.limit}`)
        .then(res => res.json())
        .then(data => {
          this.list = this.list.concat(data);
          this.loading = false;
        })
    }
  },
  mounted() {
    fetch(`http://localhost:3000/homes?_page=${this.page}&_limit=${this.limit}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.list = data
      })
  }
}
</script>

<style scoped>
  ul.list-group {
    padding: 0;
    margin: 0;
  }
  .list-item {
    list-style: none;
    padding: 10px;
    cursor: pointer;
    border-top: 1px solid #f4f4f4;
    display: flex;
    justify-content: flex-start;
  }
  .list-item:hover {
    background: #f3f3f3;
  }
  .home_img {
    width: 135px;
  }
  .home_img img {
    width: 100%;
  }
  .intro {
    flex: 1;
    padding-left: 20px;
  }
  .home_name {
    margin-top: 0;
    margin-bottom: 0;
  }
  .price {
    color: #ff9100;
    margin-bottom: 0;
  }
  .owner_name {
    margin-top: 10px;
  }
  a {
    text-decoration: none;
    color: #000;
  }
</style>
