<template>
  <table class="table table-striped">
      <thead>
          <tr>
              <th>Name</th>
              <th>Accuracy</th>
              <th>PP</th>
              <th>Power</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="(move, index) in moves" :key="index">
              <td>{{ move.move.name }}</td>
              <Move :move="move.move.name" :pokedex="pokedex" />
          </tr>
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
    props: ["moves", "pokedex"]
}
</script>

<style>

</style>