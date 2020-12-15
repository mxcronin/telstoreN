const axios = require('axios')

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

export const state = () => ({
  categories: [],
})

export const mutations = {
  SET_CATEGORIES: (state, payload) => {
    state.categories = ['1', '2', '3']
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    const categories = await $axios.$get(
      'https://jsonplaceholder.typicode.com/todos/1'
    )
    console.log('cats', categories)
    commit('SET_CATEGORIES', categories)
  },
}
