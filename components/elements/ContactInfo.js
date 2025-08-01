import React from 'react';
import Link from 'next/link';

const contactInfo = [
    { title: "Contact Us", href: "/" },
    { title: "About Us", href: "/" },
    { title: "Our Impact", href: "/" },
    { title: "Our Values", href: "/" },
    { title: "Resources", href: "/" },
    { title: "Videos", href: "/" },
];

function ContactInfo() {
    return (
        <>

        <ul>
            {contactInfo.map((menu, index) => (
                <li key={index}>
                    <Link href={menu.href}>{menu.title}</Link>
                </li>
            ))}
        </ul>

        </>
    )
}
export default ContactInfo