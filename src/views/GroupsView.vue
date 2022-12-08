<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Fase de grupos</h1>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col md=2>
        <h3>Rodada:</h3>
      </v-col>
      <v-col md=10 id="roundSelect">
        <v-pagination v-model="roundPage"
          :value="roundPage"
          :length=3
          circle></v-pagination>
      </v-col>
    </v-row>
    <div v-if="showOne">
      <match-list :matches=roundOne key="round-one" />
    </div>
    <div v-else-if="showTwo">
      <match-list :matches=roundTwo key="round-two" />
    </div>
    <div v-else>
      <match-list :matches=roundThree key="round-three" />
    </div>
  </v-container>
</template>

<script>
  import MatchList from '../components/MatchList.vue'
  
  export default {
    name: 'GroupsView',
    components: { MatchList },
    data: () => {
      return {
        roundPage: 0,
        roundOne: [],
        showOne: true,
        roundTwo: [],
        showTwo: false,
        roundThree: [],
        showThree: false
      }
    },
    watch: {
      roundPage(){
        if(this.roundPage === 1){
          this.showOne = true;
          this.showTwo = false;
          this.showThree = false;
        }else if(this.roundPage === 2){
          this.showOne = false;
          this.showTwo = true;
          this.showThree = false;
        }else if(this.roundPage === 3){
          this.showOne = false;
          this.showTwo = false;
          this.showThree = true;
        }
      }
    },
    mounted(){
      fetch('/data/groups-one.json')
        .then(res => res.json())
        .then(json => this.roundOne = json.matches)
        .catch(() => console.error("Error on fetch 1"));

      fetch('/data/groups-two.json')
        .then(res => res.json())
        .then(json => this.roundTwo = json.matches)
        .catch(() => console.error("Error on fetch 2"));

      fetch('/data/groups-three.json')
        .then(res => res.json())
        .then(json => this.roundThree = json.matches)
        .catch(() => console.error("Error on fetch 3"));

      this.roundPage = 1;
    }
  }
</script>

<style scoped>
h1 { text-align: center; }

#roundSelect {
  display: flex;
  justify-content: flex-start;
}
</style>
