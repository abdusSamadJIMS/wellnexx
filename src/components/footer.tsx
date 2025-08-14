'use client'

import Link from 'next/link'
import Image from 'next/image'
import logo from '@/../public/images/logo/logo.png'
import { companyDetails } from '@/utils/constant/company'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-white via-slate-50 to-blue-50 border-t border-gray-200/70">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Logo & About */}
                <div className="space-y-4">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <Image
                            src={logo}
                            alt="WellPath"
                            width={140}
                            height={140}
                            className="transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Supplying trusted medicines to clinics, pharmacies, and distributors across India. Fast, reliable, and always compliant.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Company</h4>
                    <ul className="space-y-3">
                        {[
                            ['About Us', '/about'],

                            ['Contact', '/contact'],
                            ['Blog', '/blog']
                        ].map(([name, path]) => (
                            <li key={name}>
                                <Link
                                    href={path}
                                    className="text-sm text-gray-600 hover:text-primary transition-all duration-500 flex items-start
                                    group
                                    "
                                >
                                    <span className="mr-2 group-hover:translate-x-1 ">→</span>
                                    <span>{name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Resources</h4>
                    <ul className="space-y-3">
                        {[

                            ['Downloads', '/downloads'],
                            ['Privacy Policy', '/privacy-policy'],
                            ['Terms of Service', '/terms']
                        ].map(([name, path]) => (
                            <li key={name}>
                                <Link
                                    href={path}
                                    className="text-sm text-gray-600 hover:text-primary transition-all duration-500 flex items-start group"
                                >
                                    <span className="mr-2 group-hover:translate-x-1">→</span>
                                    <span>{name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Get in Touch</h4>
                    <div className="space-y-3">
                        <p className="text-sm text-gray-600 flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Mon–Sat: 10am – 7pm
                        </p>
                        <p className="text-sm text-gray-600 flex items-center hover:text-primary transition-colors duration-300">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href="tel:+919999999999">+91 99999 99999</a>
                        </p>
                        <p className="text-sm text-gray-600 flex items-center hover:text-primary transition-colors duration-300">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:support@wellpath.in">support@wellpath.in</a>
                        </p>
                    </div>

                    <div className="flex space-x-4 pt-2">
                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 group"
                            aria-label="WhatsApp"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="group-hover:text-green-500 transition-colors duration-300"
                                fill="currentColor"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 group"
                            aria-label="LinkedIn"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="group-hover:text-blue-600 transition-colors duration-300"
                                fill="currentColor"
                            >
                                <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 text-center text-sm text-gray-500 border-t border-gray-100/50 py-6">
                © {new Date().getFullYear()} {companyDetails.name}. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer