import Vue from 'vue'
import VueStore from 'vuex'
import modules from './modules'
import i18n from '@/i18n'

Vue.use(VueStore)

const state = {
    menu : [
      ...i18n.t('sidebar.menu')
    ]
}

const getters = {
  token: (state) => {
    return state.user.token
  }
}

const store = new VueStore.Store({
    modules,
    state,
    getters
})

export default store;