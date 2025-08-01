import React from 'react';
import Link from 'next/link';

const supportLinks = [
    { title: "FAQS", href: "/page-faq" },
    { title: "Term & Conditions", href: "/" },
    { title: "Privacy policy", href: "/" },
    { title: "Help", href: "/contact" },
];

function SupportLinks() {
    return (
        <>

        <ul>
            {supportLinks.map((menu, index) => (
                <li key={index}>
                    <Link href={menu.href}>{menu.title}</Link>
                </li>
            ))}
        </ul>

        </>
    )
}
export default SupportLinks