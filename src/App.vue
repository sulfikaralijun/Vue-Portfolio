<script setup>
import AboutPageVue from './components/AboutPage.vue';
import HomePage from './components/HomePage.vue';
import NavBarVue from './components/NavBar.vue';
</script>

<template>
  <div class="container">
    <NavBarVue/>
    <HomePage/>
    <AboutPageVue/>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}
</style>