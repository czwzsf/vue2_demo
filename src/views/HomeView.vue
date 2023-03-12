<template>
  <div>
    <h1>Home</h1>
    <p>This is the home page</p>
    <person-com></person-com>
  </div>
</template>

<script>
import PersonCom from "@/components/PersonCom.vue";

export default {
  name: "HomeVIew",
  components: { PersonCom },
};
</script>

<style scoped></style>
