import { createStore } from 'vuex';

interface State {
  title: string
}

const state: State = {
  title: '测试'
}

export default createStore({
  state,
  mutations: {},
  actions: {},
  modules: {},
});