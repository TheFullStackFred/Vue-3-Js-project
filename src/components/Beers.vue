<script>
export default {
  name: 'AllBeers',
  data() {
    return {
      heading: 'List of beer',
      favorite: ''
    }
  },
  computed: {
    beers() {
      return this.$store.state.beers
    },
    isBeersLoading() {
      return this.$store.state.isLoading
    }
  },
  created() {
    this.$store.dispatch('getBeers')
  },
  methods: {
    goToBeer(id) {
      this.$router.push('/beerview/' + id)
    }
  }
}
</script>

<template>
  <h2>
    <u>{{ heading }}</u>
  </h2>
  <div v-if="isBeersLoading">Loading beers...</div>
  <div v-else-if="beers.length === 0">No beers...</div>
  <div class="div1" v-else v-for="beer in beers" :key="beer.id">
    <ul>
      <li @click="goToBeer(beer.id)">{{ beer.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
li {
  cursor: pointer;
  text-decoration-line: underline;
}

li:hover {
  color: white;
}

.div1:hover {
  background-color: #ffac4a;
}
</style>
