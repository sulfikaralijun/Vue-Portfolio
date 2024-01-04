<template>
	<div class="social-media-items">
		<font-awesome-icon :icon="['fab', 'github']" />
		<font-awesome-icon :icon="['fab', 'linkedin']" />
		<font-awesome-icon :icon="['fab', 'instagram']" />
		<font-awesome-icon :icon="['fab', 'facebook']" />
	</div>
</template>

<style scoped>
.social-media-items {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  /* background: blue; */
}
.social-media-items svg {
  padding: 10px;
  background: red;
  border-radius: 50%;
  font-size: 20px;
}
</style>
