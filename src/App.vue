<template>
  <div id="app">
    <h1>Pokemon Comparer</h1>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <HelloWorld />
        </div>
        <div class="col-6">
          <HelloWorld />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
