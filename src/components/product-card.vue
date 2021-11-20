<template>
  <div class="product-card">
    <img :src="productImage"/>
    <div class="product-card--header">
      <span class="title" v-if="productShortTitle">{{ productShortTitle }}</span>
      <span class="price">{{ product.price }}$</span>
    </div>
    <div class="divider"/>
    <p class="product-card--description">{{ product.title }}</p>
  </div>
</template>

<script>
import { productImage } from '@/utils/helpers'

export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  computed: {
    productImage,
    productShortTitle () {
      return this.product.title.split(' ').slice(0, 2).join(' ')
    }
  }
}
</script>

<style scoped lang="scss">
.product-card {
  width: 217px;
  display: flex;
  flex-direction: column;
  margin: 0 .5em;

  img {
    filter: brightness(95%);
  }

  &--header {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 500;
    justify-content: space-between;
    padding: 10px 0;

    .price {
      color: $yellow;
    }
  }

  .divider {
    width: 100%;
    height: 5px;
    background-color: $yellow-10a;
  }

  &--description {
    text-align: left;
    color: $grey-mid;
    font-weight: 400;
    margin: 10px 0;
  }

  &:hover {
    cursor: pointer;
    img {
      filter: brightness(100%)
    }
    .title, .price {
      font-weight: 900;
    }
    .divider {
      background-color: $yellow-30a;
    }
  }
}
</style>
