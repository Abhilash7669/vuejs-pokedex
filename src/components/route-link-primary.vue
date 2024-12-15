<script setup>
import { RouterLink, useRoute } from 'vue-router';

const props = defineProps({
    to: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
        default: 'Text'
    }
});

const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath;
}

</script>


<template>
    <RouterLink 
        :class="[isActiveLink(props.to) ? 'primary-active-link' : 'primary-inactive-link']"
        :to="props.to"
    >
        {{ props.text }}
    </RouterLink>
</template>

<style scoped>

    .primary-active-link {
        background: var(--black-light);
        color: var(--white-primary);
        border-radius: 16px;
        width: fit-content;
        padding: 0.25rem 0.8rem;
        font-size: 20px;
        cursor: pointer;
    }
    .primary-inactive-link {
        width: fit-content;
        padding: 0.25rem 0.8rem;
        font-family: var(--font-secondary);
        color: var(--black-light);
        font-size: 20px;
        cursor: pointer;
    }

    .primary-btn:hover {
        opacity: 0.8;
    }
    .primary-btn:active {
        scale: 0.98;
    }

</style>