/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useMemo, SetStateAction } from "react"
// import { Input } from "@/components/ui/input" // Replace with your own Input
// import products from "./product.json"
import Image from "next/image"
import { Product } from "@/utils/type"

// const categories = ["All", "Tablets", "Cream/Tube", "Soap", "Syrup", "Sexual", "Kids"]

export default function ProductShowcase({ products }: { products: Product[] }) {
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("All")
    const [price, setPrice] = useState(300)
    const [categories,] = useState(() => {
        const uniqueCategories = Array.from(new Set(products.map(i => i.drug_category)));
        uniqueCategories.unshift("All");
        return uniqueCategories;
    });

    const [rate] = useState(
        products.map(p => p.rate)
    )


    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesCategory = category === "All" || product.drug_category === category
            const matchesSearch =
                product.product_name.toLowerCase().includes(search.toLowerCase()) ||
                product.compositions.join(', ').toLowerCase().includes(search.toLowerCase())
            const matchesPrice = product.rate <= price
            return matchesCategory && matchesSearch && matchesPrice
        })
    }, [search, category, price])

    return (
        <section className="bg-slate-50 py-16 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h2 className="text-3xl font-bold text-gray-800">Browse Our Products</h2>
                    <input
                        type="text"
                        value={search}
                        onChange={(e: { target: { value: SetStateAction<string> } }) => setSearch(e.target.value)}
                        placeholder="Search by name or salt"
                        className="input w-full md:w-96 border rounded px-4 py-2"
                    />
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-8">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`px-4 py-2 rounded-full border hover:bg-primary hover:text-white transition text-sm ${category === cat ? "bg-primary text-white" : "bg-white text-gray-700"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4 mb-8">
                    <label htmlFor="price-range" className="text-sm font-medium text-gray-700">
                        Max Price: ₹{Math.max(...rate)}
                    </label>
                    <input
                        id="price-range"
                        type="range"
                        min={
                            Math.min(...rate)
                        }
                        max={
                            Math.max(...rate)
                        }
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="range range-primary"
                    />
                </div>

                {filteredProducts.length === 0 ? (
                    <p className="text-center text-gray-500">No products found.</p>
                ) : (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product, idx: number) => (
                            <div
                                key={product.name + idx}
                                className="card bg-white shadow hover:shadow-lg transition rounded-xl overflow-hidden"
                            >
                                <figure className="relative w-full h-40 bg-gray-100">
                                    {idx < 6 ? (
                                        <Image
                                            src={product.images[0].image}
                                            alt={product.product_name}
                                            fill
                                            className="object-contain p-4"
                                        />
                                    ) : (
                                        <Image
                                            src={product.images[0].image}
                                            alt={product.product_name}
                                            fill
                                            loading="lazy"
                                            className="object-contain p-4"
                                        />
                                    )}
                                </figure>
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg text-gray-800 mb-1 truncate">
                                        {product.product_name}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-2 truncate">{product.compositions.join(', ')}</p>
                                    <div className="font-bold text-primary">₹{product.rate}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
