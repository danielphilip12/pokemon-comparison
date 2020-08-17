<template>
  <td>{{ ability_effect }}</td>
</template>

<script>
export default {
    name: 'Ability',
    props: ['ability', 'pokedex'],
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
                    return answer
                    
                }
            }
            
        },
        getAbilityInfoAsync(ability) {
            return this.pokedex.getAbilityByName(ability)
            
        },

        getAbilityInfo(ability) {
            return this.getAbilityInfoAsync(ability).then(response => {
                return this.getEffectEntry(response)
            }).then(data => {
                
                if(data !== undefined) {
                    this.ability_effect = data;
                }
            })
        }
    },
    mounted: function() {
      this.getAbilityInfo(this.ability)
    }
}
</script>

<style>

</style>