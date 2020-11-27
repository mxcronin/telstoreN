<script src="../components/productList.js"></script>

<template>
  <div>
    <!-- {<h1>{{ msg }}</h1>} -->
    <h1>{{ categoriesName }}</h1>
    <!-- {{ categoryDetails }} -->
    <ul class="telstore-productlist">
      <li
        v-for="device in categoriesOffers"
        :key="device"
        class="telstore-list-item"
      >
        <div class="container">
          <span class="product-img"
            ><img src="../assets/img/apple-iphone-12-64gb-bla.jpg" alt=""
          /></span>
          {{ device }}
        </div>
      </li>
    </ul>
    <span v-for="device in productPrices" :key="device">
      Price: {{ device }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'ProductList',

  async asyncData({ $axios }) {
    const cats = await $axios.$get(
      'https://wsu.epdemos.com/cortex/navigations/telmore/mrsxm2ldmvzq=?zoom=offers:element:definition,offers:element:pricerange'
    )
    const prices = await $axios.$get(
      'https://wsu.epdemos.com/cortex/offers/telmore/qgqvbj3tgiyha3dvom=?zoom=definition,pricerange'
    )
    return { cats, prices }
  },
  data() {
    return {
      prices: [],
      cats: [],
    }
  },
  computed: {
    productPrices() {
      // if (this.prices !== undefined)
      //   return this.prices._pricerange[0]['list-price-range']['from-price'][0]
      //     .display
      let prices = []
      if (this.cats !== undefined) {
        const el = this.cats['_offers'][0]['_element']
        prices = el.map(
          (item) =>
            item['_pricerange'][0]['list-price-range']['from-price'][0].amount
        )
      }
      return prices
    },
    categoriesName() {
      if (this.cats !== undefined) return this.cats['name']
    },
    categoriesList() {
      if (this.cats !== undefined) return this.cats['name']
    },
    categoriesOffers() {
      let def = []
      if (this.cats !== undefined) {
        const el = this.cats['_offers'][0]['_element']
        def = el.map((item) => item['_definition'][0]['details'][0])
      }
      return def
    },
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
