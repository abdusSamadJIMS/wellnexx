export interface ProductImage {
    image: string;
    description: string | null;
}

export interface Product {
    name: string;
    product_code: string;
    product_name: string;
    rate: number;
    pack: string;
    drug_category: string;
    compositions: string[]
    images: ProductImage[];
}

export interface Testimonial {
    name: string;
    name1: string;
    designation: string;
    message: string;
    image: string;
    city: string
}