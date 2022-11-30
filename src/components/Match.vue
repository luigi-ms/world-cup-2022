<template>
  <v-container id="round">
    <v-row id="metadata">
      <v-col>
        <v-icon dense>mdi-calendar-month</v-icon>
        <span>{{ date+" • "+hour }}</span>
      </v-col>
      <v-col>
        <v-icon dense>mdi-map-marker</v-icon>
        <span>{{ stadium }}</span>
      </v-col>
      <v-col v-if="wasPlayed">
        <v-icon dense>mdi-check</v-icon>
        <span>Finalizado</span>
      </v-col>
    </v-row>
    <v-row id="countryNames">
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
          :src="getFlag(countryLeft.name)"
          :alt=countryLeft.name></v-img>
        <span>{{ countryLeft.name }}</span>
      </v-col>
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
          :src="getFlag(countryRight.name)"
          :alt=countryRight.name></v-img>
        <span>{{ countryRight.name }}</span>
      </v-col>
    </v-row>
    <v-row id="goals">
      <v-col :class="(leftWon) ? 'winnerSign' : ''">
        <span>{{ countryLeft.goals }}</span>
      </v-col>
      <v-col :class="(rightWon) ? 'winnerSign' : ''">
        <span>{{ countryRight.goals }}</span>
        <span v-if="rightWon" class="winnerSign"></span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import countries from '../countries.js';

export default {
  name: "MatchBox",
  data: () => {
    return {
      date: "00/00",
      hour: "00",
      leftWon: false,
      rightWon: false
    }
  },
  props: {
    countryLeft: {
      type: Object,
      default: () => {
        return { name: "Team", goals: 0 };
      }
    },
    countryRight: {
      type: Object,
      default: () => {
        return { name: "Team", goals: 0 };
      }
    },
    datetime: {
      type: String,
      default: "00/00 00h"
    },
    stadium: {
      type: String,
      default: "Stadium"
    },
    wasPlayed: {
      type: Boolean,
      default: false
    }
  },
  mounted(){
    this.date = this.datetime.substr(0, 5);
    this.hour = this.datetime.substr(6);
    
    if(this.countryLeft.goals > this.countryRight.goals){
      this.leftWon = true;
    }else if(this.countryLeft.goals < this.countryRight.goals){
      this.rightWon = true;
    }
    console.log(this.countryLeft);
  },
  methods: {
    getFlag(countryName){
      if(countryName === "") return "";

      const abrev = countries[countryName];

      return (abrev !== "ESP") 
        ? require('../assets/'+abrev+'.png')
        : require('../assets/'+abrev+'.jpeg');
    },
    isNameEmpty(){ 
      return this.countryLeft.name === "" 
      && this.countryRight.name === ""; 
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

#round {
  font-family: 'Open Sans', 'Arial', sans-serif;
  border: 1px solid grey;
  margin-top: 2vh;
  margin-left: 5vw;
  margin-right: 5vw;
  width: 90vw;
}

#goals { font-size: 1.35rem; }

#goals > *, #countryNames > * {
  display: flex;
  justify-content: center;
}

#metadata { font-size: 0.85rem; }

#metadata * { text-align: center; }

.winnerSign { border-bottom: 3px solid green; }

.flag { margin-right: 2vw; }
</style>
