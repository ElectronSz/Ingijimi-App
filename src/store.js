import Vue from 'vue'
import Vuex from 'vuex'
import modules from './state/modules/index';

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
})
