<template>
  <div>ProductList</div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      prices: [],
      cats: [],
    }
  },
}
</script>

<style scoped>
.telstore-productlist {
  list-style: none;
}
.telstore-list-item {
  float: right;
  margin: 30px;
  height: 200px;
}
.container {
  border: 1px solid #ccc;
  height: 300px;
  width: 200px;
}

.product-img img {
  width: 100px;
}
</style>
