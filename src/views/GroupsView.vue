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
          value=Number(roundPage)
          :length=Number(3)
          circle></v-pagination>
      </v-col>
    </v-row>
    <match-list :whichShow=roundAlias />
  </v-container>
</template>

<script>
  import MatchList from '../components/MatchList.vue'
  
  export default {
    name: 'GroupsView',
    components: { MatchList },
    data: () => {
      return {
        roundPage: 0,
        roundAlias: ""
      }
    },
    watch: {
      roundPage(){
        console.log(this.roundPage);
        if(this.roundPage === 1){
          this.roundAlias = "group-one";
        }else if(this.roundPage === 2){
          this.roundAlias = "group-two";
        }else if(this.roundPage === 3){
          this.roundAlias = "group-three";
        }
      }
    },
    mounted(){
      this.roundAlias = "group-one";
      this.roundPage = 1;
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
