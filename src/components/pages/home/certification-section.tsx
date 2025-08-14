'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const certifications = [
    {
        title: "GMP Certified",
        image: "https://static.vecteezy.com/system/resources/thumbnails/007/516/093/small_2x/gmp-good-manufacturing-practice-certified-round-stamp-on-white-background-vector.jpg",
        file: "/pdfs/certificates/gmp.pdf",
        description: "Certified under Good Manufacturing Practices (GMP) for maintaining consistent quality and safety in all production processes."
    },
    {
        title: "ISO 9001:2015",
        image: "https://static.vecteezy.com/system/resources/thumbnails/007/516/093/small_2x/gmp-good-manufacturing-practice-certified-round-stamp-on-white-background-vector.jpg",
        file: "/pdfs/certificates/iso.pdf",
        description: "Internationally recognized ISO certification ensuring robust quality management systems and continuous improvement."
    },
    {
        title: "Drug License",
        image: "https://static.vecteezy.com/system/resources/thumbnails/007/516/093/small_2x/gmp-good-manufacturing-practice-certified-round-stamp-on-white-background-vector.jpg",
        file: "/pdfs/certificates/drug-license.pdf",
        description: "Authorized under the Drugs and Cosmetics Act to manufacture and distribute pharmaceutical products legally and ethically."
    },
    {
        title: "FSSAI Registration",
        image: "https://static.vecteezy.com/system/resources/thumbnails/007/516/093/small_2x/gmp-good-manufacturing-practice-certified-round-stamp-on-white-background-vector.jpg",
        file: "/pdfs/certificates/fssai.pdf",
        description: "Registered with the Food Safety and Standards Authority of India (FSSAI) for compliance in nutraceuticals and supplements."
    },
]



const CertificationsSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [randomTransforms, setRandomTransforms] = useState<{ [key: number]: string }>({})

    useEffect(() => {
        const newTransforms: { [key: number]: string } = {}
        certifications.forEach((_, idx) => {
            const rotate = Math.floor(Math.random() * 40 - 20)
            newTransforms[idx] = `rotate(${rotate}deg)`
        })
        setRandomTransforms(newTransforms)
    }, [])

    return (
        <section className="bg-gradient-to-tl from-blue-300 via-slate-100 to-white py-24">
            <div className="max-w-7xl mx-auto  px-6 md:px-10">
                {/* Header */}
                <div className="mb-16 text-left md:flex md:items-end md:justify-between">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Certifications & Compliance
                            <span className="block w-24 h-1 bg-primary mt-3 rounded-full" />

                        </h2>
                        <p className="text-lg text-gray-600 mt-4 max-w-xl">
                            We meet all regulatory and quality standards to ensure trust, safety, and transparency.
                        </p>
                    </div>
                </div>

                {/* Certification Cards */}
                <div className="flex flex-col">
                    {certifications.map((cert, idx) => (
                        <div
                            key={cert.title}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative bg-transparent border-y border-gray-200 py-6 transition-all hover:shadow-xs group"
                        >
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">{cert.title}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                {cert.description}
                            </p>

                            {/* Download button */}
                            <Link
                                href={cert.file}
                                target="_blank"
                                className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition"
                            >
                                Download PDF
                            </Link>

                            {/* Image on hover */}
                            {hoveredIndex === idx && (
                                <div
                                    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-32 h-40 bottom-20 right-72"
                                    style={{ transform: randomTransforms[idx] }}
                                >
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        className="object-cover rounded-lg shadow"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


export default CertificationsSection