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
        v-for="(item, i) in categories"
        :key="i"
        :name="item.name"
        class="telstore-list-item"
      ></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HeadererrNav',

  computed: {
    ...mapState(['categories']),
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
