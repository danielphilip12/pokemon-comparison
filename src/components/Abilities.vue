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
                    <th>More Info</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(ability, index) in abilities" :key="index">
                    <td>{{ ability.ability.name }}</td>
                    <td>{{ ability.is_hidden }}</td>
                    <td><button @click="getAbilityInfo(ability.ability.name)" class="btn btn-info">More info</button></td>
                </tr>
            </tbody>
        </table>
        <p>{{ effect_entry }}</p>
    </div>
    
</template>

<script>
export default {
    name: "Abilities",
    props: ["abilities", "pokedex"],
    data() {
        return {
            ability_info: '',
            effect_entry: ''
        }
    },
    methods: {
        getEffectEntry() {
            let entries = this.ability_info.effect_entries
            for(let i = 0; i < entries.length; i++) {
                let x = entries[i].language                
                if (x.name === "en") {
                    console.log(entries[i])
                    this.effect_entry = entries[i]["short_effect"];
                }
            }
        },
        getAbilityInfo(ability) {
            this.pokedex.getAbilityByName(ability).then(response => {
                console.log(response)
                this.ability_info=response
            }).then(() => {this.getEffectEntry();})
            
        }
        
    }
}
</script>

<style>

</style>