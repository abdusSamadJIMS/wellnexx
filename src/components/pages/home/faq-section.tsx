'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const defaultFaqs = [
    {
        question: 'Do you offer white-label or custom branding?',
        answer:
            'Yes, we provide white-label options so your brand stays front and center. Our packaging and documentation are fully customizable.',
    },
    {
        question: 'How fast is the delivery?',
        answer:
            'We dispatch all orders within 24–72 hours depending on your location and stock availability. Real-time tracking is available.',
    },
    {
        question: 'Are your products legally compliant?',
        answer:
            'Absolutely. All medicines comply with national regulations and come with valid drug licenses and certifications.',
    },
    {
        question: 'Can I order in small or bulk quantities?',
        answer:
            'Yes, we cater to both small clinics and large distributors. Our flexible ordering system supports various order sizes.',
    },
    {
        question: 'How do I track my order or get support?',
        answer:
            'Once your order is placed, tracking details are shared. Our support team is always available via phone, email, or WhatsApp.',
    },
]

const FaqSection = ({ f }: { f: { question: string, answer: string }[] | null }) => {

    const [faqs, setfaqs] = useState<{ question: string, answer: string }[]>([])
    useEffect(() => {
        if (f) {
            setfaqs(f)
        } else {
            setfaqs(defaultFaqs)
        }


    }, [f])

    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-24 bg-base-100 border-t border-b border-gray-100">
            <div className="max-w-5xl mx-auto px-6 md:px-10">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
                    Frequently Asked Questions
                    <span className="block w-24 h-1 bg-primary mt-3 rounded-full mx-auto" />

                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = index === openIndex
                        return (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-xl bg-white/70 backdrop-blur shadow cursor-pointer"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50 transition cursor-pointer"
                                >
                                    <span className="text-base font-medium text-gray-800">{faq.question}</span>
                                    <ChevronDown
                                        className={`h-5 w-5 text-gray-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 py-2' : 'max-h-0'
                                        }`}
                                >
                                    <p className="text-sm text-gray-600">{faq.answer}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FaqSection
