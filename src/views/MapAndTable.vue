<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Tabela de pontuação</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-skeleton-loader type="image"/>
      </v-col> 
    </v-row>
    <v-row>
      <v-col>
        <h1>Chaveamento</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-skeleton-loader type="image"/>
      </v-col> 
    </v-row>
  </v-container>
</template>

<script>
//import MatchList from '../components/MatchList';
  
  export default {
    name: 'MapAndTable',
    //  components: { MatchList },
    data: () => {
      return {
        
      }
    }
  }
</script>

<style scoped>
h1 { text-align: center; }
</style>
