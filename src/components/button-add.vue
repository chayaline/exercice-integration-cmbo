<template>
  <button class="btn" type="button">
    Add to Cart
  </button>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.btn {
  background-color: $yellow;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 22px 45px;
  font-size: 16px;
  color: $white;
  border: none;
  border-radius: 3px;
  padding: 15px 19px;
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
</style>
