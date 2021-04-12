export interface Categories {
    id: string;
    name: string;
    description: string;
    subcategories: Array<String>;
    url: string;
}

export interface CategoriesGetResponse {
    categories: Array<Categories>;
    cursor: string;
}
