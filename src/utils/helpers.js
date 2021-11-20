function productImage () {
  return require(`../assets/img/${this.product.image}.png`)
}

function formatPrice (value) {
  return value.toLocaleString().replace(/\s+/g, ',')
}

export {
  productImage,
  formatPrice
}
