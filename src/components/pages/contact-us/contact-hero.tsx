'use client'

import { MoveDownRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const ContactHero = () => {
    return (
        <section className="relative bg-gradient-to-tr from-blue-50 via-white to-sky-100 py-32">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                    Let’s <span className="text-primary">Connect</span>
                </h1>
                <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
                    Whether you’re a clinic, pharmacy, or partner — we’re here to help. Reach out with any questions, inquiries, or just to say hi.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#contact-form" className="btn btn-primary px-6 text-white text-base shadow-md">
                        Get in Touch
                        <MoveDownRight className="w-4 h-4 ml-2" />
                    </a>

                    <Link
                        href="https://wa.me/919999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline border-gray-300 text-gray-700 hover:border-green-500 hover:text-green-600"
                    >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Chat on WhatsApp
                    </Link>
                </div>
            </div>

            {/* Optional Background SVG / Illustration */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <svg
                    className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 scale-125"
                    width="800"
                    height="400"
                    viewBox="0 0 800 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="400" cy="200" r="180" fill="url(#gradient)" />
                    <defs>
                        <radialGradient id="gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 200) scale(200)">
                            <stop stopColor="#0ea5e9" stopOpacity="0.2" />
                            <stop offset="1" stopColor="#0ea5e9" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
        </section>
    )
}

export default ContactHero
