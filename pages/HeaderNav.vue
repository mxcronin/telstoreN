<template>
  <div class="telstore-nav-container">
    <ul class="telstore-nav">
      <li>
        <span class="logo"><img src="../assets/img/logo.png" alt="" /></span>
      </li>
      <!-- <li>
        <NuxtLink to="/productdetails">Product Details placeholder</NuxtLink>
      </li>
      <li><NuxtLink to="/home">Home</NuxtLink></li>
      <li><NuxtLink to="/productlist">Product</NuxtLink></li> -->
    </ul>
    <ul class="telstore-nav">
      <li
        v-for="item in categoryList"
        :key="item.displayName"
        class="telstore-list-item"
      >
        {{ item.displayName }}
      </li>
    </ul>
  </div>
</template>

<script>
const zoom = [
  'navigations:element',
  'navigations:element:child',
  'navigations:element:child:child',
  'navigations:element:child:child:child',
  'navigations:element:child:child:child:child',
]

const Config = {
  cortexApi: {
    path: 'https://wsu.epdemos.com/cortex',
    scope: 'telmore',
    pathForProxy: '',
    reqTimeout: '30000',
  },
}

export default {
  name: 'HeaderNav',
  async asyncData({ $axios }) {
    const categories = await $axios.$get(
      `${Config.cortexApi.path}/?zoom=${zoom.join(',')}`
    )
    return { categories }
  },
  data() {
    return {
      cats: [],
      displayName: '',
      name: '',
    }
  },
  computed: {
    categoryList() {
      if (this.categories !== undefined)
        return (
          this.categories._navigations[0]._element.map((e) =>
            this.parseCategory(e)
          ) || []
        )
    },
  },
  methods: {
    parseCategory(e) {
      return {
        name: e.name,
        displayName: e['display-name'],
      }
    },
  },
}
</script>

<style scoped>
.telstore-nav {
  list-style: none;
}

li {
  float: left;
}

li a {
  display: block;
  text-align: center;
  padding: 16px;
  text-decoration: none;
  color: black;
}

/* li a:hover {
  background-color: #111111;
} */

.telstore-nav-container {
  position: absolute;
  top: 0%;
}

.logo img {
  max-width: 200px;
}
</style>
