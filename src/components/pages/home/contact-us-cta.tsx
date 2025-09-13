'use client'

import Link from 'next/link'

const ContactUsCTA = () => {
    return (
        <section className="bg-gradient-to-br from-primary/80 to-blue-600 text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 text-center transition-all">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Ready to stock trusted medicines?
                </h2>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
                    Connect with us today to streamline your medical supply with certified and high-quality products.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/919876543210" // Replace with your actual WhatsApp number
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
                    >
                        Request a Callback
                    </a>

                    {/* Contact Page Button */}
                    <Link
                        href="/contact-us"
                        className="inline-block border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-primary transition"
                    >
                        Get in Touch
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default ContactUsCTA
