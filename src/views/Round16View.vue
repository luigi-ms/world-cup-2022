<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Oitavas de final</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <match-list :matches=sixteens key="round-sixteens" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import MatchList from '../components/MatchList';
  import sixteens from '../phases/sixteens.js';

  export default {
    name: 'RoundOf16',
    components: { MatchList },
    data: () => {
      return {
        sixteens: sixteens.matches
      }
    }
  }
</script>

<style scoped>
h1 { text-align: center; }
</style>
