<script setup>
import banner from '../assets/Logo.png'
</script>

<template>
  <section id="home">
    <div class="text-section">
      <strong>Hi there I'm </strong>
      <h1>Sulfikar Alijun</h1>
      <p class="desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi ipsum dolorum accusantium. Odit, laborum facere? Nostrum est architecto ducimus nam?
      </p>
    </div>
    <div class="img-section">
      <img :src="banner" alt="banner">
    </div>
  </section>
</template>

<style scoped>
section#home {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 80px;
}

section#home .text-section {
  width: 50%;
}
.text-section strong {
  font-size: 1.2rem;
  font-weight: 500;
}

section#home .img-section {
  width: 50%;
  display: grid;
  place-items: center;
}
</style>