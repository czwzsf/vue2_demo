<template>
  <div>
    <h2>我是detail的内容</h2>
    <li>消息编号：{{ this.$route.query.id }}</li>
    <li>消息标题：{{ this.$route.query.title }}</li>
  </div>
</template>

<script>
export default {
  name: "DetailView",
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style scoped></style>
