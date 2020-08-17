<template>
  <span>
      <td class="text-align-center">{{ accuracy }}</td>
      <td class="text-align-center">{{ pp }}</td>
      <td class="text-align-center">{{ power }}</td>
  </span>
</template>

<script>
export default {
    name: "Move",
    props: ["move", "pokedex"],
    data() {
      return {
          accuracy: '',
          pp: '',
          power: ''
      }  
    },
    methods: {
        getMoveInfoAsync(move) {
            return this.pokedex.getMoveByName(move)
        },
        getMoveInfo(move) {
            return this.getMoveInfoAsync(move).then(response => {
                if (response !== undefined) {
                    
                    this.accuracy = response.accuracy ? response.accuracy : "No data";
                    this.pp = response.pp ? response.pp : "No data";
                    this.power = response.power ? response.power : "No data";
                }
            })
        }
    },
    mounted: function() {
        this.getMoveInfo(this.move)
    }
}
</script>

<style>

</style>