'use client'

import React from 'react'
import bgImage from '@/../public/images/bg/home-bg.jpg' // Use a clean, modern photo — a lab, clinic, or team
import { companyDetails } from '@/utils/constant/company'

const AboutHero = () => {
    const bgImageSrc = bgImage.src

    return (
        <section
            className="relative min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${bgImageSrc})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-sky-900/40 to-white/10 backdrop-blur-[2px] saturate-150" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-white text-left animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-sky-100 drop-shadow-lg leading-tight">
                    Who We Are at <span className="text-primary">{companyDetails.name}</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed font-medium">
                    Our journey is rooted in trust, compliance, and care. From GMP-certified processes to doorstep delivery,
                    we help clinics and pharmacies serve patients better — across India and beyond.
                </p>

                <div className="mt-8">
                    <button className="bg-primary hover:bg-primary/90 transition px-6 py-3 rounded-full text-white font-semibold shadow-lg shadow-primary/30">
                        Explore Our Journey
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AboutHero
