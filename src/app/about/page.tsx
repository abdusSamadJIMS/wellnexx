import AboutHero from '@/components/pages/about/about-hero'
import MissionVisionSection from '@/components/pages/about/mission-vision-section'
import TeamSnapshot from '@/components/pages/about/team-snapshot'
import UspsSection from '@/components/pages/about/usp-section'
// import CertificationsSection from '@/components/pages/home/certification-section'
import ContactUsCTA from '@/components/pages/home/contact-us-cta'
import FaqSection from '@/components/pages/home/faq-section'
import Testimonials from '@/components/pages/home/testimonial'
import { testimonials } from '@/utils/constant/products'
import React from 'react'

const page = () => {
    return (
        <>
            <AboutHero />
            <MissionVisionSection />
            <UspsSection />
            <TeamSnapshot />
            {/* <CertificationsSection /> */}
            <Testimonials testimonials={testimonials} />
            <ContactUsCTA />
            <FaqSection f={null} />
        </>
    )
}

export default page