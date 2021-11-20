<template>
  <div class="products-details">
    <div class="details">
      <h1 class="title">{{ product.title }}</h1>
      <p class="price"> {{ product.price }}$</p>
      <div class="divider"/>
      <p class="description"> {{ product.description }}</p>
      <p class="conditions">Prices valid till 31.10.2019, yearly adjustment for conversion rate to EURO</p>
      <div class="actions"></div>
    </div>
    <img width="452px" :src="productImage()"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { productImage } from '@/utils/helpers'

export default {
  name: 'ProductDetails',
  computed: {
    ...mapState({
      product: (state) => state.selectedProduct
    })
  },
  methods: {
    productImage
  }
}
</script>

<style scoped lang="scss">
.products-details {
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding: 52px;
}

.details {
  max-width: 680px;
  margin-right: 23px;
  text-align: left;

  .title {
    font-size: 48px;
    color: $grey-dark;
    font-weight: 900;
  }

  .price {
    font-size: 24px;
    color: $yellow;
    font-weight: 900;
  }

  .divider {
    width: 100%;
    height: 10px;
    background-color: $yellow-10a;
    margin-bottom: 31px;
    margin-top: 21px;
  }

  .description {
    font-size: 16px;
    color: $grey-mid;
    font-weight: 400;
    margin-bottom: 31px;
  }

  .conditions {
    font-size: 16px;
    font-weight: 500;
    color: $grey-light;
    margin-bottom: 31px;
  }
}

img {
  flex-basis: 1;
}
</style>
