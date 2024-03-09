import type { Category, CatalogueApiResponse } from '@/types/CatalogueTypes';
import type { ImportMetaEnv } from 'env';

const hostName: ImportMetaEnv = import.meta.env.VITE_BACKEND_URL;

export async function fetchCatalogueData(): Promise<Category[]> {

    try {
        const response: Response = await fetch (`${hostName}/catalogue`);

        if (!response.ok) {
            throw new Error ('Erreur lors de la récupération des données');
        }

        const catalogueData: CatalogueApiResponse = await response.json();
        return catalogueData.categories;

    } catch (error){
        console.error('Erreur lors de la récupération des données de l\'évènement: ', error);
        throw error
    }
}