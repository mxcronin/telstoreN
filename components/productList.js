export default {
  async asyncData({ $axios }) {
    const categoryDetails = await $axios.$get(
      'https://wsu.epdemos.com/cortex/navigations/telmore/mrsxm2ldmvzq=?zoom=offers:element:definition,offers:element:pricerange'
    )
    const np = await $axios.$get(
      'https://wsu.epdemos.com/cortex/navigations/telmore?zoom=element'
    )
    const prices = await $axios.$get(
      'https://wsu.epdemos.com/cortex/offers/telmore/qgqvbj3tgiyha3dvom=?zoom=definition,pricerange'
    )
    return { categoryDetails, np, prices }
  },
  data() {
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
    productPrices(data) {
      console.log(data)
      return this.np || {}
    },
  },
}
