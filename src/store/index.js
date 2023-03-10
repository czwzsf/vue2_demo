import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //countCom组件中的sum
    sum: 0,
  },
  getters: {},
  mutations: {
    Add: function (state, value) {
      console.log("value", value);
      state.sum += value;
      console.log("state.sum", state.sum);
    },
  },
  actions: {
    add: function (context, value) {
      context.commit("Add", value);
    },
  },
  modules: {},
});
