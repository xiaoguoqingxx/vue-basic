import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions/actions'
import testGetters from './getters/test-getters'
import getters from './getters/getters'
import example from './modules/example'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: { ...getters, ...testGetters },
  modules: {
    example
  },
  actions: { ...actions }
})
