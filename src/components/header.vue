<template>
  <div class="header">
    <router-link to="/">
      <img class="logo" src="@/assets/img/logo-dewalt.svg"/>
    </router-link>
    <Cart/>
    <div v-if="cartIsOpen" class="overlay"/>
    <transition name="slide">
      <CartDetails v-if="cartIsOpen"/>
    </transition>
  </div>
</template>

<script>
import Cart from '@/components/cart'
import CartDetails from '@/components/cart-details'
import { mapState } from 'vuex'

export default {
  components: {
    Cart,
    CartDetails
  },
  computed: {
    ...mapState({
      cartIsOpen: (state) => state.cartIsOpen
    })
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: $box-shadow;
  position: fixed;
  top: 0;
  left: 0;
  background-color: $white;
  z-index: 1;

  img {
    margin: 21px 20px;
  }
}

@media (max-width: 375px) {
  .logo {
    width: 100px;
  }
}

@media (max-width: 425px) {
  .logo {
    width: 120px;
  }
}
</style>
