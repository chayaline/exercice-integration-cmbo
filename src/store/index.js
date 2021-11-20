import Vue from 'vue'
import Vuex from 'vuex'
import productsList from '@/utils/products-list'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productsList: productsList,
    selectedProduct: {},
    cart: {
      items: [],
      totalPrice: 0
    }
  },
  getters: {
    nbItemsInCart: (state) => state.cart.length
  },
  mutations: {
    SET_CART_ITEMS (state, cartList) {
      Vue.set(state.cart, 'items', cartList)
    },
    CLEAR_CART (state) {
      Vue.set(state.cart, [])
    },
    SELECT_PRODUCT (state, product) {
      Vue.set(state, 'selectedProduct', product)
    },
    SET_CART_PRICE (state, price) {
      Vue.set(state.cart, 'totalPrice', price)
    }
  },
  actions: {
    ADD_TO_CART ({ commit, state }, { product, quantity }) {
      const newPrice = state.cart.totalPrice + (quantity * parseFloat(product.price.replace(/,/g, '')))
      const productToAdd = product
      productToAdd.quantity = quantity
      const newCartItems = state.cart.items
      newCartItems.push(product)
      commit('SET_CART_ITEMS', newCartItems)
      commit('SET_CART_PRICE', newPrice)
    },
    REMOVE_FROM_CART ({ commit, state }, productId) {
      const { totalPrice, items } = state.cart
      const { quantity, price } = items[productId]
      const newPrice = totalPrice - (quantity * parseFloat(price.replace(/,/g, '')))
      const newCartItems = items
      newCartItems.splice(productId, 1)
      commit('SET_CART_ITEMS', newCartItems)
      commit('SET_CART_PRICE', newPrice)
    }
  },
  modules: {
  },
  plugins: [
    createPersistedState()
  ]
})
