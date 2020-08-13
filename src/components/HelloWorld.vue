<template>
  <div class="container">
    
    <input type="text" v-model="pokemonName">
    <button @click="onClick">Click Me</button><br>
    
    <div v-if="valid_pokemon">
      <img :src="pokemon.sprites.front_default" alt=""><br>
      <Basics :pokemon="pokemon" />
      <Abilities :abilities="pokemon.abilities" :pokedex="Pokedex" />
    </div>
    
    
    
  </div>
</template>

<script>
const Pokedex = require('pokeapi-js-wrapper')
const P = new Pokedex.Pokedex();
import Basics from './Basics'
import Abilities from './Abilities'
export default {
  name: 'HelloWorld',
  components: {
    Basics,
    Abilities
  },
  data() {
    return {
      pokemonName: '',
      pokemon: '',
      valid_pokemon: false,
      Pokedex: P
    }
  },
  methods: {
    onClick() {
      P.getPokemonByName(this.pokemonName).then(response => {
        this.pokemon = response,
        this.valid_pokemon = true;
      }).catch(() => {
        this.valid_pokemon = false;
      });
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
