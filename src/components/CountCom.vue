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
    <button @click="Add(number)">+</button>
    <button @click="Minus(number)">-</button>
    <button @click="add1(number)">当前求和为奇数在加</button>
    <button @click="add2(number)">等一等再加</button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";

export default {
  name: "CountCom",
  data() {
    return {
      // 当前选择的数字
      number: 1,
    };
  },
  methods: {
    //程序员亲自写方法
    /* increment(){
      this.$store.commit('JIA',this.n)
    },
    decrement(){
      this.$store.commit('JIAN',this.n)
    }, */

    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
    // ...mapMutations({increment:'JIA',decrement:'JIAN'}),

    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
    // ...mapMutations(['JIA','JIAN']),

    /* ************************************************* */
    // 直接操作mutations
    ...mapMutations(["Add", "Minus"]),
    ...mapActions(["add1", "add2"]),
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据。（数组写法）
    // 若想要使用数组写法，生成的计算属性名必须和state中的属性名一致
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
