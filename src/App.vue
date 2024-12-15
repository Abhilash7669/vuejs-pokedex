<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderView from './components/header-view.vue';
</script>


<template>
  <HeaderView />
  <main>
    <RouterView />
  </main>
</template>