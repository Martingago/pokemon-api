<template>
    <div>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" v-model="searchQuery" @input="emitSearch" placeholder="Buscar"
                aria-label="Search">
        </form>
    </div>
</template>

<script setup>

const searchQuery = ref('');

const emit = defineEmits(["search"]);

const emitSearch = () => {
    emit("search", searchQuery.value);
};
</script>
