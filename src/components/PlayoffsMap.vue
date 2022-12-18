<template>
  <v-container id="phases">
    <v-row>
      <v-col
        cols="12" 
        align="center">
        <h3>Oitavas de final</h3>
      </v-col>
      <v-col
        v-for="match in sixteens" 
        :key="match.key" 
        class="playoffMatch" 
        cols="3">
        <mini-match 
          :countryLeft="match.cLeft" 
          :countryRight="match.cRight" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col 
        cols="12" 
        align="center">
        <h3>Quartas de final</h3>
      </v-col>
      <v-col 
        v-for="match in quarters"
        :key="match.key"
        class="playoffMatch" 
        cols="3">
        <mini-match 
          :countryLeft="match.cLeft" 
          :countryRight="match.cRight" />
      </v-col> 
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col 
        cols="12" 
        align="center">
        <h3>Semifinais</h3>
      </v-col>
      <v-col
        v-for="match in semis"
        :key="match.key"
        class="playoffMatch" 
        cols="6">
        <mini-match 
          :countryLeft="match.cLeft" 
          :countryRight="match.cRight" />
      </v-col> 
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col 
        cols="12" 
        align="center">
        <h3>Final</h3>
      </v-col>
      <v-col
        class="playoffMatch" 
        cols="12">
        <mini-match
          :countryLeft="finals.cLeft" 
          :countryRight="finals.cRight" />
      </v-col> 
    </v-row>
    <v-row>
      <v-col cols="12" align="center">
        <winner-box name="Argentina" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import MiniMatch from './MiniMatch.vue';
  import WinnerBox from './WinnerBox.vue';

  export default {
    name: "PlayoffsMap",
    components: { MiniMatch, WinnerBox },
    data: () => {
      return { }
    },
    props: {
      sixteens: {
        type: Array,
        default: () => []
      },
      quarters: {
        type: Array,
        default: () => []
      },
      semis: {
        type: Array,
        default: () => []
      },
      finals: {
        type: Object,
        default: () => { return {} }
      },
    }
  }
</script>

<style scoped>
.playoffMatch {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
