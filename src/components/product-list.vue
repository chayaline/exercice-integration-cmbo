<template>
  <div class="products-list">
    <h2 class="section-title">Just Booked</h2>
    <div class="products-row">
      <ProductCard v-for="(product, key) in productsList.booked" :product="product" :key="key"/>
    </div>
    <h2 class="section-title"> Featured Experiences </h2>
    <div class="products-row">
      <ProductCard v-for="(product, key) in productsList.featured" :product="product" :key="key"/>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/product-card'
import { mapState } from 'vuex'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  computed: {
    ...mapState({
      productsList: (state) => state.productsList
    })
  }
}
</script>

<style scoped lang="scss">
.products-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 7em;
  width: auto;
}

.section-title {
  font-size: 36px;
  font-weight: 900;
  color: $grey-dark;
  align-self: flex-start;
}

.products-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
}
</style>
