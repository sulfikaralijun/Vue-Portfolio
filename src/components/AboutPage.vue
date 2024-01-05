<template>
  <section id="about">
    <BannerIconVue width="300px"/>
    <div class="about-text">
      <h3>About</h3>
      <p>Hello, I'm Sulfikar Alijun, a beginner front-end developer with skills in HTML, CSS, and JavaScript. I'm passionate about creating captivating and responsive user experiences. With a strong understanding of UI/UX design, I'm ready to collaborate in a team to deliver visually appealing and functional websites.</p>

      <ButtonVue text="Download My CV"/>
    </div>
  </section>
</template>
<script setup>
import BannerIconVue from './child/BannerIcon.vue';
import ButtonVue from './child/ButtonVue.vue';
</script>
<style scoped>
section#about {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-text {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* background-color: blue; */
}
.about-text h3 {
  font-size: 2rem;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color), var(--primary-color)), var(--secondary-color);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.about-text p {
  width: 60%;
  font-size: 1.2rem;
  color: var(--black);
}
</style>