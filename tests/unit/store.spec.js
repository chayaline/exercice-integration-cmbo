import { state, getters, mutations, actions } from '@/store'
import Vue from 'vue'
import productsList from '@/utils/products-list.json'

let vm
const commit = jest.fn()

const initialState = {
  productsList: productsList,
  selectedProduct: {},
  cart: {
    items: [],
    totalPrice: 0,
    totalItems: 0
  },
  cartIsOpen: false
}

const product = {
  title: "Step behind the scenes of Havana's theater",
  price: "7,956",
  description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  image: "product_6",
  category: "featured"
}
const payload = { product, quantity: 2 }

describe('store tests:', () => {
  beforeAll(() => {
    vm = new Vue()
  })

  beforeEach(() => {
    for (const key in initialState) state[key] = initialState[key]
    state.cart = JSON.parse(JSON.stringify(initialState.cart))
  })

  afterEach(() => {
    jest.resetAllMocks()
    jest.restoreAllMocks()
  })

  describe('getters', () => {
    describe('nbItemsInCart', () => {
      test('reflects the right number of items', () => {
        state.cart.totalItems = 12
        expect(getters.nbItemsInCart(state)).toEqual(12)
      })
    })
  })

  describe('mutations', () => {
    describe('SET_CART_ITEMS', () => {
      test('sets the cart items', () => {
        mutations.SET_CART_ITEMS(state, ['one', 'two'])
        expect(state.cart.items[0]).toBe('one')
      })
    })
    describe('CLEAR_CART', () => {
      test('reinitializes the cart', () => {
        mutations.CLEAR_CART(state)
        expect(state.cart).toEqual(initialState.cart)
      })
    })
    describe('SET_ITEMS_COUNT', () => {
      test('sets the cart total items count', () => {
        mutations.SET_ITEMS_COUNT(state, 23)
        expect(state.cart.totalItems).toEqual(23)
      })
    })
    describe('SELECT_PRODUCT', () => {
      test('sets the selected product', () => {
        mutations.SELECT_PRODUCT(state, product)
        expect(state.selectedProduct).toEqual(product)
      })
    })
    describe('SET_CART_PRICE', () => {
      test('sets the cart total price', () => {
        mutations.SET_CART_PRICE(state, 230)
        expect(state.cart.totalPrice).toEqual(230)
      })
    })
    describe('SET_CART_IS_OPEN', () => {
      test('sets cartIsOpen', () => {
        mutations.SET_CART_IS_OPEN(state, true)
        expect(state.cartIsOpen).toBe(true)
        mutations.SET_CART_IS_OPEN(state, false)
        expect(state.cartIsOpen).toBe(false)
      })
    })
  })

  describe('actions', () => {
    describe('ADD_TO_CART', () => {
      test('calls the right mutations', () => {
        actions.ADD_TO_CART({commit, state}, payload)
        expect(commit).toHaveBeenNthCalledWith(1, 'SET_CART_ITEMS', [product])
        expect(commit).toHaveBeenNthCalledWith(2, 'SET_ITEMS_COUNT', 2)
        expect(commit).toHaveBeenNthCalledWith(3, 'SET_CART_PRICE', 2*7956)
      })
      test('do not call mutations if payload is empty', () => {
        actions.ADD_TO_CART({commit, state}, {})
        expect(commit).not.toHaveBeenCalledWith(1, 'SET_CART_ITEMS', [product])
        expect(commit).not.toHaveBeenCalledWith(2, 'SET_ITEMS_COUNT', 2)
        expect(commit).not.toHaveBeenCalledWith(3, 'SET_CART_PRICE', 2*7956)
      })
    })
    describe('REMOVE_FROM_CART', () => {
      test('calls the right mutations', () => {
        state.cart ={
          items: [{
            title: "Step behind the scenes of Havana's theater",
            price: "10",
            description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
            image: "product_6",
            quantity: 2,
            category: "featured"
          },
          {
            title: "Dance your way into Cuban culture",
            price: "10",
            description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
            image: "product_7",
            quantity: 1,
            category: "featured"
          }],
          totalItems: 2,
          totalPrice: 30
        }
        const expectedCart = {
          title: "Step behind the scenes of Havana's theater",
          price: "10",
          description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
          image: "product_6",
          quantity: 2,
          category: "featured"
        }

        actions.REMOVE_FROM_CART({commit, state}, 1)
        expect(commit).toHaveBeenNthCalledWith(1, 'SET_CART_ITEMS', [expectedCart])
        expect(commit).toHaveBeenNthCalledWith(2, 'SET_ITEMS_COUNT', 1)
        expect(commit).toHaveBeenNthCalledWith(3, 'SET_CART_PRICE', 20)
      })
      test('to not call mutations if not product id', () => {
        const expectedCart = {
          title: "Step behind the scenes of Havana's theater",
          price: "10",
          description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
          image: "product_6",
          quantity: 2,
          category: "featured"
        }

        actions.REMOVE_FROM_CART({commit, state})
        expect(commit).not.toHaveBeenCalledWith(1, 'SET_CART_ITEMS', [expectedCart])
        expect(commit).not.toHaveBeenCalledWith(2, 'SET_ITEMS_COUNT', 1)
        expect(commit).not.toHaveBeenCalledWith(3, 'SET_CART_PRICE', 20)
      })
    })
  })

})
