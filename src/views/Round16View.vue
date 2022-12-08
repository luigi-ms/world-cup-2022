<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Oitavas de final</h1>
      </v-col>
    </v-row>
    <v-row>
      <Adsense 
        data-ad-client="ca-pub-4580509034945075"
        data-ad-slot="1649269846"
      />
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

  export default {
    name: 'RoundOf16',
    components: { MatchList },
    data: () => {
      return {
        sixteens: []
      }
    },
    mounted(){
      fetch('/data/sixteens.json')
        .then(res => res.json())
        .then(json => this.sixteens = json.matches)
        .catch(rej => console.error(rej));
    }
  }
</script>

<style scoped>
h1 { text-align: center; }
</style>
