'use client'

import {
    ShieldCheck,
    Truck,
    CheckCircle,
    Headset,
    Layers3,
    TimerReset,
} from 'lucide-react'

const uspData = [
    {
        title: "100% Compliant",
        icon: ShieldCheck,
        description:
            "We strictly follow all drug safety, licensing, and quality regulations to ensure trust and transparency.",
    },
    {
        title: "Pan-India Delivery",
        icon: Truck,
        description:
            "Our strong distribution network ensures fast and consistent delivery across the country.",
    },
    {
        title: "Quality You Can Trust",
        icon: CheckCircle,
        description:
            "Manufactured in GMP and ISO-certified facilities, our products undergo rigorous quality checks.",
    },
    {
        title: "Dedicated Support",
        icon: Headset,
        description:
            "From product guidance to order tracking, our expert team is always ready to assist you.",
    },
    {
        title: "Flexible MOQs",
        icon: Layers3,
        description:
            "We cater to both large and small businesses by offering flexible minimum order quantities.",
    },
    {
        title: "Fast Dispatch",
        icon: TimerReset,
        description:
            "Orders are dispatched within 24–72 hours, ensuring you’re never out of stock.",
    },
]

const USPSection = () => {
    return (
        <section className="bg-gradient-to-tr from-white via-slate-50 to-blue-50 py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
                    What Makes Us <span className="text-primary">Different</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {uspData.map((usp, idx) => (
                        <div
                            key={idx}
                            className="group p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300"
                        >
                            <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-blue-50 group-hover:bg-primary/10 transition">
                                <usp.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                            </div>

                            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition">
                                {usp.title}
                            </h4>
                            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                {usp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default USPSection
