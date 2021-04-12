export interface Products {
    id: string;
    name: string;
    description: string;
    value: number;
    promotional_value?: number;
    featured_image: string;
    images: Array<String>;
    videos: Array<String>;
    rating_stars: number;
    rating_count: number;
    installment_available: boolean;
    installment_count: number;
    featured: boolean;
    animal_type: AnimalType;
    status: string;
    category: string;
    subcategory: string;
    url: string;
    created_at: string;
}

export interface ProductsGetResponse {
    products: Array<Products>;
    cursor: string;
}

export enum AnimalType {
    Cat = 'gato',
    Dog = 'cachorro',
    Others = 'outros'
}