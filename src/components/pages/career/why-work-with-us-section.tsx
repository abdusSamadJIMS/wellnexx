'use client'

import { Briefcase, ShieldCheck, TrendingUp, Smile } from 'lucide-react'

const perks = [
    {
        title: 'Impactful Work',
        icon: <Briefcase className="w-8 h-8 text-primary" />,
        description:
            'Be part of a purpose-driven mission that supplies life-changing pharmaceutical solutions to communities across India.',
    },
    {
        title: 'Compliance-Driven Culture',
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        description:
            'Work in an ethical environment where quality, transparency, and regulatory compliance are part of our DNA.',
    },
    {
        title: 'Career Growth',
        icon: <TrendingUp className="w-8 h-8 text-primary" />,
        description:
            'We invest in your success through mentorship, learning opportunities, and a clear path to leadership.',
    },
    {
        title: 'People-First Environment',
        icon: <Smile className="w-8 h-8 text-primary" />,
        description:
            'Enjoy a friendly, collaborative workplace that supports work-life balance and individual wellbeing.',
    },
]
const WhyWorkWithUsSection = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                    Why Work <span className="text-primary">With Us</span>
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {perks.map((perk) => (
                        <div
                            key={perk.title}
                            className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 p-6 text-left group"
                        >
                            <div className="mb-4">{perk.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary">
                                {perk.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {perk.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyWorkWithUsSection
