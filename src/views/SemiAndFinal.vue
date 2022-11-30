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
  import { semis, finals } from '../phases/semi-final.js';

  export default {
    name: 'SemiAndFinal',
    components: { MatchList },
    data: () => {
      return {
        semis: semis.matches,
        finals: finals.matches
      }
    }
  }
</script>

<style scoped>
</style>
