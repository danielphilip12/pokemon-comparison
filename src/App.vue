<template>
  <div id="app">
    <div class="jumbotron">
      <h1 class="display-2">Pokemon Comparer</h1>
      <p class="text-muted">Compare Pokemon up to Ultra Sun and Moon</p>
    </div>
    
    <div class="container">
      <div class="row">
        <div class="col-6">
          <HelloWorld />
        </div>
        <div class="vertical"></div>
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
.vertical { 
    border-left: 1px solid rgb(187, 185, 185); 
    height: 100%; 
    position: absolute; 
    left: 50%; 
} 
</style>
