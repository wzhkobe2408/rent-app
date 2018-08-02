<template>
  <div v-if="data !== null" style="margin-bottom: 50px">
    <div class="banner">
      <img style="width: 100%" :src="data._source.image" >
    </div>
    <div class="info-box">
      <h3 style="font-weight: 400">{{ data._source.name }}</h3>
      <hr>
      <div style="display: flex">
        <img :src="data._source.host_image" >
        <p style="padding-left: 10px;margin: 0;">{{ data._source.host_name }}</p>
      </div>
      <hr>
      <p><span>Bathrooms: </span>{{ data._source.bathrooms }}</p>
      <p><span>Bedrooms: </span>{{ data._source.bedrooms }}</p>
      <p><span>Location: </span>{{ data._source.location.lat.toFixed(2) }} , {{ data._source.location.lon.toFixed(2) }}</p>
      <p><span>Bathrooms: </span>{{ data._source.bathrooms }}</p>
      <p><span>Bedrooms: </span>{{ data._source.bedrooms }}</p>
      <p><span>Bathrooms: </span>{{ data._source.bathrooms }}</p>
      <p><span>Bedrooms: </span>{{ data._source.bedrooms }}</p>
      <div class="display: flex">
      <mt-button :plain="true" style="width: 50%;float:left" type="default">Join</mt-button>
      <mt-button :plain="true" size="normal" style="width: 50%" type="default">Mark</mt-button>
      </div>
    </div>
  </div>  
</template>
<script>
  export default {
  data () {
    return {
      data: null
    }
  },
  methods: {

  },
  mounted() {
    fetch(`http://localhost:3000/homes?_id=${this.$route.query._id}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.data = data[0]
      })
  }
}
</script>
<style scoped>
  .banner {
    width: 100%;
    height: 160px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  .banner img {
    width: 100%;
  }
  .info-box {
    padding: 10px;
  }
  .info-box h3 {
    margin: 0;
  }
</style>
