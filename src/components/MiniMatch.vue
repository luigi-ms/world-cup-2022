<template>
  <v-sheet 
    id="round" 
    elevation="4" 
    rounded>
    <v-container>
      <v-row>
        <v-col 
          align="center" 
          v-if="isLeftEmpty()">
          <v-icon v-if="isLeftEmpty()">
            mdi-flag
          </v-icon>
          <span>Team</span>
        </v-col>
        <v-col 
          justify="center"
          align="center" 
          v-else>
          <v-img
            class="flag"
            max-width=30 
            :src="getFlag(countryLeft)"
            :alt=countryLeft></v-img>
          <span>{{ countryLeft }}</span>
        </v-col>
        <v-col 
          align="center" 
          v-if="isRightEmpty()">
          <v-icon v-if="isRightEmpty()">
            mdi-flag
          </v-icon>
          <span>Team</span>
        </v-col>
        <v-col 
          justify="center"
          align="center" 
          v-else>
          <v-img
            class="flag"
            max-width=30 
            :src="getFlag(countryRight)"
            :alt=countryRight></v-img>
          <span>{{ countryRight }}</span>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "MiniMatch",
  data: () => {
    return {
      leftWon: false,
      rightWon: false,
      countries: {}
    }
  },
  props: {
    countryLeft: {
      type: String,
      default: "Team"
    },
    countryRight: {
      type: String,
      default: "Team"
    }
  },
  mounted(){
    fetch('/data/countries.json')
      .then(res => res.json())
      .then(json => this.countries = json)
      .catch(() => console.error("Error on get countries"));
  },
  methods: {
    getFlag(countryName){
      const abrev = this.countries[countryName];

      if(abrev){
        return (abrev !== "ESP") 
          ? require('../assets/'+abrev+'.png')
          : require('../assets/'+abrev+'.jpeg');
      }else{
        return "";
      }
    },
    isLeftEmpty(){ 
      return this.countryLeft.length === 0;
    },
    isRightEmpty(){
      return this.countryRight.length === 0; 
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

#round {
  font-family: 'Open Sans', 'Arial', sans-serif;
  margin-top: 2vh;
  width: 20vw;
}

.flag{ border: 0.6px solid black; }
</style>
