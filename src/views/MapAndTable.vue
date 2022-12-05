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
        <v-sheet elevation="4" 
          rounded>
          <v-simple-table class="table">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>
                    <span class="groupHeader groupName">
                      Grupo {{ group.groupName }}
                    </span>
                  </th>
                </tr>
                <tr>
                  <th v-for="header in tableHeader" 
                    :key="header">
                    <span class="groupHeader">{{ header }}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ group.first.name }}</td>
                  <td v-for="(point, i) in group.first.points"
                    :key="i">
                    {{ point }}
                  </td>
                </tr>
                <tr>
                  <td>{{ group.second.name }}</td>
                  <td v-for="(point, i) in group.second.points"
                    :key="i">
                    {{ point }}
                  </td>
                </tr>
                <tr>
                  <td>{{ group.third.name }}</td>
                  <td v-for="(point, i) in group.third.points"
                    :key="i">
                    {{ point }}
                  </td>
                </tr>
                <tr>
                  <td>{{ group.fourth.name }}</td>
                  <td v-for="(point, i) in group.fourth.points"
                    :key="i">
                    {{ point }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-sheet>          
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

.table { 
  background-color: #EDE7F6;
}

.groupName { font-size: 1rem; }
</style>
