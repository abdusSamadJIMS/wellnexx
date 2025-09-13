import Link from 'next/link'
import React from 'react'

const links = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Our Products",
        href: "/our-products"
    },
    // {
    //     label: "Career",
    //     href: "/career"
    // },
    {
        label: "Contact Us",
        href: "/contact-us"
    },
]

const NavLinks = () => {
    return (
        <ul className='sm:menu-horizontal menu gap-5 text-lg'>
            {
                links.map((item) => <NavLink href={item.href} label={item.label} key={item.href} />)
            }
        </ul>
    )
}

export default NavLinks


export const NavLink = ({ href, label }: { href: string, label: string }) => {
    return (
        <Link
            className='
        font-bold
        text-white
        hover:text-primary
        transition
        duration-300    
        '
            href={href}
        >
            {label}
        </Link>
    )
}