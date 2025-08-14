import DocumentGrid from '@/components/pages/downloads/documents-grid'
import DownloadsHero from '@/components/pages/downloads/hero-downloads'
import ContactUsCTA from '@/components/pages/home/contact-us-cta'
import FaqSection from '@/components/pages/home/faq-section'
import React from 'react'

const page = () => {
    return (
        <>
            <DownloadsHero />
            <DocumentGrid />
            <ContactUsCTA />
            <FaqSection f={null} />

        </>
    )
}

export default page