<template>
  <div class="container">
    <form class="form-inline justify-content-center">
      <input class="form-control" type="text" v-model="pokemonName" list="pokelist">
      <datalist id="pokelist">
        <option v-for="name in pokemonList" :key="name" :value="name">{{ name }}</option>
      </datalist>
      <button class="btn btn-success" @click="onClick">Search Pokemon</button>
    </form>
    
    
    <div v-if="valid_pokemon">
      
      <img :src="pokemon.sprites.front_default" alt=""><br>
      <Basics :pokemon="pokemon" />
      <Stats :stats="pokemon.stats" />
      <Abilities :abilities="pokemon.abilities" :pokedex="Pokedex" :effects="effects" />
      <Types :types="pokemon.types" />
      <Moves :moves="pokemon.moves" :pokedex="Pokedex" />
    </div>
    <h3 v-else>Please enter a valid pokemon</h3>
    
    
    
  </div>
</template>

<script>
const Pokedex = require('pokeapi-js-wrapper')
const P = new Pokedex.Pokedex();
import Basics from './Basics'
import Abilities from './Abilities'
import Stats from './Stats'
import Types from './Types'
import Moves from './Moves'
import { pokelist } from '../pokemonList'
export default {
  name: 'HelloWorld',
  components: {
    Basics,
    Abilities,
    Stats,
    Types,
    Moves
  },
  data() {
    return {
      pokemonName: '',
      pokemon: '',
      valid_pokemon: false,
      Pokedex: P,
      effects: [],
      pokemonList: pokelist
    }
  },
  methods: {
    onClick(e) {
      e.preventDefault();
      P.getPokemonByName(this.pokemonName.toLowerCase()).then(response => {
        this.pokemon = response,
        this.valid_pokemon = true;
        this.effects = [];
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
img {
  height: 100px;
  width: 100px;
}
</style>
