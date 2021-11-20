import Vue from 'vue'
import Vuex from 'vuex'
import productsList from '@/utils/products-list'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productsList: productsList,
    selectedProduct: {},
    cart: []
  },
  getters: {
    nbItemsInCart: (state) => state.cart.length
  },
  mutations: {
    SET_CART (state, cartList) {
      Vue.set(state.cart, cartList)
    },
    CLEAR_CART (state) {
      Vue.set(state.cart, [])
    },
    SELECT_PRODUCT (state, product) {
      Vue.set(state, 'selectedProduct', product)
    }
  },
  actions: {
    ADD_TO_CART ({ commit }, product) {
      commit('SET_CART')
    }
  },
  modules: {
  },
  plugins: [
    createPersistedState()
  ]
})
