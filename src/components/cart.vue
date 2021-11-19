<template>
  <div class="cart">
    <img class="cart--icon" src="@/assets/img/icon-cart.svg"/>
    <p class="cart--label"> Shopping cart </p>
    <div class="cart--count">0</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 22px 45px;

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
}
</style>
