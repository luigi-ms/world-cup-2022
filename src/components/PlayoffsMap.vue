<template>
  <v-container id="phases">
    <v-row justify="center">Oitavas de final</v-row>
    <v-row align="baseline">
      <v-col class="playoffMatch" cols="3">
        <mini-match 
          countryLeft="A1" 
          countryRight="B2" />
      </v-col>
      <v-col class="playoffMatch" cols="3">
        <mini-match 
          countryLeft="C1" 
          countryRight="D2" />
      </v-col>
      <v-col class="playoffMatch" cols="3">
        <mini-match 
          countryLeft="E1" 
          countryRight="F2" />
      </v-col>
      <v-col class="playoffMatch" cols="3">
        <mini-match 
          countryLeft="G1" 
          countryRight="H2" />
      </v-col>
    </v-row>
    <v-row justify="center">Quartas de final</v-row>
    <v-row>
      <v-col class="playoffMatch" cols="6">
        <mini-match 
          countryLeft="O1" 
          countryRight="O2" />
      </v-col> 
      <v-col class="playoffMatch" cols="6">
        <mini-match 
          countryLeft="O3" 
          countryRight="O4" />
      </v-col>
    </v-row>
    <v-row justify="center">Semifinais</v-row> 
    <v-row>
      <v-col class="playoffMatch" cols="12">
        <mini-match 
          countryLeft="Q1" 
          countryRight="Q2" />
      </v-col> 
    </v-row>
    <v-row justify="center">Final</v-row>
    <v-row>
      <v-col class="playoffMatch" cols="12">
        <mini-match 
          countryLeft="S1" 
          countryRight="S2" />
      </v-col> 
    </v-row>
    <v-row>
      <v-col class="playoffMatch" cols="12">
        <mini-match 
          countryLeft="Q3" 
          countryRight="Q4" />
      </v-col> 
    </v-row>
    <v-row justify="center">Semifinais</v-row> 
    <v-row>
      <v-col class="playoffMatch" cols="6">
        <mini-match 
          countryLeft="O5" 
          countryRight="O6" />
      </v-col>
      <v-col class="playoffMatch" cols="6">
        <mini-match 
          countryLeft="O7" 
          countryRight="O8" />
      </v-col>  
    </v-row>
    <v-row justify="center">Quartas de final</v-row> 
    <v-row>
      <v-col class="playoffMatch" cols="3">
        <mini-match 
          countryLeft="A2" 
          countryRight="B1" />
      </v-col>
      <v-col class="playoffMatch" cols="3">
        <mini-match 
          countryLeft="C2" 
          countryRight="D1" />
      </v-col>
      <v-col class="playoffMatch" cols="3">
        <mini-match 
          countryLeft="E2" 
          countryRight="F1" />
      </v-col>
      <v-col class="playoffMatch" cols="3">
        <mini-match 
          countryLeft="G2" 
          countryRight="H1" />
      </v-col>
    </v-row>
    <v-row justify="center">Oitavas de final</v-row> 
  </v-container>
</template>

<script>
  import MiniMatch from './MiniMatch.vue';

  export default {
    name: "PlayoffsMap",
    components: { MiniMatch },
    data: () => {
      return {};
    }
  }
</script>

<style scoped>
.playoffMatch {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
}

#phases > * {
  border: 1px solid black;
}
</style>
