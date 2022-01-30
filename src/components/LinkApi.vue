<script>
export default {
  name: 'LinkApi',
  methods: {
    goToApi() {
      window.open('https://punkapi.com')
    }
  }
}
</script>

<template>
  <div class="info">
    <span>
      This is a Single-page application that fetch data from
      <b @click="goToApi">https://punkapi.com/</b> and shows some interesting
      information about BrewDog’s DIY Dog beers.
    </span>
  </div>
  <div class="div_img">
    <img src="../../assets/beer.jpg" alt="beer-joke" />
  </div>
</template>

<style lang="scss" scoped>
$link-color: #030e12;
$hover-color: #ffac4a;
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid white;
}

.div_img {
  display: flex;
  justify-content: center;
  align-items: center;
}

b {
  color: $link-color;
  cursor: pointer;
}

b:hover {
  color: white;
  background-color: $hover-color;
}

img {
  width: 100%;
  height: auto;
}
</style>
