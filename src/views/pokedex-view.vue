
<script setup>
import PokedexCard from '@/components/card/pokedex-card.vue';
import { onMounted, reactive } from 'vue';

const pokeDexCards = reactive({
    data: null,
    loading: false
});


onMounted(() => {
    
    const URL = import.meta.env.VITE_POKE_URL;
    const ENDPOINT = import.meta.env.VITE_END_POINT;

    async function fetchPokemons() {

        pokeDexCards.loading = true;

        try {

            const response = await fetch(`${URL}${ENDPOINT}`);

            if(response.ok) {
                const resData = await response.json();
                pokeDexCards.data = resData.results;
                pokeDexCards.loading = false;
            }
            
        } catch (error) {
            console.log(error, 'ERROR MESSAGE');
            pokeDexCards.loading = false;
        }

    }

    fetchPokemons()

});


</script>

<template>
    <main class="main-container">
       <div class="poke-dex-wrapper">
            <h1>
                Welcome to the pokedex view
            </h1>
            <div style="text-align: center;" v-if="pokeDexCards.loading">
                Fetching pokedex data...
            </div>
            <div v-else>
                <div 
                    v-if="pokeDexCards.data && pokeDexCards.data.length > 0"
                    class="poke-dex-container"
                >
                    <PokedexCard 
                        v-for="data in pokeDexCards.data"
                        :data="data"
                        :key="data.name"
                    />
                </div>
                <div v-else>
                    No PokeDex data found
                </div>
            </div>
       </div>
    </main>
</template>


<style scoped>

    .poke-dex-wrapper {
        width: 100%;
    }
    .poke-dex-wrapper > h1 {
        text-align: center;
        padding-block: 1rem;
    }
    .poke-dex-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 1rem;
        width: 100%;
        padding-block: 1.2rem;
    }

</style>