<script>
export default {
  name: 'CustomButton',
  data() {
    return {
      isDisabled: true,
      favoriteBeer: ''
    }
  },
  emits: ['handle-click'],
  methods: {
    sendMsg() {
      this.isDisabled = !this.isDisabled
      this.greeting = `Oh! ${this.favoriteBeer}, so you're that kind of person😂`
      this.$emit('handle-click')
      this.favoriteBeer = ''
    }
  }
}
</script>

<template>
  <input
    class="textInput"
    v-model="favoriteBeer"
    placeholder="What's your favourite beer?"
  />
  <input
    v-if="favoriteBeer"
    @click="sendMsg()"
    class="btn btn-primary btn-sm"
    type="button"
    value="Send"
  />
  <span class="quoteSpan" v-if="!isDisabled">{{ greeting }} </span>
</template>

<style lang="scss" scoped>
$default: 6px;
$default1: 4px;
$default2: 10px;
$default3: 2rem;
$color: #ffe9c9;
$color1: #030e12;
$color2: #ffac4a;

.quoteSpan {
  margin-left: $default2;
  font-weight: bold;
  margin: auto;
}

.textInput {
  margin: 2px auto 2px auto;
  width: 17rem;
}

.btn {
  border-radius: 2rem;
  background-color: $color;
  color: #030e12;
  margin: auto;
  width: 77px;
}
.btn:hover {
  background-color: $color2;
  transform: translateY(3px);
}
</style>
