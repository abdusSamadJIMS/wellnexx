import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/utils/type'

// Mock product data – replace with real data or map from props
// const products = [
//     {
//         name: "Amoxicillin 500mg",
//         image: "/images/products/amoxicillin.png",
//         composition: "Amoxicillin 500mg",
//         pack: "10x10 Capsules",
//     },
//     {
//         name: "Paracetamol 650mg",
//         image: "/images/products/paracetamol.png",
//         composition: "Paracetamol 650mg",
//         pack: "10x15 Tablets",
//     },
//     {
//         name: "Cough Syrup",
//         image: "/images/products/cough-syrup.png",
//         composition: "Dextromethorphan + Chlorpheniramine",
//         pack: "100ml Bottle",
//     },
//     {
//         name: "Vitamin D3",
//         image: "/images/products/vitamin-d3.png",
//         composition: "Cholecalciferol 60,000 IU",
//         pack: "4 Softgel Capsules",
//     }
// ]

const OurProducts = ({ products }: { products: Product[] }) => {
    return (
        <section className="py-20 bg-base-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-2 inline-block relative text-gray-900">
                        Our Products
                        <span className="block w-24 h-1 bg-primary mx-auto mt-3 rounded-full" />
                    </h2>
                    <p className="text-lg text-gray-500 max-w-xl mx-auto mt-2">
                        Explore our most trusted and in-demand pharmaceutical offerings.
                    </p>
                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.slice(0, 4).map((product, idx) => (
                        <div
                            key={idx}
                            className="bg-white/90 backdrop-blur-md border border-gray-200 hover:border-primary rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
                        >
                            <figure className="px-6 pt-6">
                                <Image
                                    src={product.images[0].image}
                                    alt={product.name}
                                    width={160}
                                    height={160}
                                    className="rounded-xl object-contain mx-auto"
                                />
                            </figure>
                            <div className="card-body items-center text-center px-4 py-6">
                                <h3 className="text-lg font-semibold group-hover:text-primary transition">{product.product_name}</h3>
                                <p className="text-sm text-gray-600">{product.compositions.join(', ')}</p>
                                <p className="text-sm text-gray-500">{product.pack}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12">
                    <Link href="/our-products">
                        <button className="btn btn-primary btn-wide text-white shadow-lg">
                            View All Products

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default OurProducts
