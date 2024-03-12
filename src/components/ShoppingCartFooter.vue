<script setup lang="ts">
import { useCatalogueStore } from '@/stores/CatalogueStore';
import { useGlobalDataStore } from '@/stores/GlobalDataStore';
import { computed } from 'vue';

const { currency } = useGlobalDataStore();

const totalPrice = computed<string>(() => {
    return useCatalogueStore().totalPrice;
});

</script>

<template>
    <div class="shoppingCart-footer">
        <p>Total: {{ totalPrice }} {{ currency }}</p>
    </div>
</template>

<style lang="scss" scoped>

.shoppingCart-footer {
    background: white;
    border-top: solid 1px black;
    width: 100%;
    height: 14rem;
    position: fixed;
    bottom: 0;
    z-index: 99;
}

</style>