<script setup>
import BannerIcon from './child/BannerIcon.vue';
import SocialMedia from './child/SocialMedia.vue'
import ButtonVue from './child/ButtonVue.vue';
</script>

<template>
  <section id="home">
    <div class="text-section">
      <strong>Hi there I'm </strong>
      <h1>Sulfikar Alijun</h1>
      <p class="desc">
        I'm an beginner front-end developer creating engaging user experiences with HTML, CSS, and JavaScript. Check out my portfolio for the projects I've worked on.
      </p>
      <div class="social-media">
        <SocialMedia/>
      </div>
      <ButtonVue text="Explore" link="#about" style="display: inline;"/>
    </div>
    <BannerIcon/>
  </section>
</template>

<style scoped>
section#home {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 80px;
}

section#home .text-section {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.text-section strong {
  font-size: 1.2rem;
  font-weight: 500;
  display: block;
}
.text-section h1 {
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
}

.social-media {
  position: relative;
}
</style>