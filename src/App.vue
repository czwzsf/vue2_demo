<template>
  <div>
    <Count />
    <hr />
    <Person />
  </div>
</template>

<script>
import Count from "./components/CountCom.vue";
import Person from "./components/PersonCom.vue";

export default {
  name: "App",
  components: { Count, Person },
  mounted() {
    // console.log('App',this)
  },
};
</script>
