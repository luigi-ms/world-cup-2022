<template>
  <v-app>
    <v-list id="matchesLinks" 
      class="d-flex justify-center elevation-2">
      <v-list-item
        v-for="link in links"
        :key="link.text">
        <router-link 
          :class="(activeLink === link.name) ? 'active' : 'link'" 
          :to="link.to">
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
          to: "/matches/groups",
          name: "groups"
        },
        {
          text: "Oitavas",
          to: "/matches/round-16",
          name: "roundOf16"
        },
        {
          text: "Quartas",
          to: "/matches/quarter",
          name: "quarterFinal"
        },
        {
          text: "Semi e Final",
          to: "/matches/semi-and-final",
          name: "semiAndFinal"
        }
      ],
      activeLink: "groups"
    };
  },
  updated(){
    this.activeLink = this.$route.name;
  }
};
</script>

<style scoped>
#matchesLinks {
  font-size: 0.8rem;  
  background-color: #AB47BC;
}

#matchesLinks > * {
  display: flex;
  justify-content: center;
}

.active { color: #9CCC65; }

main { margin-top: -10vw; }

.link { color: white; }
</style>
