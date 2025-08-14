'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

interface Product {
    id: number
    name: string
    slug: string
    category: string
    salt?: string
}

const allProducts: Product[] = [
    { id: 1, name: 'Welnisol-4 Tablets', slug: 'welnisol-4', category: 'tablets', salt: 'Methylprednisolone' },
    { id: 2, name: 'Welnex-OC Cream', slug: 'welnex-oc', category: 'cream/tube', salt: 'Ofloxacin, Miconazole' },
    { id: 3, name: 'Amilix-LB 625', slug: 'amilix-lb-625', category: 'tablets', salt: 'Amoxycillin' },
    { id: 4, name: 'Glowcyn 3D', slug: 'glowcyn-3d', category: 'cream/tube' },
    { id: 5, name: 'Welneem Plus Soap', slug: 'welneem-plus', category: 'soap' },
    { id: 6, name: 'Podoxcyn-50 Syrup', slug: 'podoxcyn-50', category: 'syrup' },
    // ... add more
]

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
        const matched = allProducts.filter(
            (p) =>
                p.name.toLowerCase().includes(lowerQuery) ||
                p.salt?.toLowerCase().includes(lowerQuery) ||
                p.category.toLowerCase().includes(lowerQuery)
        )

        setFiltered(matched)
    }, [query])

    const handleNavigate = (slug: string) => {
        router.push(`/products/${slug}`)
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
                            key={product.id}
                            onClick={() => handleNavigate(product.slug)}
                            className="w-full text-left px-4 py-2 hover:bg-slate-100 text-sm border-b last:border-none"
                        >
                            <span className="font-medium">{product.name}</span>
                            <div className="text-xs text-gray-500">{product.category}</div>
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
