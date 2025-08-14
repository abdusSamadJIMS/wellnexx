import React from 'react'
import Image from 'next/image'
import bgImage from "@/../public/images/bg/why-choose-us.jpg"
import fastDelivery from '@/../public/images/icons/fast-delivery.png'
import formula from "@/../public/images/icons/formula.png"
import gmp from "@/../public/images/icons/gmp.png"
import trusted from "@/../public/images/icons/trusted.png"

// Card component
export const WhyChooseUsCards = () => {
    const cards = [
        {
            title: "Fast Delivery",
            icon: fastDelivery,
            description:
                "We ensure on-time delivery and a reliable stock flow — no backorders, no delays.",
        },
        {
            title: "Clear Formulations",
            icon: formula,
            description:
                "Clear, accurate labeling with complete ingredient disclosure on every pack.",
        },
        {
            title: "GMP & ISO Certified",
            icon: gmp,
            description:
                "Every product is made in facilities that meet the highest global quality standards.",
        },
        {
            title: "Trusted by Professionals",
            icon: trusted,
            description:
                "Over 100+ healthcare partners rely on us for safe, effective medicines.",
        },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="bg-white/90 backdrop-blur-md border border-gray-200 hover:border-primary p-6 rounded-2xl shadow-xl group transition-all duration-500 hover:-translate-y-1"
                >
                    <div className="flex items-center justify-between mb-5">
                        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition">
                            {card.title}
                        </h3>
                        <Image
                            src={card.icon}
                            alt={`${card.title} Icon`}
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{card.description}</p>
                </div>
            ))}
        </div>
    )
}

// Section wrapper
const WhyChoose = () => {
    return (
        <section
            className="min-h-[80vh] bg-fixed bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${bgImage.src})`,
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/60 z-0" />

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 relative inline-block">
                    Why Choose Us
                    <span className="block w-24 h-1 bg-primary mx-auto mt-3 rounded-full" />
                </h2>
                <p className="text-center text-gray-200 max-w-2xl mx-auto mb-10">
                    Our commitment to quality, trust, and reliability makes us a preferred choice for
                    clinics and pharmacies across the country.
                </p>
                <WhyChooseUsCards />
            </div>
        </section>
    )
}

export default WhyChoose
