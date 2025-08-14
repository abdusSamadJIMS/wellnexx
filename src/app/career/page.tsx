import ApplyForm from '@/components/pages/career/apply-form'
import CareerHeroSection from '@/components/pages/career/career-hero'
import HowWeHire from '@/components/pages/career/how-we-hire'
import OpenPositionsSection from '@/components/pages/career/open-position-section'
import WhyWorkWithUsSection from '@/components/pages/career/why-work-with-us-section'
import FaqSection from '@/components/pages/home/faq-section'
import React from 'react'


const faqs = [
    {
        question: 'What’s the salary structure?',
        answer: 'We offer competitive, market-aligned salaries with performance-based growth and yearly reviews.',
    },
    {
        question: 'Do you allow remote or hybrid work?',
        answer: 'Select roles are remote/hybrid depending on department needs. We support flexibility where possible.',
    },
    {
        question: 'Are roles full-time or contract-based?',
        answer: 'We mostly hire full-time, but project-based contracts are available for certain positions.',
    },
    {
        question: 'What does the hiring process look like?',
        answer: 'It includes application screening, a short call, one main interview, and the final offer round.',
    },
]
const page = () => {
    return (
        <>
            <CareerHeroSection />
            <WhyWorkWithUsSection />
            <OpenPositionsSection />
            <HowWeHire />
            <ApplyForm />
            <FaqSection
                f={faqs}
            />
        </>
    )
}

export default page