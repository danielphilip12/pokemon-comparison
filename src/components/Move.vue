<template>
  <tr>
      <td class="text-align-center">{{ move }}</td>
      <td class="text-align-center">{{ level }}</td>
      <td class="text-align-center">{{ accuracy }}</td>
      <td class="text-align-center">{{ pp }}</td>
      <td class="text-align-center">{{ power }}</td>
  </tr>
</template>

<script>
export default {
    name: "Move",
    props: ["move", "pokedex", "level"],
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
                    this.accuracy = response.accuracy ? response.accuracy : "-";
                    this.pp = response.pp ? response.pp : "-";
                    this.power = response.power ? response.power : "-";
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