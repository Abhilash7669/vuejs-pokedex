<script setup>
    const footerTitle = "Vuejs Footer";
</script>

<template>
    <footer class="footer">
        {{ footerTitle }}
    </footer>    
</template>

<style scoped>
    .footer {
        border-top: 1px white solid;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>