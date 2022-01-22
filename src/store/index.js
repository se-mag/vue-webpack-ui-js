import { createStore, createLogger } from 'vuex'

// Create a new store instance.
export const store = createStore({
  plugins: [createLogger()],
  state() {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {},

  modules: {}
})
