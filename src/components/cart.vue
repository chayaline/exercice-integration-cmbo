<template>
  <button :class="['cart', { isopen: cartIsOpen } ]" @click="SET_CART_IS_OPEN(!cartIsOpen)">
    <img class="cart--icon" src="@/assets/img/icon-cart.svg"/>
    <p class="cart--label"> Shopping cart </p>
    <div class="cart--count">{{ nbItemsInCart }}</div>
  </button>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      cartIsOpen: (state) => state.cartIsOpen
    }),
    ...mapGetters([
      'nbItemsInCart'
    ])
  },
  methods: {
    ...mapMutations([
      'SET_CART_IS_OPEN'
    ])
  }
}
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 45px;
  z-index: 4;
  border: none;
  background-color: $white;
  height: 80px;

  &.isopen {
    z-index: 5;
  }

  &--icon {
    transition: all 0.1s ease-in-out;
  }

  &--label {
    font-size: 12px;
    color: $grey-light;
    margin: 0 18px 0 16px;
  }

  &--count {
    height: 36px;
    width: 36px;
    border-radius: 100%;
    background-color: $yellow;
    color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    cursor: pointer;

    .cart--icon, .cart--count {
      transform: rotate(25deg);
    }

    .cart--label {
      color: $grey-dark;
    }
  }
}

.cart-details {
  max-height: 80vh;
  z-index: 4;
  width: 730px;
  background-color: $white;
}
</style>
