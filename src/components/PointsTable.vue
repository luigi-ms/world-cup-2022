<template>
  <v-sheet elevation="4" 
    rounded>
    <v-simple-table class="table">
      <template v-slot:default>
        <thead>
          <tr>
            <th>
              <span class="groupHeader groupName">
                Grupo {{ group.groupName }}
              </span>
           </th>
          </tr>
          <tr>
            <th v-for="header in headers" 
              :key="header">
              <span class="groupHeader">{{ header }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ group.first.name }}</td>
            <td v-for="(point, i) in group.first.points"
              :key="i">
              {{ point }}
            </td>
          </tr>
          <tr>
            <td>{{ group.second.name }}</td>
            <td v-for="(point, i) in group.second.points"
              :key="i">
              {{ point }}
            </td>
          </tr>
          <tr>
            <td>{{ group.third.name }}</td>
            <td v-for="(point, i) in group.third.points"
              :key="i">
              {{ point }}
            </td>
          </tr>
          <tr>
            <td>{{ group.fourth.name }}</td>
            <td v-for="(point, i) in group.fourth.points"
              :key="i">
              {{ point }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-sheet>
</template>

<script>
  export default {
    name: "PointsTable",
    data: () => {
      return {};
    },
    props: {
      group: Object,
      headers: Array
    }
  }
</script>

<style scoped>
.table { 
  background-color: #EDE7F6;
}

.groupName { font-size: 1rem; }
</style>  
