<template>
  <div>
      <h3>Name: {{ pokemon.name }}</h3>
      <ul class="list-group">
          <li class="list-group-item">ID: {{ pokemon.id }}</li>
          <li class="list-group-item">Height: {{ pokemon.height }}</li>
          <li class="list-group-item">Weight: {{ pokemon.weight }}</li>
          <li class="list-group-item">Base Experience: {{ pokemon.base_experience }}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: "Basics",
    props: ['pokemon']
}
</script>

<style>

</style>