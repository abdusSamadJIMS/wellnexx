'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import missionVisionImg from '@/../public/images/illustrate/vision.png' // Add a sleek SVG or Lottie if needed

const MissionVisionSection = () => {
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        el.classList.add('animate-fade-in-up')
    }, [])

    return (
        <section className="relative bg-gradient-to-tr from-blue-50 via-white to-slate-100 py-24 overflow-hidden">            <div
            ref={ref}
            className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
            {/* Text Block */}
            <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-snug">
                    Our <span className="text-primary">Mission</span> &{' '}
                    <span className="text-primary">Vision</span>
                </h2>

                <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Mission</h3>
                        <div className='h-[0.1rem] bg-blue-900 w-10 -mt-2 mb-1' />
                        <p className='text-sm'>
                            To <span className="font-bold text-gray-900 ">empower healthcare</span> providers by
                            delivering safe, high-quality, and affordable pharmaceutical products — ensuring
                            every clinic and pharmacy across India has what it needs, when it needs it.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Vision</h3>
                        <div className='h-[0.1rem] bg-blue-900 w-10 -mt-2 mb-1' />
                        <p className='text-sm'>
                            To become the <span className="font-bold text-primary ">most trusted partner</span>{' '}
                            in medical supply — enabling better health outcomes through reliability, innovation,
                            and deep-rooted compliance.
                        </p>
                    </div>
                </div>
            </div>

            {/* Illustration Block */}
            <div className="relative w-full h-96 md:h-[500px]">
                <Image
                    src={missionVisionImg}
                    alt="Mission and Vision"
                    fill
                    className="object-contain md:object-cover rounded-xl grayscale-0"
                    priority
                />
            </div>
        </div>
        </section>
    )
}

export default MissionVisionSection
