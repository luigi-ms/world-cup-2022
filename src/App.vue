<template>
  <v-app>
    <v-app-bar app
      color="purple darken-3"
      dark
      elevate-on-scroll>
      <v-toolbar-title>Copa do Mundo Qatar 2022</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs id="tabs" grow
          background-color="purple darken-3"
          dark>
          <v-tab>
            <router-link to="/matches">
              <span class="link">Partidas</span>
            </router-link>
          </v-tab>
          <v-tab>
            <router-link to="/map-and-table">
              <span class="link">Tabela e Chaveamento</span>
            </router-link>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer padless
      color="purple darken-3"
      dark>
      <v-col class="d-flex justify-center">
        <h2>{{ today.getFullYear() }} - Luigi Moraes</h2>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    today: new Date()
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans&display=swap');

* {
  font-family: 'Lato', 'Arial', sans-serif;
}
#tabs {
  font-size: 0.8rem;
  margin-left: 0;
}

a { text-decoration: none; }

.link { color: white; }
</style>
