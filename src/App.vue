<template>
  <div id="app">
    <count-com></count-com>
  </div>
</template>
<script>
import CountCom from "@/components/CountCom.vue";
import store from "@/store";

export default {
  name: "App",
  components: { CountCom },
  // 注入store
  store,
};
</script>
<style lang="less"></style>
