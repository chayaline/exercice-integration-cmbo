<template>
  <div class="number-items">
    <button class="increment-btn" @click="removeItem"> <img src="@/assets/img/minus-icon.svg"/> </button>
    <p class="count">{{ numberOfItems }}</p>
    <button class="increment-btn" @click="addItem">  <img src="@/assets/img/plus-icon.svg"/> </button>
  </div>
</template>

<script>
export default {
  name: 'numberItems',
  data () {
    return {
      numberOfItems: 1
    }
  },
  methods: {
    addItem () {
      this.numberOfItems += 1
      this.$emit('count-change', this.numberOfItems)
    },
    removeItem () {
      if (this.numberOfItems === 1) return
      this.numberOfItems -= 1
      this.$emit('count-change', this.numberOfItems)
    }
  }
}
</script>

<style lang="scss" scoped>
.number-items {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 6px;
  background-color: $counter-background ;
  color: $black;
  width: 120px;
  border-radius: 3px;

  button, div {
    height: 36px;
    width: 36px;
  }

  .increment-btn {
    background-color: $counter-buttons-bg;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: $grey-light;
      cursor: pointer;
    }
  }

  .count {
    text-align: center;
    font-weight: 500;
    margin: 0;
    width: 36px;
  }
}
</style>
