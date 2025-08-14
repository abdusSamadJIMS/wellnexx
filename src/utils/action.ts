"use server";

import { Product, Testimonial } from "./type";

const baseUrl = process.env.BASE_URL || "";

export async function getProducts(): Promise<Product[]> {
    const url = `${baseUrl}/api/method/wellnex.api.product.get_all_products`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // Include auth headers if needed, or remove if guest access
                "Authorization": `token ${process.env.API_KEY}:${process.env.API_SECRET}`,
            },
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.statusText}`);
        }

        // Parse the full response JSON
        const json = await response.json();

        if (json.message?.status !== "success") {
            throw new Error(json.message?.message || "API returned error");
        }

        // The actual data array is inside message.data
        const products: Product[] = json.message.data;
        console.log("Product\n\n\t", products[0])
        return products;

    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}


export async function getTestimonials(): Promise<Testimonial[]> {
    const fields = ["name", "name1", "message", "designation", "city", "image"];
    const url = `${baseUrl}/api/v2/document/Testimonial?fields=${encodeURIComponent(JSON.stringify(fields))}&limit=5`

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // Include auth headers if needed, or remove if guest access
                "Authorization": `token ${process.env.API_KEY}:${process.env.API_SECRET}`,
            },
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch testimonials: ${response.statusText}`);
        }

        // Parse the full response JSON
        const testimonials = (await response.json()).data
        return testimonials;

    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}


