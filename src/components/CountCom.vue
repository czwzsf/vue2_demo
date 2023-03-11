<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大10倍后为：{{ bigsum }}</h1>
    <h1>我在{{ school }}，学习{{ subject }}</h1>
    <select v-model="number">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="add1">当前求和为奇数在加</button>
    <button @click="add2">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

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
    minus() {
      // 通知store减
      this.$store.dispatch("minus", this.number);
    },
    add1() {
      // 通知store加
      this.$store.dispatch("add1", this.number);
    },
    add2() {
      // 通知store加
      this.$store.dispatch("add2", this.number);
    },
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState(["sum", "school", "subject"]),
    ...mapGetters(["bigsum"]),
  },
};
</script>

<style scoped lang="less">
button {
  margin-left: 5px;
}
</style>
