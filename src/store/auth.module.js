/* eslint-disable no-shadow */
/* eslint-disable operator-linebreak */

import AuthService from '../services/auth.service';
import ActivityService from '../services/activity.service';

export const auth = {
  namespaced: true,
  state: () => ({
    token: null,
    activities: null,
    loggedIn: false
  }),
  actions: {
    getActivities({ commit, state }) {
      return AuthService.activities(state.token).then(res => {
        let a = ActivityService.parseActivities(res.data);
        commit('activities', a);
      });
    },
    login({ commit }, c) {
      return AuthService.login(c).then(res => {
        commit('tokenSuccess', res.data.access_token);
      });
    }
  },
  mutations: {
    tokenSuccess(state, token) {
      state.loggedIn = true;
      state.token = token;
    },
    activities(state, activities) {
      state.activities = activities;
    }
  },
  getters: {
    getActivities(state) {
      return state.activities;
    },
    isLogged(state) {
      return state.loggedIn;
    }
  }
};
