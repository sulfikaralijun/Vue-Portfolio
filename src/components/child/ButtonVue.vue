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
  <div class="btn">
    <a :href="link">{{ text }}</a>
  </div>
</template>

<style scoped>
.btn {
  top: 20px;
  position: relative;
}
a {
  padding: 10px 20px;
  text-decoration: none;
  font-size: 1.1rem;
  border-radius: 20px;
  display: inline !important;
  color: var(--black);
  outline: 2px solid var(--primary-color);
  transition: scale .8s ease;
  border: none;
  /* background-color: aqua; */
}
a:hover {
  scale: 1.05;
  box-shadow: 0 0 10px var(--primary-color), 0 0 20px var(--secondary-color);
  outline: none;
}
</style>