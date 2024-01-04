<template>
	<div class="social-media-items">
		<a href=""><font-awesome-icon :icon="['fab', 'github']" /></a>
		<a href=""><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
		<a href=""><font-awesome-icon :icon="['fab', 'instagram']" /></a>
		<a href=""><font-awesome-icon :icon="['fab', 'facebook']" /></a>
	</div>
</template>

<style scoped>
.social-media-items {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  /* background: blue; */
}
.social-media-items svg {
  padding: 5px;
  /* background: var(--secondary-color); */
  border-radius: 50%;
  border: 2px solid var(--secondary-color);
  color: var(--primary-color);
  font-size: 22px;
  transition: all .5s ease;
}
svg:hover {
  background: var(--primary-color);
  color: #00FFF0;
  scale: 1.2;
}
</style>
