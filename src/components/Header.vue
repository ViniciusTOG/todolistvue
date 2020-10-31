<template>
  <div class='header'>
    <h1>My Todo List</h1>
    <router-link to='/'>Home</router-link> |
    <router-link to='/about'>About</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
  .header {
    margin-bottom: 40px;
  }

  a {
    text-decoration: none;
    color: #2c3e50;
  }

  h1 {
    margin-bottom: 5px;
  }

</style>
