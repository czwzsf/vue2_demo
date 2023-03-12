<template>
  <div>
    <div class="router-link">
      <el-button type="primary">
        <router-link to="/home" active-class="active">Home</router-link>
      </el-button>
      <el-button type="primary">
        <router-link to="/about" active-class="active">About</router-link>
      </el-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    // console.log('App',this)
  },
};
</script>
<style lang="less">
.router-link {
  a {
    margin-right: 10px;
    font-size: 15px;
  }

  .active {
    color: white;
  }
}
</style>
