<template>
  <div>
    <div class="form-inline justify-content-center">
      <input class="form-control" type="text" v-model="pokemonName">
      <button class="btn btn-success" @click="onClick">Search Pokemon</button>
    </div>
    
    
    <div v-if="valid_pokemon">
      <img :src="pokemon.sprites.front_default" alt=""><br>
      <Basics :pokemon="pokemon" />
      <Stats :stats="pokemon.stats" />
      <Abilities :abilities="pokemon.abilities" :pokedex="Pokedex" :effects="effects" />
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
export default {
  name: 'HelloWorld',
  components: {
    Basics,
    Abilities,
    Stats
  },
  data() {
    return {
      pokemonName: '',
      pokemon: '',
      valid_pokemon: false,
      Pokedex: P,
      effects: []
    }
  },
  methods: {
    onClick() {
      P.getPokemonByName(this.pokemonName).then(response => {
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
</style>
