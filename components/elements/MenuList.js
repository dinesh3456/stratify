import React from 'react';
import Link from 'next/link';

const menuLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/page-about" },
    { title: "Services", href: "/page-services" },
    { title: "Portfolio", href: "/page-portfolio" },
    { title: "Contact", href: "/contact" },
];

function MenuLinks() {
    return (
        <>

        <ul>
            {menuLinks.map((menu, index) => (
                <li key={index}>
                    <Link href={menu.href}>{menu.title}</Link>
                </li>
            ))}
        </ul>

        </>
    )
}
export default MenuLinks