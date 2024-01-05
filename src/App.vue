<script setup>
import AboutPageVue from './components/AboutPage.vue';
import HomePage from './components/HomePage.vue';
import NavBarVue from './components/NavBar.vue';
</script>

<template>
  <div class="container">
    <NavBarVue style="position: fixed; top: 0;, left: 0;"/>
    <HomePage/>
    <AboutPageVue/>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}
</style>