<script setup>
import banner from '/src/assets/Logo.png';
</script>

<template>
	<div class="img-section">
		<img :src="banner" alt="banner" />
	</div>
</template>

<style scoped>
.img-section {
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
