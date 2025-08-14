'use client'

import { Briefcase, Search, Users, Handshake } from 'lucide-react'

const hiringSteps = [
    {
        title: 'Application',
        icon: <Briefcase className="w-5 h-5 text-primary" />,
        description: 'Submit your resume and tell us why you’re a great fit.'
    },
    {
        title: 'Screening',
        icon: <Search className="w-5 h-5 text-primary" />,
        description: 'Our team reviews your profile for the right match.'
    },
    {
        title: 'Interview',
        icon: <Users className="w-5 h-5 text-primary" />,
        description: 'Meet with team members to discuss your experience and goals.'
    },
    {
        title: 'Offer',
        icon: <Handshake className="w-5 h-5 text-primary" />,
        description: 'If we align, we’ll send you an offer to join our mission.'
    },
]

const HowWeHire = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
                    How We <span className="text-primary">Hire</span>
                </h2>

                <ul className="steps steps-vertical lg:steps-horizontal w-full items-start">
                    {hiringSteps.map((step, index) => (
                        <li key={index} className="step step-primary">
                            <div className="flex flex-col items-center justify-start text-left gap-4 w-48 mx-auto">
                                <div className="bg-blue-100 p-3 rounded-full">{step.icon}</div>
                                <h4 className="text-md font-semibold text-gray-800">{step.title}</h4>
                                <p className="text-sm text-gray-600">{step.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default HowWeHire
