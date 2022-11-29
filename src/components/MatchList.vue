<template>
  <v-list>
    <v-list-item class="match" 
      v-for="(m, i) in matches" 
      :key="i">
      <h4>Grupo {{ m.groupName }}</h4>
      <match-box
        :countryLeft="m.matchOne.cLeft"
        :countryRight="m.matchOne.cRight"
        :datetime="m.matchOne.datetime"
        :stadium="m.matchOne.local"
        wasPlayed
      />
      <match-box 
        :countryLeft="m.matchTwo.cLeft"
        :countryRight="m.matchTwo.cRight"
        :datetime="m.matchTwo.datetime"
        :stadium="m.matchTwo.local"
        wasPlayed
      />
    </v-list-item>
  </v-list>
</template>

<script>
  import MatchBox from './Match.vue';
  import groups from '../phases/groups-one.js';
  import groupsTwo from '../phases/groups-two.js';
  import groupsThree from '../phases/groups-three.js';
   
  export default {
    name: 'MatchList',
    components: { MatchBox },
    data: () => {
      return { 
        matches: []
      };
    },
    props: {
      whichShow: String
    },
    mounted(){
      this.matches = groups.matches;
    },
    updated(){
      console.log(this.whichShow);
      if(this.whichShow === "group-one"){
        this.matches = groups.matches;
      }else if(this.whichShow === "group-two"){
        this.matches = groupsTwo.matches;
      }else if(this.whichShow === "group-three"){
        this.matches = groupsThree.matches
      }
    },
  };
</script>

<style scoped>
.match {
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
}
</style>
