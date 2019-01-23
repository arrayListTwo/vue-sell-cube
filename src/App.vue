<template>
  <div id="app">
    <v-header></v-header>
  </div>
</template>

<script type="text/ecmascript-6">
  import VHeader from '@/components/v-header/v-header'

  export default {
    name: 'app',
    components: {
      VHeader
    }
  }
</script>
<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px
</style>
