import React from 'react';
import bgImage from '@/../public/images/bg/home-bg.jpg';
import { companyDetails } from '@/utils/constant/company';
import Link from 'next/link';

const HeroSection = () => {
    const bgImageSrc = bgImage.src;

    return (
        <section
            className="relative  bg-fixed bg-center bg-cover text-white"
            style={{ backgroundImage: `url(${bgImageSrc})` }}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <div className="relative z-10 flex flex-col justify-center items-start max-w-6xl px-6 md:px-12 lg:px-20 py-40 mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-sky-100 drop-shadow-xl">
                    {companyDetails.name}, <br className="hidden md:block" /> Best Pharmaceutical Of India
                </h1>

                <p className="mt-6 text-lg md:text-xl font-medium text-white/90 max-w-2xl leading-relaxed drop-shadow">
                    Empowering Clinics & Pharmacies with Trusted, High-Quality Pharmaceutical Products —
                    Consistent, Compliant, and Ready When You Are.
                </p>

                <div className="mt-8">
                    <Link
                        href="/our-products"
                        className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 transition px-7 py-3 rounded-full text-white text-base md:text-lg font-semibold shadow-lg"
                    >
                        Explore Our Products
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-arrow-right"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
