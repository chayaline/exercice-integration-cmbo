<template>
  <div class="hello">
    <ProductCard v-for="(product, key) in productsList" :product="product" :key="key"/>
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

</style>
