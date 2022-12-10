<template>
  <v-sheet 
    id="winner" 
    elevation="4" 
    rounded>
    <v-container>
      <v-row>
        <v-col>
          <h3>Campeão da Copa do Mundo 2022</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-if="isNameEmpty()">
          <v-icon v-if="isNameEmpty()">
            mdi-flag
          </v-icon>
          <span>Team</span>
        </v-col>
        <v-col v-else>
          <v-img
            class="flag"
            max-width=30 
            :src="getFlag(name)"
            :alt=name></v-img>
          <span>{{ name }}</span>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "WinnerBox",
  data: () => {
    return {
      countries: {}
    }
  },
  props: {
    name: {
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
    isNameEmpty(){ 
      return this.name.length === 0 || this.name === "Team";
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

#winner {
  font-family: 'Open Sans', 'Arial', sans-serif;
  margin-top: 2vh;
  width: 60vw;
}

.flag{ border: 0.6px solid black; }
</style>
