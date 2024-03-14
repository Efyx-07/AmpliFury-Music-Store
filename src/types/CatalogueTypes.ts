export interface Category {
    id: number;
    name: string;
    categoryImage: {
        source: string;
        alt: string;
    }
    products: Product[];
}

export interface Product {
    id: number;
    reference: string;
    type: string;
    brand: string;
    model: string;
    image_source: string;
    image_alt: string;
    price: string;
    quantity: number;
    available: boolean;
    description: string;
    reference_month: string;
    reference_year: string | number;
    color: string;
    cartQuantity: number;
    initialPrice: string;
}

export interface CatalogueApiResponse {
    categories: Category[];
}