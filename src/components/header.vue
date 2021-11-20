<template>
  <div class="header">
    <router-link to="/">
      <img class="logo" src="@/assets/img/logo-dewalt.svg"/>
    </router-link>
    <Cart/>
  </div>
</template>

<script>
import Cart from '@/components/cart'

export default {
  components: {
    Cart
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
  z-index: 2;

  img {
    margin: 21px 20px;
  }
}
</style>
