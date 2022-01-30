import { createStore } from 'vuex'
import axios from 'axios'

const state = {
  beers: [],
  beer: [],
  isLoading: false
}

const mutations = {
  setBeers(state, beers) {
    state.beers = beers
  },
  setBeer(state, beer) {
    state.beer = beer
  },
  isLoading(state, isLoading) {
    state.isLoading = isLoading
  }
}

const actions = {
  async getBeers(context) {
    context.commit('isLoading', true)

    const response = await axios.get('https://api.punkapi.com/v2/beers')
    context.commit('setBeers', response.data)

    context.commit('isLoading', false)
  },
  async singleBeer(context, id) {
    context.commit('isLoading', true)

    const response = await axios.get('https://api.punkapi.com/v2/beers/' + id)
    context.commit('setBeer', response.data)

    context.commit('isLoading', false)
  }
}

export default createStore({ mutations, actions, state, strict: true })
