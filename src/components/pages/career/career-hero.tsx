'use client'

import Image from 'next/image'
import Link from 'next/link'
import img from '@/../public/images/bg/home-bg.jpg'

const CareerHeroSection = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-sky-100 overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={img}
                    alt="Join our team"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                    Build a <span className="text-primary">Healthier Future</span> with Us
                </h1>

                <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                    At Wellnex pharmaceutical Life Science, we’re redefining healthcare through trust, innovation, and teamwork.
                    If you&apos;re passionate about purpose and impact — you belong here.
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                    <Link href="/careers#openings" className="btn btn-primary text-white px-6">
                        View Openings
                    </Link>
                    <Link href="/contact" className="btn btn-outline-primary px-6">
                        Join Our Team
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CareerHeroSection
