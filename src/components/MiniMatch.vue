<template>
  <v-sheet 
    id="round" 
    elevation="4" 
    rounded>
    <v-container>
      <v-row v-if="isFinalMatch">
        <v-col 
          cols="12" 
          align="center">
          <h3>Final</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col 
          align="center" 
          v-if="isNameEmpty()">
          <v-icon v-if="isNameEmpty()">
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
          v-if="isNameEmpty()">
          <v-icon v-if="isNameEmpty()">
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
    },
    isFinalMatch: {
      type: Boolean,
      default: false
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
    isNameEmpty(){ 
      return this.countryLeft === "" 
      && this.countryRight === ""; 
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
