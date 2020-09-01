<template>
  <table class="table table-striped">
      <thead>
          <tr>
              <th>Name</th>
              <th>Learned at</th>
              <th>Accuracy</th>
              <th>PP</th>
              <th>Power</th>
          </tr>
      </thead>
      <tbody>
          <!-- <tr v-for="(move, index) in moves" :key="index">
              <td>{{ move.move.name }}</td>
              <Move :move="move.move.name" :pokedex="pokedex" />
          </tr> -->
          <Move 
            v-for="move in sorted_moves"
            :key="move.move.name"
            :move="move.move.name"
            :level="move.version_group_details[0].level_learned_at"
            :pokedex="pokedex"
            />
      </tbody>
  </table>
</template>

<script>
import Move from './Move'
export default {
    name: 'Moves',
    components: {
        Move
    },
    props: ["moves", "pokedex"],
    computed: {
        sorted_moves: function() {
            let moves_clone = this.moves
            moves_clone = moves_clone.sort((a, b) => (a.version_group_details[0].level_learned_at > b.version_group_details[0].level_learned_at) ? 1 : -1)
            return moves_clone.filter(move => move.version_group_details[0].level_learned_at > 0)
        }
    }
}
</script>

<style>

</style>