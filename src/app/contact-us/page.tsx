import ContactForm from '@/components/pages/contact-us/contact-form'
import ContactHero from '@/components/pages/contact-us/contact-hero'
import ContactInfo from '@/components/pages/contact-us/contact-info'
import FaqSection from '@/components/pages/home/faq-section';
import React from 'react'

const faqs = [
    {
        question: "Do you deliver pan-India?",
        answer:
            "Yes, we deliver across India through our reliable logistics network. Even remote locations are covered to ensure uninterrupted medical supply.",
    },
    {
        question: "How can I become a distributor?",
        answer:
            "You can apply through the contact or careers page. Our business development team will reach out with the next steps within 2–3 business days.",
    },
    {
        question: "Where can I find product pricing?",
        answer:
            "You can request a price list from our products page or email us at sales@wellpath.in. Our team will respond promptly.",
    },
    {
        question: "Do you offer white-label manufacturing?",
        answer:
            "We currently focus on our in-house branded formulations to maintain quality and regulatory consistency.",
    },
    {
        question: "Are your products WHO-GMP certified?",
        answer:
            "Yes, all our manufacturing partners are WHO-GMP certified and comply with national and international quality standards.",
    },
    {
        question: "Can I order in bulk or for a clinic chain?",
        answer:
            "Absolutely. We support bulk procurement for clinics, pharmacies, and hospital chains. Reach out to our sales team to get a custom quote.",
    },
    {
        question: "What is your average delivery time?",
        answer:
            "Most orders are processed within 24 hours and delivered within 3–7 business days, depending on your location.",
    },
];

const page = () => {
    return (
        <>
            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <FaqSection f={faqs} />
        </>
    )
}

export default page