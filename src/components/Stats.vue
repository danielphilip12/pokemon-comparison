<template>
  <div>
      <table class="table">
          <thead>
              <tr>
                  <th>Stat</th>
                  <th>Base Stat</th>
                  <th>Bar</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(stat, index) in stats" :key="index">
                  <td>{{ stat.stat.name }}</td>
                  <td>{{ stat.base_stat }}</td>
                  <td>
                    <div class="progress">
                        <div class="progress-bar" :style="{width: stat.base_stat + 'px', minWidth: '0%', maxWidth: '100%'}"></div>
                    </div>
                  </td>
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