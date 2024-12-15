

import AboutView from '@/views/about-view.vue';
import HomeView from '@/views/home-view.vue';
import PokedexView from '@/views/pokedex-view.vue';
import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/pokédex', name: 'pokédex', component: PokedexView }
  ],
});

export default router;