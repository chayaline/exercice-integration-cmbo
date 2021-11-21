<template>
  <div class="not-found">
    <h1 class="section-title">Page not found</h1>
    <a href="/">See products list</a>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped lang="scss">
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 52px 0;
  width: 100%;
}

.section-title {
  font-size: 36px;
  font-weight: 900;
  color: $grey-dark;
}

a {
  text-decoration: none;
  color: $yellow;
  font-size: 24px;
  font-weight: 500;

  &:hover {
    color: $yellow-dark;
  }
}

</style>
