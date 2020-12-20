import Vue from 'vue'
import Vuex from 'vuex'
import * as notification from '@/store/modules/notification'
import * as vehicle from '@/store/modules/vehicle'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notification,
    vehicle
  },
})
