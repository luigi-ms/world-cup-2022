<template>
  <v-app>
    <v-list id="matchesLinks" 
      class="d-flex justify-center elevation-2">
      <v-list-item
        v-for="link in links"
        :key="link.text">
        <router-link class="link" :to="link.to">
          {{ link.text }}
        </router-link>
      </v-list-item>
    </v-list>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'MatchesView',
  data: () => {
    return {
      links: [
        {
          text: "Grupos",
          to: "/matches/groups"
        },
        {
          text: "Oitavas",
          to: "/matches/round-16"
        },
        {
          text: "Quartas",
          to: "/matches/quarter"
        },
        {
          text: "Semi e Final",
          to: "/matches/semi-and-final"
        }
      ]
    }
  }
};
</script>

<style scoped>
#matchesLinks {
  font-size: 0.8rem;  
  background-color: #AB47BC;
}

#matchesLinks * { text-align: center; }

main { margin-top: -12vh; }

.link { color: white; }
</style>
