<template>
  <NavCompo />
  <RouterView />
</template>

<script>
import NavCompo from '@/components/NavCompo.vue';

export default {
  name: 'HomeView',
  components: {
    NavCompo
  }
}
</script>

<style>
@import './assets/styles/styles.css';

body {
  background-color: var(--bg-color);
  font-family: var(--ff-main);
}
</style>
