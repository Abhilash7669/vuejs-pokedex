
<script setup>
import { computed, onMounted, reactive } from 'vue';
import { RouterLink } from 'vue-router';

    const props = defineProps({
        data: {
            type: Object,
            default() {
                return { message: 'Hello there' }
            },
            required: true
        }
    });

    const pokemonData = reactive({
        id: null,
        name: null,
        image: null,
        types: [],
        loading: false
    });


    onMounted(() => {


        async function fetchPokemonData () {
            pokemonData.loading = true;
            try {

                const response = await fetch(props.data.url);

                if(response.ok) {
                    const resData = await response.json();
                    const id = resData.id;
                    const name = resData.name;
                    const image = resData.sprites.front_default;
                    const types = resData.types;

                    pokemonData.id = id;
                    pokemonData.name = name;
                    pokemonData.image = image;
                    pokemonData.types = types;
                    pokemonData.loading = false;

                }

            } catch (error) {
                console.log(error, 'ERROR message here');
                pokemonData.loading = false;
            }

        }

        fetchPokemonData();

    });

    const padId = computed(() => {

        const num = "0000";
        const id = `${pokemonData.id}`;

        const finalId = num.substring(0, `${num.length - id.length}`) + id;

        return finalId;

    });

</script>

<template>
    <div class="poke-dex-card">
        <div class="poke-dex-img-container">
            <div v-if="pokemonData.loading" style="display: flex; align-items: center; justify-content: center;" class="poke-dex-img">
                Image loading...
            </div>
            <img
                v-else
                class="poke-dex-img"
                :src="pokemonData.image"
            />
        </div>
        <div class="poke-dex-card-info-container">
            <p class="pokemon-id">
                <span v-if="pokemonData.loading">
                    loading Pokemon id...
                </span>
                <span v-else>
                    <span v-if="pokemonData.id">
                        #{{ padId }}
                    </span>
                    <span v-else>
                        no id
                    </span>
                </span>
            </p>
            <p class="pokemon-name">
                <span v-if="pokemonData.loading">
                    name loading....
                </span>
                <span v-else>
                    <span v-if="pokemonData.name">
                        {{ pokemonData.name }}
                    </span>
                    <span v-else>
                        NO NAME
                    </span>
                </span>
            </p>
            <ul
                :class="'pokemon-types-container'"
                v-if="pokemonData.types.length > 0"
            >
                <li
                    class="pokemon-type"
                    v-for="type in pokemonData.types"
                    :key="type"
                >
                    {{ type.type.name }}
                </li>
            </ul>
            <div v-if="pokemonData.id">
                <RouterLink
                    class=""
                    :to="`/pokedex/${pokemonData.name}`"
                >
                    Learn more
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .poke-dex-card {
        display: grid;
        gap: 1.2rem;
        min-height: 20rem;
        border: 1px solid var(--black-primary);
        border-radius: var(--pokedex-card-radius);
        padding: var(--pokedex-card-padding);
        background: var(--white-soft);
    }

    .poke-dex-img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    .poke-dex-img-container {
        height: 13rem;
        width: 100%;
        background: var(--pokedex-card-img-container-background);
        border-radius: var(--pokedex-card-img-container-radius);
    }

    .poke-dex-card-info-container {
        display: flex;
        flex-direction: column;
        gap: 0.44rem;
    }

    .pokemon-id {
        font-family: var(--font-secondary);
        color: var(--black-light);
        font-size: 1rem;
    }
    .pokemon-name {
        font-family: var(--font-primary);
        color: var(--black-light);
        font-size: 1.44rem;
        text-transform: capitalize;
    }
    .pokemon-types-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .pokemon-types-container > li {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--black-primary);
        padding-inline: 0.64rem;
        height: fit-content;
        border-radius: var(--pokedex-card-img-container-radius);
    }

    .poke-dex-card.cta {
        width: fit-content;
        font-family: var(--font-secondary);
        color: var(--black-light);
        font-size: 20px;
        cursor: pointer;
    }

</style>
