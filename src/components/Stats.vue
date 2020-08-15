<template>
  <div>
      <table class="table">
          <thead>
              <tr>
                  <th>Stat</th>
                  <th>Base Stat</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(stat, index) in stats" :key="index">
                  <td>{{ stat.stat.name }}</td>
                  <td>{{ stat.base_stat }}</td>
              </tr>
          </tbody>
      </table>
      
  </div>
</template>

<script>
export default {
    name: "Stats",
    props: ["stats"]
}
</script>

<style>

</style>