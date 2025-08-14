'use client'

// import Image from 'next/image'
// import Link from 'next/link'

// const posts = [
//     {
//         title: 'How to Build Trust in the Pharmaceutical Supply Chain',
//         excerpt:
//             'Transparency and quality assurance are key pillars of a reliable medicine brand. Learn how we maintain trust from production to delivery.',
//         image: '/images/blog/trust.jpg',
//         href: '/blog/trust-in-supply-chain',
//         className: 'col-span-6 row-span-2',
//     },
//     {
//         title: 'Understanding GMP and Why It Matters',
//         excerpt:
//             'What is GMP and why is it crucial for your medical practice or pharmacy? A quick read on quality protocols.',
//         image: '/images/blog/gmp.jpg',
//         href: '/blog/gmp-importance',
//         className: 'col-span-3 row-span-1',
//     },
//     {
//         title: 'Delivery That Keeps Clinics Running',
//         excerpt:
//             'See how we’ve optimized our logistics to reduce downtime for clinics and pharmacies.',
//         image: '/images/blog/delivery.jpg',
//         href: '/blog/delivery-efficiency',
//         className: 'col-span-3 row-span-1',
//     },
//     {
//         title: 'The Future of White-Label Medicines in India',
//         excerpt:
//             'A growing market, a scalable model — learn why white-label is booming and what it means for your business.',
//         image: '/images/blog/white-label.jpg',
//         href: '/blog/future-of-white-label',
//         className: 'col-span-6 row-span-1',
//     },
// ]

const BlogSection = () => {
    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Insights & Resources</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Stay informed with articles on pharma, compliance, logistics, and more.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-6 auto-rows-[200px] md:auto-rows-[250px]">
                    {/* Large 2x2 card */}
                    <div className="col-span-2 row-span-2 relative bg-gray-100 rounded-xl overflow-hidden shadow">
                        <div className="p-6 flex flex-col justify-end h-full">
                            <h3 className="text-xl font-bold text-gray-800">How to Build Trust in the Pharmaceutical Supply Chain</h3>
                            <p className="text-sm text-gray-600 mt-2">
                                Learn how we maintain quality and trust from manufacturing to delivery.
                            </p>
                        </div>
                    </div>

                    {/* Two stacked 1x1 cards */}
                    <div className="col-span-1 row-span-1 relative bg-gray-100 rounded-xl overflow-hidden shadow">
                        <div className="p-4 flex flex-col justify-end h-full">
                            <h4 className="text-md font-semibold text-gray-800">Understanding GMP</h4>
                            <p className="text-sm text-gray-600">Quick dive into good manufacturing practices.</p>
                        </div>
                    </div>

                    <div className="col-span-1 row-span-1 relative bg-gray-100 rounded-xl overflow-hidden shadow">
                        <div className="p-4 flex flex-col justify-end h-full">
                            <h4 className="text-md font-semibold text-gray-800">Reliable Delivery</h4>
                            <p className="text-sm text-gray-600">How we reduce downtime for clinics and stores.</p>
                        </div>
                    </div>

                    {/* Bottom full-width card */}
                    <div className="col-span-3 row-span-1 relative bg-gray-100 rounded-xl overflow-hidden shadow">
                        <div className="p-6 flex flex-col justify-end h-full">
                            <h4 className="text-xl font-semibold text-gray-800">The Future of White-Label Medicines in India</h4>
                            <p className="text-sm text-gray-600 mt-2">Why white-label is booming and what it means for you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BlogSection
