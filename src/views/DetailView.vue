<template>
  <div>
    <h2>我是detail的内容</h2>
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ title }}</li>
  </div>
</template>

<script>
export default {
  name: "DetailView",
  props: ["id", "title"],
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style scoped></style>
