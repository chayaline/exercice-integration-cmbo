<template>
  <div class="cart-details">
    <p v-if="cartItems.length === 0">No products in the cart</p>
    <div class="rows">
      <CartRow
        v-for="(item, key) in cartItems"
        :key="key"
        :item="item"
        :itemId="key"/>
    </div>
      <div class="divider"/>
      <div class="actions">
        <p class="total-label">TOTAL</p>
        <p class="total-price"> {{ formatPrice(cartTotalPrice) }}$</p>
        <button class="validate-btn" @click="validateCart">Validate</button>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import CartRow from '@/components/cart-row'
import { formatPrice } from '@/utils/helpers'

export default {
  name: 'cartDetails',
  components: {
    CartRow
  },
  computed: {
    ...mapState({
      cartIsOpen: (state) => state.cartIsOpen,
      cartItems: (state) => state.cart.items,
      cartTotalPrice: (state) => state.cart.totalPrice
    })
  },
  methods: {
    ...mapMutations([
      'CLEAR_CART',
      'SET_CART_IS_OPEN'
    ]),
    formatPrice,
    async validateCart () {
      await this.CLEAR_CART()
      this.SET_CART_IS_OPEN(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-details {
  position: fixed;
  top: 80px;
  right: 0;
  width: 720px;
  height: auto;
  background-color: $white;
  z-index: 4;
  max-height: 80vh;
  overflow-y: auto;
  padding: 20px;
}

.divider {
  border: 3px solid #FEBD171A;
  margin-top: 24px;
}

.actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background-color: $white;

  p {
    width: 124px;
    text-align: left;
  }

  .total-label {
    font-weight: 500;
  }

  .total-price {
    color: $yellow;
    font-weight: 700;
    text-align: right;
    margin-right: 16px;
  }

  .validate-btn {
    background-color: $yellow;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 16px;
    color: $white;
    border: none;
    border-radius: 3px;
    padding: 6px 20px;
    font-weight: 500;

    &:hover {
      background-color: $yellow-dark;
      box-shadow: $box-shadow;
      cursor: pointer;
    }

    &:active {
      background-color: $yellow-dark;
    }
  }
}

@media (max-width: 425px) {
  .cart-details {
    max-width: 80%;
  }
}

</style>
