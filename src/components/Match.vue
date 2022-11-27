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
      <v-col>
        <span>{{ countryLeft.name }}</span>
      </v-col>
      <v-col>
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
export default {
  name: "MatchBox",
  data: () => {
    return {
      date: "dd/mm",
      hour: "hh"
    }
  },
  props: {
    countryLeft: Object,
    countryRight: Object,
    datetime: Date,
    stadium: String,
    wasPlayed: Boolean,
    leftWon: Boolean,
    rightWon: Boolean
  },
  mounted(){
    this.date = this.datetime.getDate()+"/"+(this.datetime.getMonth()+1);
    this.hour = (this.datetime.getHours() < 10) 
      ? "0"+this.datetime.getHours()+"h"
      : this.datetime.getHours()+"h";
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
</style>
