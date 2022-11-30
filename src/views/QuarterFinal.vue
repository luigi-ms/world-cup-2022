<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Quartas de final</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <match-list :matches=quarters key="round-quarters" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import MatchList from '../components/MatchList';
  import quarter from '../phases/quarter.js';

  export default {
    name: 'QuarterFinalView',
    components: { MatchList },
    data: () => {
      return {
        quarters: quarter.matches
      }
    }
  }
</script>

<style scoped>
h1 { text-align: center; }
</style>
