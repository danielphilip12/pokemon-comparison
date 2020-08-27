<template>
    <form class="form-inline justify-content-center">
        <input class="form-control" type="text" v-model="pokemonName" list="pokelist">
        <datalist id="pokelist">
            <option v-for="name in pokemonList" :key="name" :value="name">{{ name }}</option>
        </datalist>
        <button class="btn btn-success" @click.prevent="onClick(pokemonName)">Search Pokemon</button>
    </form>
</template>

<script>
import { pokelist } from '../pokemonList'
export default {
    name: "Search",
    data() {
        return {
            pokemonName: '',
            pokemonList: pokelist
        }
    },
    methods: {
        onClick(pokemon) {
            this.$emit('search-pokemon', pokemon)
        }
    }
}
</script>

<style>

</style>