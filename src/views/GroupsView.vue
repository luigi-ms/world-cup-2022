<template>
  <!-- Usar um pagination e renderizar cada rodada
  isoladamente. Cada rodada tera um array ds partidas
  jogadas.-->
  <v-container>
    <v-row>
      <v-col>
        <h1>Fase de grupos</h1>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col md=2>
        <h3>Rodada:</h3>
      </v-col>
      <v-col md=10 id="roundSelect">
        <v-pagination v-model="roundPage"
          length=3 
          circle></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//  import MatchBox from '../components/Match'

  export default {
    name: 'GroupsView',
    //  components: { MatchBox },
    data: () => {
      return {
        cLeft: { name: "Brasil", goals: 2 },
        cRight: { name: "Servia", goals: 0 },
        dateTime: new Date("2022/11/26 16:00"),
        local: "Lusail",
        roundPage: 1
      }
    }
  }
</script>

<style scoped>
h1 { text-align: center; }

#roundSelect {
  display: flex;
  justify-content: start;
}
</style>
