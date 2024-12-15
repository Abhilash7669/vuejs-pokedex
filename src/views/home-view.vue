
<script setup>
    import ButtonLinkPrimary from '@/components/buttons/button-link-primary.vue';

    const title = "Welcome to the Pokémon VueDex!";
    const description = "I built this site while learning Vue.js—because coding with Pokémon is just better! Explore the Pokédex powered by the Pokémon API!";

</script>


<template>
    <main class="main-container">
        <div class="hero-text-container">
            <div>
                <h1 class="main-title">
                    {{ title }}
                </h1>
                <p class="main-description">
                    {{ description }}
                </p>
            </div>
            <ButtonLinkPrimary 
                :to="'/pokédex'"    
                :text="'Pokédex'"
            />
        </div>
    </main>
</template>

<style scoped>

    .hero-text-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.4rem;
        height: fit-content;
        padding-inline: 2rem;
    }
    .main-title {
        font-family: var(--font-primary);
        font-weight: 600;
        color: var(--black-light);
        font-size: 52px;
        text-align: center;
        max-width: 24ch;
        line-height: 120%;
    }
    .main-description {
        font-family: var(--font-secondary);
        color: var(--black-light);
        font-size: 20px;
        text-align: center;
        max-width: 60ch;
        line-height: 130%;
        margin-inline: auto;
    }
</style>