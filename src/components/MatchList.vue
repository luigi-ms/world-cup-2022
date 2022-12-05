<template>
  <v-container>
    <v-row justify-md="space-around">
      <v-col cols="12" md="6" lg="4" xl="4"
        v-for="m in matches" 
        :key="m.datetime">
        <v-skeleton-loader 
          v-show="loading"
          type="image"/>
        <match-box v-show="!loading"
          :countryLeft="m.cLeft"
          :countryRight="m.cRight"
          :datetime="m.datetime"
          :stadium="m.local"
          :wasPlayed="m.wasPlayed"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import MatchBox from './Match.vue';
  
  export default {
    name: 'MatchList',
    components: { MatchBox },
    data: () => {
      return { 
        loading: true
      };
    },
    props: {
      matches: Array
    },
    mounted(){
      if(this.matches){
        this.loading = false;
      }
    }
  };
</script>

<style scoped>
@media (max-width: 0px;){}

#matchlist {
  display: flex;
  flex-direction: column;
  margin-top: 1vh;
  margin-left: 2vw;
  margin-right: 2vw;
}
</style>
