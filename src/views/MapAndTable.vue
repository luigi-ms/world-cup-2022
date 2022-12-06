<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Tabela de pontuação</h1>
      </v-col>
    </v-row>
    <v-row justify="space-between" >
      <v-col v-for="group in groups"
        :key="group"
        cols="12" 
        md="6" 
        lg="2" 
        xl="4">
        <points-table :group="group" />
      </v-col> 
    </v-row>
    <v-row>
      <v-col>
        <h1>Chaveamento</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <playoffs-map />
      </v-col> 
    </v-row>
  </v-container>
</template>

<script>
  import PointsTable from '../components/PointsTable.vue';
  import PlayoffsMap from '../components/PlayoffsMap.vue';

  export default {
    name: 'MapAndTable',
    components: { PointsTable, PlayoffsMap },
    data: () => {
      return {
        tableHeader: [],
        groups: []
      }
    },
    mounted(){
      fetch('/data/table.json')
        .then(res => res.json())
        .then(json => {
          this.tableHeader = json.tableHeader;
          this.groups = json.groups;
        })
        .catch(() => console.error("Error on get table"));
    }
  }
</script>

<style scoped>
h1 { text-align: center; }
</style>
