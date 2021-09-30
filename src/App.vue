<template>
<div>
  <Header_f />
  <Menu />
</div>
</template>

<script>
import Header_f from './components/Header_f.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Header_f,
    Menu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
