<script setup>
defineProps({
  text: String,
  link: {
    type: String,
    default: '/'
  }
})
</script>

<template>
  <a :href="link">{{ text }}</a>
</template>

<style scoped>
a {
  position: relative;
  padding: 10px 0;
  text-decoration: none;
  font-size: 1.1rem;
  border-radius: 20px;
  color: var(--black);
  outline: 2px solid var(--primary-color);
  text-align: center;
  display: inline;
  width: 100px;
  top: 20px;
  transition: all .5s ease;
  /* background-color: aqua; */
}
a:hover {
  scale: 1.05;
  box-shadow: 0 0 10px var(--primary-color), 0 0 20px var(--secondary-color);
}
</style>