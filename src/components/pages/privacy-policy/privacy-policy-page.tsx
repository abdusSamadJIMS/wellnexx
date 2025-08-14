'use client'

import React from 'react'

const PrivacyPolicyPage = () => {
    return (
        <section className="min-h-screen bg-slate-50 py-24 px-6 md:px-10 text-gray-800">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-primary">Privacy Policy</h1>
                <p className="text-gray-600 mb-8 ">
                    Last updated: July 12, 2025
                </p>

                <div className="space-y-10 text-base leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
                        <p>
                            At <strong>WellPath Pharmaceuticals</strong>, we are committed to safeguarding the privacy of our customers and visitors. This privacy policy outlines how we collect, use, and protect your personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
                        <p>We may collect the following types of information:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Full name and contact details (email, phone)</li>
                            <li>Demographic and location information</li>
                            <li>Information submitted via forms (e.g. job applications, product inquiries)</li>
                            <li>Browser data via cookies and analytics</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Respond to your inquiries and requests</li>
                            <li>Process job or distributor applications</li>
                            <li>Improve website experience and performance</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">4. Sharing Your Data</h2>
                        <p>
                            We do not sell your data. We may share it with trusted third-party partners for services such as analytics, hosting, or recruitment — only when necessary and with strict confidentiality.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Access the personal data we hold about you</li>
                            <li>Request corrections or deletion</li>
                            <li>Withdraw consent at any time</li>
                            <li>Raise a complaint with a regulatory authority</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">6. Cookies & Tracking</h2>
                        <p>
                            We use cookies to enhance your browsing experience. These may include analytics cookies, functional cookies, and preferences. You can manage or disable them via your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">7. Data Retention</h2>
                        <p>
                            We retain your data only as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
                        <p>
                            If you have any questions about this privacy policy or wish to exercise your rights, please contact our Data Privacy Officer at:
                        </p>
                        <p className="mt-3 font-medium text-primary">
                            Email: <a href="mailto:privacy@wellpath.in" className="hover:underline">privacy@wellpath.in</a><br />
                            Phone: +91 9568096888
                        </p>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicyPage
