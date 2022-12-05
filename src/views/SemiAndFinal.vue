<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Semifinais</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <match-list :matches=semis key="round-semis" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1>3 Lugar e Final</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <match-list :matches=finals key="round-finals" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import MatchList from '../components/MatchList';

  export default {
    name: 'SemiAndFinal',
    components: { MatchList },
    data: () => {
      return {
        semis: [],
        finals: []
      }
    },
    mounted(){
      fetch('/data/semi-final.json')
        .then(res => res.json())
        .then(json => {
          this.semis = json.semiMatches;
          this.finals = json.finalsMatches;
        })
        .catch(rej => console.error(rej));
    }
  }
</script>

<style scoped>
h1 { text-align: center; }
</style>
