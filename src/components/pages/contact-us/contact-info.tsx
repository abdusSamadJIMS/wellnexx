'use client'

import { companyDetails } from '@/utils/constant/company'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const ContactInfo = () => {
    return (
        <section className="bg-white py-24" id="contact-info">
            <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                {/* Contact Details */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-gray-900">Contact Information</h2>
                    <p className="text-gray-600  max-w-md">
                        Have a question or need help? Feel free to reach out to us anytime. We’re happy to assist you.
                    </p>

                    <div className="space-y-4 mt-8">
                        <div className="flex items-start gap-4">
                            <Phone className="text-primary w-6 h-6 mt-1" />
                            <div>
                                <p className="text-sm text-gray-500">Call Us</p>
                                <p className="font-medium text-gray-800">{companyDetails.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Mail className="text-primary w-6 h-6 mt-1" />
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium text-gray-800">{companyDetails.mail}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="text-primary w-6 h-6 mt-1" />
                            <div>
                                <p className="text-sm text-gray-500">Address</p>
                                <p className="font-medium text-gray-800">
                                    WellPath Pharmaceuticals,<br />
                                    Chakrota Road, UP 247001, India
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="text-primary w-6 h-6 mt-1" />
                            <div>
                                <p className="text-sm text-gray-500">Working Hours</p>
                                <p className="font-medium text-gray-800">Mon – Sat: 10:00 AM – 7:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Embed */}
                <div className="rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        title="WellPath Map Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55304.79599295493!2d77.51522754361177!3d29.963627040582686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eea921f841f45%3A0x39baf780903811f!2sSaharanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1759161282359!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[400px] border-0"
                    />
                </div>
            </div>
        </section>
    )
}

export default ContactInfo
