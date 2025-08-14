'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import bgImage from '@/../public/images/bg/why-choose-us.jpg' // Add your background image here

const ProductHero = () => {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        el.classList.add('animate-fade-in-up')
    }, [])

    return (
        <section
            className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${bgImage.src})`,
            }}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            <div
                ref={ref}
                className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
                    Explore Our Range of Trusted Medicines
                </h1>
                <p className="text-lg md:text-xl font-medium text-white/90 mb-10 max-w-2xl mx-auto">
                    We deliver high-quality, compliant, and affordable pharmaceutical products — built on trust and proven performance.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/our-products"
                        className="bg-white text-primary px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
                    >
                        Browse Products
                    </Link>
                    <Link
                        href="/contact"
                        className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition"
                    >
                        Request Price List
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ProductHero
