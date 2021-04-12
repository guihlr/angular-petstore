export interface Categories {
    id: string;
    name: string;
    description: string;
    subcategories: Array<string>;
    url: string;
}

export interface CategoriesGetResponse {
    categories: Array<Categories>;
    cursor: string;
}
