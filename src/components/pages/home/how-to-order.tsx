import React from 'react'
import Image from 'next/image'

import browseIcon from '@/../public/images/icons/browse.png'
import quoteIcon from '@/../public/images/icons/quote-right.png'
import confirmIcon from '@/../public/images/icons/confirmation.png'
import deliveryIcon from '@/../public/images/icons/delivery.png'

const steps = [
    {
        title: "Browse Products",
        icon: browseIcon,
        description: "Explore our wide range of trusted formulations online.",
    },
    {
        title: "Request a Quote",
        icon: quoteIcon,
        description: "Select products and request pricing tailored to your needs.",
    },
    {
        title: "Approve & Confirm",
        icon: confirmIcon,
        description: "We finalize terms and prepare your order promptly.",
    },
    {
        title: "Get Delivery",
        icon: deliveryIcon,
        description: "Receive timely, tracked delivery right at your doorstep.",
    },
]

const HowToOrder = () => {
    return (
        <section className="relative py-28 bg-gradient-to-br from-white via-base-100 to-slate-100 overflow-hidden">
            {/* Decorative radial background */}
            <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-100 opacity-20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-primary opacity-10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How to Order
                        <span className="block w-24 mx-auto h-1 bg-primary mt-3 rounded-full" />


                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We’ve made the ordering process smooth, guided, and hassle-free — so you can focus on your practice.
                    </p>
                </div>

                {/* Timeline line */}
                <div className="relative before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:bg-primary/20 md:before:block before:hidden">
                    <div className="flex flex-col space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-10 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center md:items-start group relative ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                                    }`}
                            >
                                {/* Connector Dot */}
                                <div className="w-6 h-6 bg-primary rounded-full z-10 border-4 border-white shadow-md absolute left-1/2 -translate-x-1/2 top-1 md:top-3" />

                                {/* Icon bubble */}
                                <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary flex items-center justify-center mb-4 md:mb-0 md:mr-6 shadow-lg group-hover:scale-110 transition duration-300">
                                    <Image
                                        src={step.icon}
                                        alt={step.title}
                                        width={36}
                                        height={36}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Content Card */}
                                <div
                                    className={`bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-xl w-full md:w-[80%] group-hover:shadow-blue-200 transition-all ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                        }`}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-2">
                                        Step {index + 1}: {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-20">
                    <button className="btn btn-primary btn-wide text-white text-base shadow-md hover:scale-105 transition-transform">
                        Start Your Order
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HowToOrder
