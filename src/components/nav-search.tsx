'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { Product } from '@/utils/type'
import { products } from '@/utils/constant/products'



const NavSearch = () => {
    const [query, setQuery] = useState('')
    const [filtered, setFiltered] = useState<Product[]>([])
    const [showAll, setShowAll] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (query.trim() === '') {
            setFiltered([])
            setShowAll(false)
            return
        }

        const lowerQuery = query.toLowerCase()

        const matched = products.filter(
            (p) =>
                p.product_name.toLowerCase().includes(lowerQuery) ||
                p.name.toLowerCase().includes(lowerQuery) ||
                p.drug_category.toLowerCase().includes(lowerQuery) ||
                p.compositions.some((c) => c.toLowerCase().includes(lowerQuery))
        )

        setFiltered(matched)
    }, [query])

    const handleNavigate = (product_code: string) => {
        router.push(`/our-products/${product_code.toLowerCase()}`)
        setQuery('')
        setFiltered([])
    }

    return (
        <div className="relative w-full max-w-xs text-white">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search product"
                className="input input-bordered w-full bg-transparent border-white text-white placeholder:text-white rounded-full pl-10"
            />
            <Search className="absolute left-3 top-3 w-5 h-5 text-white" />

            {filtered.length > 0 && (
                <div className="absolute mt-1 z-50 w-full bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200">
                    {filtered.slice(0, showAll ? filtered.length : 5).map((product) => (
                        <button
                            key={product.product_code}
                            onClick={() => handleNavigate(product.product_code)}
                            className="w-full text-left px-4 py-2 hover:bg-slate-100 text-sm border-b last:border-none"
                        >
                            <span className="font-medium">{product.product_name}</span>
                            <div className="text-xs text-gray-500">
                                {product.drug_category}
                            </div>
                        </button>
                    ))}

                    {!showAll && filtered.length > 5 && (
                        <button
                            onClick={() => setShowAll(true)}
                            className="w-full text-center px-4 py-2 bg-slate-50 hover:bg-slate-100 text-sm font-semibold text-primary"
                        >
                            Show {filtered.length - 5} more...
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

export default NavSearch
