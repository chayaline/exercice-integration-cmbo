<template>
  <div class="home">
    <ProductList/>
  </div>
</template>

<script>

import ProductList from '@/components/product-list.vue'

export default {
  name: 'Home',
  components: {
    ProductList
  }
}
</script>
