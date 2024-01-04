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
  display: block;
}
.text-section h1 {
  position: relative;
  top: 8px;
  font-size: 2.5rem;
  display: inline-block;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color), var(--primary-color)), var(--secondary-color);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 600;
  animation: text 2s ease-in-out infinite;
}

@keyframes text {
  0% {
    transform: translateY(0);
  }50% {
    transform: translateY(-10px);
  }100% {
    transform: translateY(0);
  }
}
.text-section .desc {
  position: relative;
  top: 10px;
}

section#home .img-section {
  width: 50%;
  display: grid;
  place-items: center;
}
.img-section img {
  width: 400px;
  border-radius: 30% 70% 70% 30% / 30% 35% 65% 70% ;
  animation: rotate 5s ease-in-out infinite;
}
@keyframes rotate {
  0%,100% {
    border-radius: 30% 70% 70% 30% / 30% 35% 65% 70% ;
    
  } 25%{
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%  ;
  }50%{
    border-radius: 70% 30% 70% 30% / 30% 30% 70% 70%  ;
  }75%{
    border-radius: 30% 70% 70% 30% / 70% 70% 30% 30%  ;
  }
}
</style>