'use client'

import React from 'react'

const DownloadsHero = () => {
    return (
        <section className="relative py-24 bg-gradient-to-br from-sky-50 via-white to-blue-50">
            <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Resources & <span className="text-primary">Downloads</span>
                </h1>
                <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Find all essential materials to support your medical and pharmaceutical needs — including product catalogs, MSDS sheets, compliance certificates, guidelines, brochures, and more.
                </p>
            </div>

            {/* Optional Decorative Blob or Illustration */}
            <div className="absolute -top-16 -right-16 opacity-10 pointer-events-none hidden md:block">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-80 h-80 fill-primary/10">
                    <path d="M44.3,-75.8C56.1,-66.8,64.8,-56.1,71.8,-43.6C78.8,-31.1,84.1,-15.5,82.7,-0.3C81.2,14.8,72.9,29.5,64,44.3C55.2,59.1,45.7,74,31.7,80.1C17.7,86.2,-0.8,83.5,-14.9,76.2C-29.1,68.9,-38.9,57,-51.8,45.4C-64.7,33.8,-80.7,22.5,-85.1,8.3C-89.5,-5.9,-82.3,-22.9,-71.3,-34.5C-60.3,-46,-45.6,-52.1,-32,-61.6C-18.4,-71.1,-6,-83.9,6.9,-93.3C19.8,-102.8,39.6,-108.7,44.3,-75.8Z" transform="translate(100 100)" />
                </svg>
            </div>
        </section>
    )
}

export default DownloadsHero
