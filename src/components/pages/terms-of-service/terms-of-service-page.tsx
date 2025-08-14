'use client'

import React from 'react'

const TermsOfService = () => {
    return (
        <section className="py-24 bg-white px-6 md:px-10 text-gray-800">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4 text-primary">Terms of Service</h1>
                <p className="text-gray-600 mb-8">
                    Last updated: July 12, 2025
                </p>

                <div className="space-y-10 text-base leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-semibold mb-2">1. Agreement to Terms</h2>
                        <p>
                            By accessing or using the WellPath Pharmaceuticals website, you agree to be bound by these Terms of Service and all applicable laws. If you do not agree, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">2. Website Use</h2>
                        <p>
                            You may use this website only for lawful purposes. You must not misuse it in a way that could damage, disable, or interfere with any other party’s use or security of the platform.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">3. Product Information</h2>
                        <p>
                            All product information, including pricing and availability, is subject to change without notice. We strive to ensure accuracy but do not guarantee that descriptions or other content is error-free.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">4. Intellectual Property</h2>
                        <p>
                            All content, including text, images, branding, and trademarks, is the property of WellPath Pharmaceuticals or its licensors. Unauthorized use is strictly prohibited.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">5. Third-Party Links</h2>
                        <p>
                            Our website may contain links to external websites. We are not responsible for the content, privacy practices, or policies of those third-party sites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">6. Limitation of Liability</h2>
                        <p>
                            We are not liable for any direct, indirect, or consequential damages resulting from the use of our site or products, even if advised of the possibility of such damages.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">7. Termination</h2>
                        <p>
                            We reserve the right to suspend or terminate your access to our services at any time without prior notice, especially if you violate these Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">8. Governing Law</h2>
                        <p>
                            These Terms shall be governed and interpreted in accordance with the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in [your city/state].
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">9. Changes to Terms</h2>
                        <p>
                            We may update these Terms from time to time. Any changes will be posted on this page with the updated date. Your continued use of the website means you accept those changes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
                        <p>
                            For questions or concerns about these Terms, please contact us at:
                        </p>
                        <p className="mt-3 font-medium text-primary">
                            Email: <a href="mailto:legal@wellpath.in" className="hover:underline">legal@wellpath.in</a><br />
                            Phone: +91 9568096888
                        </p>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default TermsOfService
