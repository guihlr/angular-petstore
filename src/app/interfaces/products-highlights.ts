export interface ProductsHighlights {

    id: string,
    name: string,
    description: string,
    value: number,
    promotional_value: number,
    featured_image: string,
    images: Array<String>,
    videos: Array<String>,
    rating_stars: number,
    rating_count: number,
    installment_available: boolean,
    installment_count: number,
    featured: boolean,
    category: string,
    subcategory: string,
    animal_type: AnimalType,
    status: string,
    url: string,
    created_at: string
}

export interface ProductsHighlightsGetResponse {
    productsHighlights: Array<ProductsHighlights>
    cursor: string;
}

export enum AnimalType {
    Cat = 'gato',
    Dog = 'cachorro',
    Others = 'outros'
}