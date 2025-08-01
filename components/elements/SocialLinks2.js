import React from 'react';
import Link from 'next/link';

const socialLink2 = [
    { href: "https://facebook.com", name: "Facebook" },
    { href: "https://twitter.com", name: "Twitter" },
    { href: "https://instagram.com", name: "Instagram" },
    { href: "https://linkedin.com", name: "LinkedIn" },
];

function SocialLinks2() {
    return (
        <>
            <ul className="socials">
                {socialLink2.map((social, index) => (
                    <li key={index}>
                        <Link href={social.href}>
                            {social.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default SocialLinks2;