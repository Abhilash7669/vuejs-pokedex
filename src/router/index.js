

import AboutView from '@/views/about-view.vue';
import HomeView from '@/views/home-view.vue';
import PlaygroundView from '@/views/playground-view.vue';
import PokedexView from '@/views/pokedex-view.vue';
import PokemonView from '@/views/pokemon-view.vue';
import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/playground', name: 'playground', component: PlaygroundView },
    { path: '/pokedex', name: 'pokedex', component: PokedexView },
    { path: '/pokedex/:id', name: 'pokemon', component: PokemonView }
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'instant' }
  }
});

export default router;