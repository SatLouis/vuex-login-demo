import login from '@/apis/login';
import loginOut from '@/apis/loginOut';
import whoAmi from '@/apis/whoAmI';

export default {
  namespaced: true,

  state: () => ({
    userInfo: {},
    loading: false,
  }),

  mutations: {
    setUserInfo(state, payload = {}) {
      state.userInfo = payload;
    },
    setLoading(state, boolean = false) {
      state.loading = boolean;
    },
  },

  actions: {
    async loginApi({commit}, {loginId, loginPwd}) {
      commit('setLoading', true);
      const res = await login(loginId, loginPwd);
      commit('setLoading', false);
      return res;
    },

    async loginOutApi({commit}) {
      commit('setLoading', true);
      await loginOut();
      commit('setLoading', false);
      commit('setUserInfo');
    },

    async whoAmiApi({commit}) {
      commit('setLoading', true);
      const res = await whoAmi();
      commit('setLoading', false);
      commit('setUserInfo', res ?? {});
    },
  },
};
