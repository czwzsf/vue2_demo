<template>
  <div>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </div>
</template>

<script>
export default {
  name: "NewsView",
  beforeDestroy() {
    console.log("NewsView beforeDestroy");
  },
  //路由的生命周期函数
  activated() {
    console.log("NewsView activated");
  },
  deactivated() {
    console.log("NewsView deactivated");
  },
};
</script>

<style scoped></style>
