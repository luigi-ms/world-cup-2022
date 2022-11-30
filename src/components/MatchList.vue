<template>
  <v-list>
    <v-list-item class="match" 
      v-for="(m, i) in matches" 
      :key="i">
      <match-box
        :countryLeft="m.cLeft"
        :countryRight="m.cRight"
        :datetime="m.datetime"
        :stadium="m.local"
        :wasPlayed="m.wasPlayed"
      />
    </v-list-item>
  </v-list>
</template>

<script>
  import MatchBox from './Match.vue';
  
  export default {
    name: 'MatchList',
    components: { MatchBox },
    data: () => {
      return { };
    },
    props: {
      matches: Array
    }
  };
</script>

<style scoped>
.match {
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
}
</style>
