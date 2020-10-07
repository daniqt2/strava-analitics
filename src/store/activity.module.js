/* eslint-disable no-shadow */
/* eslint-disable operator-linebreak */

import AuthService from '../services/auth.service';
import ActivityService from '../services/activity.service';

export const activity = {
  namespaced: true,
  state: () => ({
    activities: null
  }),
  actions: {
    getActivities({ commit }) {
      return AuthService.activities(this.state.auth.token).then(res => {
        let a = ActivityService.parseActivities(res.data);
        commit('activities', a);
      });
    }
  },
  mutations: {
    activities(state, activities) {
      state.activities = activities;
    }
  },
  getters: {
    getActivities(state) {
      console.log('state.activities');
      console.log(state.activities);
      return state.activities;
    }
  }
};
