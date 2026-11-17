import axios from "axios";

export interface ProductRating {
    rate: number;
    count: number;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ProductRating;
}

const api = axios.create({
    baseURL: "https://fakestoreapi.com",
    timeout: 15000,
});

export const getProducts = async (): Promise<Product[]> => {
    const response = await api.get<Product[]>("/products");
    return response.data;
};
