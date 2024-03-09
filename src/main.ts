import './assets/main.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useCatalogueStore } from './stores/CatalogueStore';

import App from './App.vue';
import router from './router';

const initApp = async () => {

    const app = createApp(App);

    app.use(createPinia());

    const catalogueStore = useCatalogueStore();

    try {
        await catalogueStore.loadCatalogueData();
    } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
    }

    app.use(router);
    app.mount('#app');
};

initApp();