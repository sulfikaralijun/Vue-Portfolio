<script setup>

import { ref } from 'vue';
import logo from '../assets/Logo.png';

const navItems = ref([
  {text: "Home", link: '/', isActive: false},
  {text: "About", link: '/about', isActive: false},
  {text: "Skills", link: '/skills', isActive: false},
  {text: "Certificate", link: '/certificate', isActive: false},
  {text: "Contact", link: '/contact', isActive: true},
])
</script>

<template>
  <header>
    <div class="logo">
      <a href="/">
        <img :src="logo" alt="Logo">
      </a>
      <h1>Sulfikar Alijun</h1>
    </div>

    <nav>
      <a :class="navItem.isActive ? 'active' : ''" v-for="(navItem, index) in navItems" :key="index" :href="navItem.link">{{ navItem.text }}</a>
    </nav>
  </header>
</template>

<style scoped>
header{
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 40px;
  /* background-color: aliceblue; */
  background: transparent;
  backdrop-filter: blur(20px);
}
header .logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
  transition: background .5s ease;
}
nav a.active,
nav a:hover {
  background-color: var(--tersiary-color);
}
</style>