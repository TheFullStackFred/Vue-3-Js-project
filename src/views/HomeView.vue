<script>
import Beers from '../components/Beers.vue'
import CustomButton from '../components/CustomButton.vue'

export default {
  name: 'HomeView',
  components: {
    Beers,
    CustomButton
  },
  methods: {
    takeCareOfClick() {
      console.log('Custom-event sent 😁')
    }
  }
}
</script>

<template>
  <CustomButton @handle-click="takeCareOfClick" />
  <Beers />
</template>
