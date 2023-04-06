import {createStore} from 'vuex';
import user from './modules/user';
const store = (window.store = createStore({
  // strict: true,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
  },
}));
export default store;
