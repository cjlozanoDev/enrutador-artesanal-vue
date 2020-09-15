import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  users: []
};

const store = new Vuex.Store({
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
});

export default store;

store.dispatch('setUsers')