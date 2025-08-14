'use client'

import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

const WhatsAppCTA = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Link
                href="https://wa.me/919568096888" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success shadow-lg text-white gap-2 px-4 py-2 rounded-full hover:scale-105 transition-transform"
            >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
            </Link>
        </div>
    )
}

export default WhatsAppCTA
