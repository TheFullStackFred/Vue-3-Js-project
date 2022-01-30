<script>
import SingleBeer from '../components/SingleBeer.vue'

export default {
  name: 'BeerView',
  components: {
    SingleBeer
  },
  data() {
    return {
      singleHeading: 'Beer-Info'
    }
  }
}
</script>

<template>
  <SingleBeer :heading="singleHeading" />
</template>
