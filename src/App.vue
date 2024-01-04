<script setup>
import HomePage from './components/HomePage.vue';
import NavBarVue from './components/NavBar.vue';

</script>

<template>
  <div class="container">
    <NavBarVue/>
    <HomePage/>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}
</style>