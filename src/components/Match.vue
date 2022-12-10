<template>
  <v-sheet elevation="4" rounded>
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
        <v-col v-if="isLeftEmpty()">
          <v-icon v-if="isLeftEmpty()">
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
        <v-col v-if="isRightEmpty()">
          <v-icon v-if="isRightEmpty()">
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
        </v-col>
      </v-row>
      <v-row v-show="penaltyEnding">
        <v-divider></v-divider>
      </v-row>
      <v-row id="penalties" v-show="penaltyEnding">
        <v-col :class="(leftWonPenalties) ? 'winnerSign' : ''">
          <span>
            {{ countryLeft.penalty }}
          </span>
        </v-col>
        <v-col>
          <span>Pênaltis</span>
        </v-col>
        <v-col :class="(rightWonPenalties) ? 'winnerSign' : ''">
          <span>
            {{ countryRight.penalty }}
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "MatchBox",
  data: () => {
    return {
      date: "00/00",
      hour: "00",
      leftWon: false,
      rightWon: false,
      leftWonPenalties: false,
      rightWonPenalties: false,
      countries: {}
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
    penaltyEnding: {
      type: Boolean,
      default: false
    },
    wasPlayed: {
      type: Boolean,
      default: false
    }
  },
  beforeMount(){
    fetch('/data/countries.json')
      .then(res => res.json())
      .then(json => this.countries = json)
      .catch(() => console.error("Error on get countries"));
  },
  mounted(){
    const leftScoredMost = (this.countryLeft.goals > this.countryRight.goals);
    const rightScoredMost = (this.countryRight.goals > this.countryLeft.goals);
    const leftScoredPenalties = (this.countryLeft.penalty > this.countryRight.penalty);
    const rightScoredPenalties = (this.countryRight.penalty > this.countryLeft.penalty);

    this.date = this.datetime.substr(0, 5);
    this.hour = this.datetime.substr(6);
    
    if(this.wasPlayed && leftScoredMost){
      this.leftWon = true;
    }else if(this.wasPlayed && rightScoredMost){
      this.rightWon = true;
    }else if(this.wasPlayed && leftScoredPenalties){
      this.leftWonPenalties = true;
    }else if(this.wasPlayed && rightScoredPenalties){
      this.rightWonPenalties = true;
    }
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
      return this.countryLeft.name.length === 0;
    },
    isRightEmpty(){ 
      return this.countryRight.name.length === 0;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

@media (max-width: 960px;){
  #round { width: 90vw; }
}

@media (max-width: 1260px;) {
  #round { width: 80vw; }
}

#round {
  font-family: 'Open Sans', 'Arial', sans-serif;
  margin-top: 2vh;
}

#goals { font-size: 1.35rem; }

#goals > *, #countryNames > *, #penalties > * {
  display: flex;
  justify-content: center;
}

#metadata { font-size: 0.85rem; }

#metadata * { text-align: center; }

.winnerSign { border-bottom: 3px solid green; }

.penalty {
  font-size: 1rem;
  align-self: baseline;
  margin-left: 1vw;
  margin-right: 1vw
} 

.penalty + * { align-self: baseline; }

.flag { 
  margin-right: 2vw;
  border: 0.6px solid black;
}
</style>
