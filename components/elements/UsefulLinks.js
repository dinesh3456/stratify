import React from 'react';
import Link from 'next/link';

const usefulLinks = [
    { title: "About Us", href: "/page-about" },
    { title: "Services", href: "/page-services" },
    { title: "Blog", href: "/news-grid" },
    { title: "Contact", href: "/contact" },
];

function UsefulLinks() {
    return (
        <>

        <ul>
            {usefulLinks.map((menu, index) => (
                <li key={index}>
                    <Link href={menu.href}>{menu.title}</Link>
                </li>
            ))}
        </ul>

        </>
    )
}
export default UsefulLinks