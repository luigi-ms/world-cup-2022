<template>
  <v-container>
    <v-row>
      <v-col>
        <p>{{ countryLeft.name }}</p>
        <p>{{ countryLeft.goals }}</p>
      </v-col> x
      <v-col>
        <p>{{ countryRight.name }}</p>
        <p>{{ countryRight.goals }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "RoundBox",
  props: {
    countryLeft: Object,
    countryRight: Object
  }
};
</script>
