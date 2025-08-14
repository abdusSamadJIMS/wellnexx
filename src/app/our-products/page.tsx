import ProductHero from '@/components/pages/our-products/product-hero'
import ProductShowcase from '@/components/pages/our-products/product-showcase'
import { getProducts } from '@/utils/action'
import React from 'react'

const page = async () => {
    const products = await getProducts()

    return (
        <>
            <ProductHero />
            <ProductShowcase
                products={products}
            />
        </>)
}

export default page