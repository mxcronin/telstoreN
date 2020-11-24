<template>
  <div>
    <!-- {<h1>{{ msg }}</h1>} -->
    <p>PRODUCTS</p>
    <h1>{{ devices[0] }}</h1>
    {{ ip._element[0]._offers }}
    <!-- <li v-for="value in ip" :key="value">
      {{ value }}
    </li> -->
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  async asyncData({ $axios }) {
    const ip = await $axios.$get(
      'https://wsu.epdemos.com/cortex/navigations/telmore?zoom=element:offers'
    )
    return { ip }
  },
  data($) {
    return {
      devices: ['iPhone'],
    }
  },
}
</script>

<style scoped>
.telstore-productlist {
  list-style: none;
}
</style>
