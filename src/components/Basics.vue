<template>
  <div>
      <h3>Name: {{ pokemon.name }}</h3>
      <ul>
          <li>ID: {{ pokemon.id }}</li>
          <li>Height: {{ pokemon.height }}</li>
          <li>Weight: {{ pokemon.weight }}</li>
          <li>Base Experience: {{ pokemon.base_experience }}</li>
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