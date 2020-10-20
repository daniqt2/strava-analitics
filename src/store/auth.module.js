/* eslint-disable no-shadow */
/* eslint-disable operator-linebreak */

import AuthService from '../services/auth.service';

export const auth = {
  namespaced: true,
  state: () => ({
    token: null,
    loggedIn: false
  }),
  actions: {
    login({ commit }, c) {
      return AuthService.login(c).then(res => {
        commit('tokenSuccess', res.data.access_token);
        this.$store.dispatch('activity/getActivities');
      });
    }
  },
  mutations: {
    tokenSuccess(state, token) {
      state.loggedIn = true;
      state.token = token;
    }
  },
  getters: {
    isLogged(state) {
      return state.loggedIn;
    },
    token(state) {
      return state.token;
    }
  }
};
