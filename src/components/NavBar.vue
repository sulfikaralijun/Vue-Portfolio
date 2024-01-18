<script setup>

import { ref } from 'vue';
import logo from '../assets/Logo.png';

const navItems = ref([
  {text: "Home", link: '#app', isActive: false},
  {text: "About", link: '#about', isActive: false},
  {text: "Skills", link: '#skills', isActive: false},
  {text: "Portfolio", link: '#portfolio', isActive: false},
  {text: "Certificate", link: '#certificate', isActive: false},
  {text: "Contact", link: '#contact', isActive: true},
])

const mediaQuery = ref(false)
window.addEventListener('resize', () => {
  if(window.innerWidth <= 1080) {
    mediaQuery.value = true;
  }else {
    mediaQuery.value = false;
  }
})
</script>

<template>
  <header>
      <a href="/" class="logo">
        <img :src="logo" alt="Logo">
        <h1>Sulfikar Alijun</h1>
      </a>

    <nav v-if="!mediaQuery">
      <a :class="navItem.isActive ? 'active' : ''" v-for="(navItem, index) in navItems" :key="index" :href="navItem.link">{{ navItem.text }}</a>
    </nav>
  </header>
</template>

<style scoped>
header{
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 80px;
  background: transparent;
  backdrop-filter: blur(20px);
  z-index: 99;
}
header .logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}
.logo img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
}
.logo h1 {
  font-size: 1.3rem;
  color: var(--black);
}
.logo h1:hover {
  text-decoration: underline;
  color: var(--primary-color);
}

header nav {
  display: flex;
  align-items: center;  
  justify-content: space-between;
  gap: 1rem;
}
nav a {
  text-decoration: none;
  font-size: 1.2rem;
  color: var(--black);
  padding: 10px 14px;
  border-radius: 20px;
  transition: background color .5s ease;
}
nav a.active,
nav a:hover {
  background-color: var(--tersiary-color);
  color: var(--primary-color)
}
</style>