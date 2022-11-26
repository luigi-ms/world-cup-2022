<template>
  <round-box 
    :countryLeft="cLeft"
    :countryRight="cRight"
    :datetime="dateTime"
    :stadium="local"
    wasPlayed
    leftWon
  />
</template>

<script>
  import RoundBox from '../components/Round'

  export default {
    name: 'HomeView',
    components: {RoundBox},
    data: () => {
      return {
        cLeft: { name: "Brasil", goals: 2 },
        cRight: { name: "Servia", goals: 0 },
        dateTime: new Date("2022/11/26 16:00"),
        local: "Lusail"
      }
    }
  }
</script>
