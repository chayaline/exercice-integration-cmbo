<template>
  <div class="cart-row">
    <div class="cart-row--header">
      <p class="item-title">{{ item.title }}</p>
      <div class="divider"/>
      <button class="delete-button" @click="removeItem"><img src="@/assets/img/trash-icon.svg"/></button>
    </div>
    <div class="cart-row--prices">
      <p class="detail">{{ item.quantity }} x {{ item.price }}$</p>
      <p class="total">{{ formatPrice(totalPrice) }}$</p>
      <div class="spacer"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { formatPrice } from '@/utils/helpers'

export default {
  name: 'cartRow',
  props: {
    item: {
      type: Object,
      required: true
    },
    itemId: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState({
      cartIsOpen: (state) => state.cartIsOpen,
      cartItems: (state) => state.cart.items
    }),
    totalPrice () {
      return this.item.quantity * parseFloat(this.item.price.replace(/,/g, ''))
    }
  },
  methods: {
    ...mapActions([
      'REMOVE_FROM_CART'
    ]),
    removeItem () {
      this.REMOVE_FROM_CART(this.itemId)
    },
    formatPrice
  }
}
</script>

<style lang="scss" scoped>
.cart-row {
  display: flex;
  flex-direction: column;

  &--header {
    display: flex;
    flex-direction: row;
    align-items: center;

    .item-title {
      font-weight: 500;
      color: $grey-mid;
      text-align: left;
    }

    .divider {
      border: 1px solid #FEBD171A;
      flex-grow: 1;
      margin: 0 20px;
    }

    .delete-button {
      border: none;
      background: $white;
      border-radius: 16px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  &--prices {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    p {
      font-weight: 500;
      width: 124px;
      margin-top: 0;
    }

    .detail {
      text-align: left;
      color: $grey-light;
    }

    .total {
      text-align: right;
      margin-right: 16px;
    }

    .spacer {
      width: 99px;
    }
  }
}
</style>
