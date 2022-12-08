<template>
  <v-container>
    <v-row>
      <Adsense 
        data-ad-client="ca-pub-4580509034945075"
        data-ad-slot="1649269846"
      />
    </v-row>
    <v-row>
      <v-col>
        <h1>Tabela de pontuação</h1>
      </v-col>
    </v-row>
    <v-row justify="space-between">
      <v-col v-for="(group, index) in groups"
        :key="index"
        cols="12" 
        md="6" 
        lg="2" 
        xl="4">
        <points-table 
          :headers="tableHeader"
          :group="group" 
        />
      </v-col> 
    </v-row>
    <v-row>
      <v-col>
        <h1>Chaveamento</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <playoffs-map 
          :sixteens="sixteens"
          :quarters="quarters"
          :semis="semifinals"
          :finals="finals"
        />
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
        groups: [],
        sixteens: [],
        quarters: [],
        semifinals: [],
        finals: {}
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
        
      fetch('/data/playoffs.json')
        .then(res => res.json())
        .then(json => {
          this.sixteens = json.sixteens;
          this.quarters = json.quarters;
          this.semifinals = json.semifinals;
          this.finals = json.finals;

          console.log(this.semifinals[0]);
        })
        .catch(() => console.error("Error on get playoffs"));
    }
  }
</script>

<style scoped>
h1 { text-align: center; }
</style>
