<script>
export default {
  name: 'SingleBeer',
  data() {
    return {
      singleBeerInfo: [],
      isBeerLoading: false
    }
  },
  computed: {
    beer() {
      return this.$store.state.beer
    }
  },
  created() {
    this.$store.dispatch('singleBeer', this.$route.params.id)
  },
  watch: {
    '$store.state.beer': function () {
      console.log('Watch beer', this.$store.state.beer)
      this.singleBeerInfo = this.$store.state.beer
    },
    '$store.state.isLoading': function () {
      console.log('Watch isLoading', this.$store.state.isLoading)
      this.isBeerLoading = this.$store.state.isLoading
    }
  },
  props: {
    heading: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <h2>
    <u>{{ heading }}</u>
  </h2>
  <div v-if="isBeerLoading">Loading beer...</div>
  <div v-else-if="singleBeerInfo.length === 0">No beer...</div>
  <div v-else v-for="singleBeer in singleBeerInfo" :key="singleBeer.id">
    <ul>
      <li><b>Name:</b> {{ singleBeer.name }}</li>
      <li><b>Tagline:</b> {{ singleBeer.tagline }}</li>
      <li><b>Brewers tips:</b> {{ singleBeer.brewers_tips }}</li>
      <li><b>Descrition:</b> {{ singleBeer.description }}</li>
      <h4><u>Food-Pairing</u></h4>
      <li v-for="food in singleBeer.food_pairing" :key="food.id">{{ food }}</li>
    </ul>
    <img :src="singleBeer.image_url" />
  </div>
</template>

<style scoped>
img {
  width: 150px;
  transform: rotate(-25deg);
  margin-left: 20rem;
  margin-bottom: 12px;
}
</style>
