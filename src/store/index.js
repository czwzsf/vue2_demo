import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //countCom组件中的sum
    sum: 0,
    school: "NEU",
    subject: "Vue",
  },
  getters: {
    //countCom组件中的sum
    bigsum: function (state) {
      return state.sum * 10;
    },
  },
  mutations: {
    Add: function (state, value) {
      state.sum += value;
    },
    Minus: function (state, value) {
      state.sum -= value;
    },
  },
  actions: {
    add: function (context, value) {
      context.commit("Add", value);
    },
    minus: function (context, value) {
      context.commit("Minus", value);
    },
    add1: function (context, value) {
      if (context.state.sum % 2) {
        context.commit("Add", value);
      }
    },
    add2: function (context, value) {
      setTimeout(() => {
        context.commit("Add", value);
      }, 1000);
    },
  },
  modules: {},
});
