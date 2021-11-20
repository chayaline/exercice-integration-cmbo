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
      totalPrice: 0,
      totalItems: 0
    },
    cartIsOpen: false
  },
  getters: {
    nbItemsInCart: (state) => state.cart.totalItems
  },
  mutations: {
    SET_CART_ITEMS (state, cartList) {
      Vue.set(state.cart, 'items', cartList)
    },
    CLEAR_CART (state) {
      Vue.set(state.cart, 'items', [])
      Vue.set(state.cart, 'totalPrice', 0)
      Vue.set(state.cart, 'totalItems', 0)
    },
    SET_ITEMS_COUNT (state, count) {
      Vue.set(state.cart, 'totalItems', count)
    },
    SELECT_PRODUCT (state, product) {
      Vue.set(state, 'selectedProduct', product)
    },
    SET_CART_PRICE (state, price) {
      Vue.set(state.cart, 'totalPrice', price)
    },
    SET_CART_IS_OPEN (state, value) {
      Vue.set(state, 'cartIsOpen', value)
    }
  },
  actions: {
    ADD_TO_CART ({ commit, state }, { product, quantity }) {
      const newPrice = state.cart.totalPrice + (quantity * parseFloat(product.price.replace(/,/g, '')))
      const productToAdd = product
      productToAdd.quantity = quantity
      const totalItems = state.cart.totalItems + quantity
      const newCartItems = state.cart.items
      newCartItems.push(productToAdd)
      commit('SET_CART_ITEMS', newCartItems)
      commit('SET_ITEMS_COUNT', totalItems)
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
