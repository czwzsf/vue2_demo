<template>
  <div id="app">
    <count-com></count-com>
    <person-com></person-com>
  </div>
</template>
<script>
import CountCom from "@/components/CountCom.vue";
import store from "@/store";
import PersonCom from "@/components/PersonCom.vue";

export default {
  name: "App",
  components: { CountCom, PersonCom },
  // 注入store
  store,
};
</script>
<style lang="less"></style>
