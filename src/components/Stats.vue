<template>
  <div>
      <h1 class="h2 text-center">Base Stats</h1>
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
              <tr>
                  <td>Total</td>
                  <td id="totalStat">{{ statTotal }}</td>

              </tr>
          </tbody>
      </table>
      
  </div>
</template>

<script>
export default {
    name: "Stats",
    props: ["stats"],
    computed: {
        statTotal: function() {
            let total = 0;
            for(let i = 0; i < this.stats.length; i++) {
                total += this.stats[i].base_stat
            }
            return total;
        }
    }
}
</script>

<style scoped>
#totalStat {
    font-weight: bold;
}
</style>