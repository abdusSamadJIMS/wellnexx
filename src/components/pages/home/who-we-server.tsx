import React from 'react'
import Image from 'next/image'
import clinicsIcon from '@/../public/images/icons/clinic.png'
import pharmaciesIcon from '@/../public/images/icons/pharmacy.png'
import wholesaleIcon from '@/../public/images/icons/wholesaler.png'
import Link from 'next/link'

const clients = [
    {
        title: "Small Clinics",
        icon: clinicsIcon,
        description:
            "We provide trusted, fast-moving medicines in flexible pack sizes — perfect for day-to-day patient needs at small and mid-sized clinics.",
    },
    {
        title: "Chain Pharmacies",
        icon: pharmaciesIcon,
        description:
            "Consistent stock availability and reliable formulations that support your scale. We help you maintain uninterrupted shelves.",
    },
    {
        title: "Medical Wholesalers",
        icon: wholesaleIcon,
        description:
            "WellPath offers margin-friendly, high-demand products backed by batch certifications — ready for wide distribution.",
    },
]

const WhoWeServe = () => {
    return (
        <section className="py-24 bg-base-100 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Who We Serve

                        <span className="block  mx-auto w-24 h-1 bg-primary mt-3 rounded-full" />

                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our solutions are built to support the entire healthcare supply chain, from local clinics to large distributors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {clients.map((client, idx) => (
                        <div
                            key={idx}
                            className="bg-white/90 border border-gray-200 hover:border-primary backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group text-center"
                        >
                            <div className="flex justify-center mb-6">
                                <Image
                                    src={client.icon}
                                    alt={`${client.title} icon`}
                                    width={60}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition">
                                {client.title}
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {client.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Optional CTA */}
                <div className="text-center mt-14">
                    <Link href={'/contact-us'} className="btn btn-primary btn-wide text-white shadow-lg">
                        Get in Touch

                        <svg xmlns="http://www.w3.org/2000/svg" width="18 " height="18 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default WhoWeServe
