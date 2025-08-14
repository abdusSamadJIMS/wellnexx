'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import founderImg from '@/../public/images/bg/why-choose-us.jpg'
import { UserRound } from 'lucide-react'

const TeamSnapshot = () => {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        el.classList.add('animate-fade-in-up')
    }, [])

    return (
        <section className="bg-gradient-to-b from-slate-50 to-white py-24">
            <div
                ref={ref}
                className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
                {/* Left: Image */}
                <div className="relative h-96 md:h-[500px] w-full rounded-xl overflow-hidden shadow-md">
                    <Image
                        src={founderImg}
                        alt="Founder of the Company"
                        fill
                        className="object-cover grayscale-0 hover:grayscale transition duration-300"
                        priority
                    />
                </div>

                {/* Right: Text */}
                <div className="text-left">
                    <div className="flex items-center gap-3 mb-4 text-primary">
                        <UserRound className="w-6 h-6" />
                        <span className="uppercase text-sm font-semibold tracking-widest">Meet the Founder</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        A Vision Born from Purpose
                    </h2>

                    <p className="text-gray-700 leading-relaxed ">
                        With a background in healthcare and a passion for accessibility, our founder established this company to
                        transform how clinics and pharmacies access essential medicines. From a single room to a nationwide
                        presence, the journey has always been about trust, quality, and impact.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TeamSnapshot
