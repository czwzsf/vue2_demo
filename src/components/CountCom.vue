<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
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
export default {
  name: "CountCom",
  data() {
    return {
      // 当前选择的数字
      number: 1,
      // 获取组件所求的和
      sum: 0,
    };
  },
  methods: {
    // 点击加号
    add() {
      this.sum += this.number;
    },
    // 点击减号
    minus() {
      this.sum -= this.number;
    },
    // 当前求和为奇数在加
    add1() {
      if (this.sum % 2 !== 0) {
        this.sum += this.number;
      }
    },
    // 等一等再加
    add2() {
      setTimeout(() => {
        this.sum += this.number;
      }, 500);
    },
  },
};
</script>

<style scoped lang="less">
button {
  margin-left: 5px;
}
</style>
