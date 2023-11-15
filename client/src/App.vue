<script setup>
  import app from './App.js'
  import { onMounted, ref } from "vue";
  
  let users = ref([]);

  onMounted(async () => {
      app.getUsers().then(resp => {
        users.value = resp.data
      })
  })

</script>

<template>
  <header>
  </header>

  <main>

    <table>
      <tr>
        <th>Username</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
      <tr v-for="user in users">
         <td>{{ user.username }}</td>
         <td>{{ user.first }}</td>
         <td>{{ user.last }}</td>
      </tr>
    </table>
   
  </main>
</template>

<style scoped>
  td, th { padding: 10px; text-align: left; }
  th { font-weight: bold; }
</style>

