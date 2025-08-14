'use client'

import React, { useEffect, useState } from 'react'
import { companyDetails } from '@/utils/constant/company'
import logo from "@/../public/images/logo/logo.png"
import Link from 'next/link'
import Image from 'next/image'
import NavLinks from './nav-links'
import NavSearch from './nav-search'
import { Menu } from 'lucide-react'
import clsx from 'clsx'

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < 30) {
                setShow(true);
            } else if (currentScrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* Navbar */}
            <nav
                className={clsx(
                    'navbar shadow-sm justify-between fixed z-50 bg-blue-950 px-4 transition duration-500',
                    show ? 'translate-y-0' : '-translate-y-full'
                )}
            >
                <div className="flex items-center gap-2">
                    <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-white">
                        <Menu className="w-6 h-6" />
                    </button>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt={companyDetails.name}
                            width={150}
                            height={150}
                            className="bg-white rounded-xl"
                        />
                    </Link>
                </div>

                <div className="hidden lg:flex">
                    <NavLinks />
                </div>
                <div className="hidden lg:flex">
                    <NavSearch />
                </div>
            </nav>

            {/* Sidebar for mobile */}
            <div
                className={clsx(
                    'fixed inset-0 z-50 bg-black/40 lg:hidden transition-opacity duration-300',
                    sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                )}
                onClick={() => setSidebarOpen(false)}
            >
                <div
                    className={clsx(
                        'fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-blue-950 to-slate-800 text-white p-6 shadow-xl transform transition-transform duration-300',
                        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center mb-6">
                        <Link href="/" onClick={() => setSidebarOpen(false)}>
                            <Image
                                src={logo}
                                alt={companyDetails.name}
                                width={120}
                                height={120}
                                className="rounded bg-white"
                            />
                        </Link>
                        <button onClick={() => setSidebarOpen(false)} className="text-white text-2xl">✕</button>
                    </div>

                    <div className="mb-6">
                        <NavSearch />
                    </div>

                    <div className="space-y-4">
                        <NavLinks />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar