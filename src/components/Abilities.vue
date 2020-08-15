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
                    <th>Button</th>
                    <th>Effect</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(ability, index) in abilities" :key="index">
                    <td>{{ ability.ability.name }}</td>
                    <td>{{ ability.is_hidden }}</td>
                    <td><button @click="getAbilityInfoAsync(ability.ability.name)" class="btn btn-info">See effect</button></td>
                    <td v-if="effects.length > index">{{ effects[index] }}</td>
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
            val: '',
            ans: ''
        }
    },
    methods: {
        getEffectEntry() {
            let entries = this.val.effect_entries;
            let answer = "";
            for(let i = 0; i < entries.length; i++) {
                let x = entries[i].language                
                if (x.name === "en") {
                    // console.log(entries[i])
                    answer = entries[i]["short_effect"];
                    if (!this.effects.includes(answer)){
                        this.effects.push(answer);
                    }
                    
                }
            }
            
        },
        getAbilityInfoAsync(ability) {
            this.pokedex.getAbilityByName(ability).then(response => {
                this.val=response;
            }).then(() => this.getEffectEntry());
            
        }
        
    }
}
</script>

<style>

</style>