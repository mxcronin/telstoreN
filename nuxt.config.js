export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'telstoreN',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    //'@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    //'@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    //'@nuxtjs/axios',
    '@nuxtjs/apollo',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.de)v/config-axios
  axios: {
    credentials: true,
    //baseURL: 'https://wsu.epdemos.com/cortex',
    // requestInterceptor: (config, { store }) => {
    //   config.headers.common['Bearer'] = '292616c2-d352-4f41-b005-0b538aea1152'
    //   store.state.user.headers.access_token
    //   return config
    // },
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:4000',
      },
    },
  },
  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
