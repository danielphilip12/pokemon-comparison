<template>
    <!-- <ul class="list-group">
        <li v-for="(ability, index) in abilities" :key="index" class="list-group-item">{{ ability.ability.name }}</li>
    </ul> -->
    <div>
        <h1 class="h2 text-center">Abilities</h1>
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Hidden</th>
                    <th>Effect</th>
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="(ability, index) in abilities" :key="index">
                    <td>{{ ability.ability.name }}</td>
                    <td>{{ ability.is_hidden }}</td>
                    <Ability :ability="ability.ability.name" :pokedex="pokedex" :key="ability.ability.name" />
                    <!-- <td><button @click="getAbilityInfoAsync(ability.ability.name)" class="btn btn-info">See effect</button></td>
                    <td v-if="effects.length > index">{{ effects[index] }}</td> -->
                    
                </tr>
            </tbody>
        </table>
        
    </div>
    
</template>

<script>
import Ability from './Ability'
export default {
    name: "Abilities",
    components: {
        Ability
    },
    props: ["abilities", "pokedex", "effects"]
}
</script>

<style>

</style>