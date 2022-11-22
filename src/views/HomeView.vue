<template>
  <round-box 
    :countryLeft="cLeft"
    :countryRight="cRight"
  />
</template>

<script>
  import RoundBox from '../components/Round'

  export default {
    name: 'HomeView',
    components: {RoundBox},
    data: () => {
      return {
        cLeft: { name: "Brasil", goals: 14 },
        cRight: { name: "Alemanha", goals: 0 }
      }
    }
  }
</script>
