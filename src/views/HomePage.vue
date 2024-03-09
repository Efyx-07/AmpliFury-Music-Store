<script setup lang="ts">
import { useCatalogueStore } from '@/stores/CatalogueStore';

const catalogueStore = useCatalogueStore();

console.log(catalogueStore.products);

</script>

<template>
    <div class="page"></div>
</template>