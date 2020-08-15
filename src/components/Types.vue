<template>
  <div>
      <table class="table">
          <thead>
              <tr>
                  <th>Primary Type</th>
                  <th>Secondary Type</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td :class="type1">{{ type1 }}</td>
                  <td v-if="type2" :class="type2">{{ type2 }}</td>
                  <td v-else></td>
              </tr>
          </tbody>
      </table>
      
  </div>
</template>

<script>
export default {
    name: "Types",
    props: ["types"],
    computed: {
        type1: function() {
            return this.types[0].type.name
        },
        type2: function() { 
            return this.types[1] !== undefined ? this.types[1].type.name : ""
        }
    }
}
</script>

<style scoped>
.grass {
    background-color: #78C850;
}
.fire {
    background-color: #F08030;
}
.water {
    background-color: #6890F0;
}
.bug {
    background-color: #A8B820;
}
.normal {
    background-color: #A8A878;
}
.poison {
    background-color: #A040A0;
}
.electric {
    background-color: #F8D030;
}
.ground {
    background-color: #E0C068;
}
.fairy {
    background-color: #EE99AC;
}
.fighting {
    background-color: #C03028;
}
.psychic {
    background-color: #F85888;
}
.rock {
    background-color: #B8A038;
}
.ghost {
    background-color: #705898;
}
.ice {
    background-color: #98D8D8;
}
.dragon {
    background-color: #7038F8;
}
.dark {
    background-color: #775544;
}
.steel {
    background-color: #AAAABB;
}
</style>