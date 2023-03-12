<template>
  <div>
    <Banner></Banner>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <router-link to="/home/news">News</router-link>
        <br />
        <router-link to="/home/message">Message</router-link>
      </div>
      <div class="col-xs-6">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/bannerCom.vue";
export default {
  name: "HomeVIew",
  components: {
    Banner,
  },
};
</script>

<style scoped></style>
