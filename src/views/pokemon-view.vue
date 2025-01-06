<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const pokemonName = ref(null);
    const appContainerRef = ref(null);

    onMounted(() => {
        console.log(appContainerRef.value, "REF");
        pokemonName.value = route.params.id;
    });

</script>

<template>
    <main ref="appContainerRef" class="main-container">
        <!-- {{ pokemonName }} -->
          {{ $route.params.id }}
    </main>
</template>