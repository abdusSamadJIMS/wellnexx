import React from 'react'
import Image from 'next/image'
import qualityImg from "@/../public/images/bg/our-quality.jpg" // Replace with your own image

const OurQuality = () => {
    return (
        <section className="py-24 bg-base-100 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    {/* Left: Factory or QC Image */}
                    <div className="overflow-hidden rounded-2xl shadow-xl">
                        <Image
                            src={qualityImg}
                            alt="Factory or Quality Control"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover scale-100 hover:scale-105 transition-transform duration-700 ease-in-out"
                        />
                    </div>

                    {/* Right: Text Content */}
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            Our Quality Promise
                            <span className="block w-24 h-1 bg-primary mt-3 rounded-full" />

                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            We uphold the highest standards in pharmaceutical manufacturing to ensure our partners receive only the most reliable, compliant, and effective products.
                        </p>

                        <ul className="space-y-4 text-sm text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-lg">✔</span>
                                <span>
                                    <strong>Quality Assurance</strong> at every production stage, from sourcing to final packaging.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-lg">✔</span>
                                <span>
                                    <strong>Certified Compliances</strong> including GMP, ISO, and Drug License approvals.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary text-lg">✔</span>
                                <span>
                                    <strong>Batch-Level Testing</strong> to ensure purity, potency, and consistency every time.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurQuality
