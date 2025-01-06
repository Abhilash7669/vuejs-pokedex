
<script setup>
    import { ref } from "vue";
    import { vAutofocus } from "@/directive/vAutofocus.js";
    
    const inputValue = ref('Some input value')

</script>

<template>
    <main class="main-container">
        <div>
            <div>
                Welcome to the playground: {{ inputValue }}
            </div>
            <input v-model="inputValue" type="text" v-autofocus/>
        </div>
    </main>
</template>