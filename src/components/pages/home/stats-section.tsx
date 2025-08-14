'use client'

import { cn } from '@/utils/constant/utils'
import { useEffect, useRef, useState } from 'react'

interface StatItemProps {
    label: string
    end: number
    prefix?: string
    suffix?: string
    className?: string
}

const StatItem = ({ label, end, prefix = '', suffix = '', className }: StatItemProps) => {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                let start = 0
                const duration = 2000
                const increment = end / (duration / 16)

                const timer = setInterval(() => {
                    start += increment
                    if (start >= end) {
                        clearInterval(timer)
                        setCount(end)
                    } else {
                        setCount(Math.floor(start))
                    }
                }, 16)

                observer.disconnect()
            }
        })

        observer.observe(node)
        return () => observer.disconnect()
    }, [end])

    return (
        <div
            ref={ref}
            className={cn(
                "group rounded-2xl p-6 shadow-md bg-white/70 backdrop-blur-sm border border-gray-200 hover:shadow-xl transition h-32",
                className
            )}
        >
            <div className="text-2xl md:text-5xl font-bold text-primary text-center">
                {prefix}{count}{suffix}
            </div>
            <p className="text-xs font-extrabold text-gray-600 mt-2 text-center">
                {label}
            </p>
            <hr
                className="w-0 group-hover:w-8 mx-auto border-t-2 rounded-full transition-all duration-300 origin-center"
            />
        </div>

    )
}

const stats = [
    { label: 'Clients Served', end: 100, suffix: '+' },
    { label: 'Dispatch Time', end: 72, prefix: '24–', suffix: ' hr' },
    { label: 'Product Variants', end: 50, suffix: '+' },
    { label: 'Cities Covered', end: 35, suffix: '+' },
    { label: 'Clinics & Pharmacies', end: 300, suffix: '+' },
]

const StatsSection = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
            {/* Glows */}
            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-primary/20 blur-[120px] rounded-full z-0" />
            <div className="absolute bottom-[-100px] right-[-100px] w-[200px] h-[200px] bg-blue-300/20 blur-[100px] rounded-full z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            <span className="block w-24 h-1 bg-primary mt-3 rounded-full" />

                            Trusted by Healthcare<br />Professionals Nationwide
                        </h2>
                        <p className="text-lg text-gray-600 max-w-md">
                            We help pharmacies, clinics, and medical distributors access high-quality branded medicine — reliably, and at scale.
                        </p>
                    </div>

                    {/* Right Stats */}
                    <div className="grid grid-cols-12 gap-4 md:gap-6">
                        <div className="col-span-6 md:col-span-4">
                            <StatItem {...stats[0]} />
                        </div>
                        <div className="col-span-6 md:col-span-8">
                            <StatItem {...stats[1]} />
                        </div>
                        <div className="col-span-6 md:col-span-4">
                            <StatItem {...stats[2]} />
                        </div>
                        <div className="col-span-6 md:col-span-4">
                            <StatItem {...stats[3]} />
                        </div>
                        <div className="col-span-6 md:col-span-4">
                            <StatItem {...stats[4]} />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default StatsSection
