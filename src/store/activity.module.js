/* eslint-disable no-shadow */
/* eslint-disable operator-linebreak */

import AuthService from '../services/auth.service';
import ActivityService from '../services/activity.service';

export const activity = {
  namespaced: true,
  state: () => ({
    activities: null,
    activitiesPercent: null
  }),
  actions: {
    getActivities({ commit }) {
      console.log('cooooo');
      return AuthService.activities(this.state.auth.token).then(res => {
        let a = ActivityService.parseActivities(res.data);
        commit('activities', a);
        let b = ActivityService.parseActivityKinds(a);
        commit('activitiesPercent', b);
      });
    }
  },
  mutations: {
    activities(state, activities) {
      state.activities = activities;
    },
    activitiesPercent(state, activities) {
      state.activitiesPercent = activities;
    }
  },
  getters: {
    getActivities(state) {
      return state.activities;
    },
    activitiesPercent(state) {
      return state.activitiesPercent;
    }
  }
};
