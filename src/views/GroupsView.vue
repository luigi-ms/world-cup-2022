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
          value=Number(roundPage)
          :length=Number(3)
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
  import groups from '../phases/groups-one.js';
  import groupsTwo from '../phases/groups-two.js';
  import groupsThree from '../phases/groups-three.js';
  
  export default {
    name: 'GroupsView',
    components: { MatchList },
    data: () => {
      return {
        roundPage: 0,
        roundOne: groups.matches,
        showOne: true,
        roundTwo: groupsTwo.matches,
        showTwo: false,
        roundThree: groupsThree.matches,
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
      this.roundMatchList = groups.matches;
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
