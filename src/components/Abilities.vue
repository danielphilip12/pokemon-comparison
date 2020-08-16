<template>
    <!-- <ul class="list-group">
        <li v-for="(ability, index) in abilities" :key="index" class="list-group-item">{{ ability.ability.name }}</li>
    </ul> -->
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Hidden</th>
                    <!-- <th>Button</th>
                    <th>Effect</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="(ability, index) in abilities" :key="index">
                    <td>{{ ability.ability.name }}</td>
                    <td>{{ ability.is_hidden }}</td>
                    <!-- <td><button @click="getAbilityInfoAsync(ability.ability.name)" class="btn btn-info">See effect</button></td>
                    <td v-if="effects.length > index">{{ effects[index] }}</td> -->
                    {{ getAbilityInfo(ability.ability.name) }}
                    <p>Effect {{ ability_effect }}</p>
                </tr>
            </tbody>
        </table>
        
    </div>
    
</template>

<script>
export default {
    name: "Abilities",
    props: ["abilities", "pokedex", "effects"],
    data() {
        return {
            ability_effect: ''
        }
    },
    methods: {
        getEffectEntry(response) {
            let entries = response.effect_entries;
            let answer = "";
            for(let i = 0; i < entries.length; i++) {
                let x = entries[i].language                
                if (x.name === "en") {
                    // console.log(entries[i])
                    answer = entries[i]["short_effect"];
                    if (!this.effects.includes(answer)){
                        this.effects.push(answer);
                        return answer
                    }
                    
                }
            }
            
        },
        getAbilityInfoAsync(ability) {
            return this.pokedex.getAbilityByName(ability)
            
        },

        getAbilityInfo(ability) {
            return this.getAbilityInfoAsync(ability).then(response => {
                console.log(response);
                return this.getEffectEntry(response)
            }).then(data => {
                console.log(data);
                if(data !== undefined) {
                    this.ability_effect = data;
                }
            })
        }

        
        
    }
}
</script>

<style>

</style>