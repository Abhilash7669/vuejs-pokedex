<script setup>
import { RouterLink } from 'vue-router';

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

</script>


<template>
    <RouterLink 
        :class="['primary-link']"
        :to="props.to"
    >
        {{ props.text }}
    </RouterLink>
</template>

<style scoped>

    .primary-link {
        width: fit-content;
        padding: 0.25rem 0.8rem;
        font-family: var(--font-secondary);
        background: var(--black-light);
        color: var(--white-primary);
        font-size: 20px;
        border-radius: 16px;
        cursor: pointer;
    }

    .primary-link:hover {
        opacity: 0.8;
    }
    .primary-link:active {
        scale: 0.98;
    }

</style>