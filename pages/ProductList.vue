<template>
  <div>
    <!-- {<h1>{{ msg }}</h1>} -->
    <p>PRODUCTS</p>
    <h1>Phones</h1>
    {{ categoryDetails }}
    <ul class="telstore-productlist">
      <li
        v-for="device in deviceList"
        :key="device.name"
        class="telstore-list-item"
      >
        <div class="container">
          {{ device.name }}
        </div>
      </li>
    </ul>
    <!-- <ul>
      <li v-for="item in np" :key="item">
        <div>
          {{ item }}
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  async asyncData({ $axios }) {
    const categoryDetails = await $axios.$get(
      'https://wsu.epdemos.com/cortex/navigations/telmore/mrsxm2ldmvzq=?zoom=offers:element:definition,offers:element:pricerange'
    )
    const np = await $axios.$get(
      'https://wsu.epdemos.com/cortex/navigations/telmore?zoom=element'
    )
    const prices = await $axios.$get(
      ' offers/telmore/qgqvbj3tgiyha3dvom=?zoom=definition,pricerange'
    )
    return { categoryDetails, np, prices }
  },
  data($) {
    return {
      deviceList: [
        { name: 'iPhone 11' },
        { name: 'iPhone 12' },
        { name: 'iPhone 11 pro' },
        { name: 'iPhone 12 pro' },
      ],
    }
  },
  computed: {
    productdetails() {
      return this.np || {}
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
}
.container {
  border: 1px solid #ccc;
  height: 200px;
  width: 200px;
}
</style>
