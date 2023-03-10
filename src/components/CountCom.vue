<template>
  <div>
    <h1>当前求和为：{{ this.$store.state.sum }}</h1>
    <select v-model="number">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="add">+</button>
    <!--    <button @click="minus">-</button>-->
    <!--    <button @click="add1">当前求和为奇数在加</button>-->
    <!--    <button @click="add2">等一等再加</button>-->
  </div>
</template>

<script>
export default {
  name: "CountCom",
  data() {
    return {
      // 当前选择的数字
      number: 1,
    };
  },
  methods: {
    add() {
      // 通知store加
      this.$store.dispatch("add", this.number);
    },
  },
};
</script>

<style scoped lang="less">
button {
  margin-left: 5px;
}
</style>
