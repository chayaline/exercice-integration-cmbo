import Vue from 'vue'
import Vuex from 'vuex'
import productsList from '@/utils/products-list'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const state = {
  productsList: productsList,
  selectedProduct: {},
  cart: {
    items: [],
    totalPrice: 0,
    totalItems: 0
  },
  cartIsOpen: false
}
export const getters = {
  nbItemsInCart: (state) => state.cart.totalItems
}
export const mutations = {
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
}
export const actions = {
  ADD_TO_CART ({ commit, state }, { product, quantity }) {
    if (!product || !quantity) return
    const newPrice = state.cart.totalPrice + (quantity * parseFloat(product.price.replace(/,/g, '')))
    const productToAdd = product
    const totalItems = state.cart.totalItems + quantity
    const newCartItems = state.cart.items
    let alreadyInCart = false
    newCartItems.forEach((item) => {
      if (item.image === product.image) {
        item.quantity += quantity
        alreadyInCart = true
      }
    })
    if (!alreadyInCart) {
      productToAdd.quantity = quantity
      newCartItems.push(productToAdd)
    }
    commit('SET_CART_ITEMS', newCartItems)
    commit('SET_ITEMS_COUNT', totalItems)
    commit('SET_CART_PRICE', newPrice)
  },
  REMOVE_FROM_CART ({ commit, state }, productId) {
    if (productId === undefined) return
    const { totalPrice, items } = state.cart
    const { quantity, price } = items[productId]
    const newPrice = totalPrice - (quantity * parseFloat(price.replace(/,/g, '')))
    const newCartItems = items
    newCartItems.splice(productId, 1)
    const totalItems = state.cart.totalItems -= quantity
    commit('SET_CART_ITEMS', newCartItems)
    commit('SET_ITEMS_COUNT', totalItems)
    commit('SET_CART_PRICE', newPrice)
  }
}
export const plugins = [
  createPersistedState()
]

export const storeConfig = {
  state,
  getters,
  mutations,
  actions,
  plugins
}

export default new Vuex.Store(storeConfig)
