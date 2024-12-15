<script setup>
import RouteLinkPrimary from './route-link-primary.vue';

const headerTitle = "POKEMON";

</script>

<template>
    <header class="header"> 
        <div class="header-container">
            <RouterLink 
                to="/"
                class="logo-container"
            >
                <img 
                    class="logo"
                    src="@/assets/poke-ball.svg"
                />
            </RouterLink>
            <p class="header-text">
                {{ headerTitle }}
            </p>
            <RouteLinkPrimary 
                :to="`/pokédex`"
                :text="'Pokédex'"
            />
        </div>
    </header>
</template>

<style scoped>

.header {
    position: fixed;
    top: 3rem;
    left: 50%;
    transform: translateX(-50%);
    margin-inline: auto;
    width: 70%;
    max-width: 1200px;
    border: 1px solid var(--black-primary);
    background: var(--white-light);
    border-radius: 20rem;
    padding: 0.8rem 1rem;
}
    
.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-text {
    font-family: var(--font-primary);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 48px;
}

.logo-container {
    height: 4rem;
    width: 4rem;
}
.logo {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

</style>