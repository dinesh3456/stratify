import React from 'react';
import Link from 'next/link';

const socialLink = [
    { href: "https://facebook.com", icon: "fa-facebook-f" },
    { href: "https://twitter.com", icon: "fa-twitter" },
    { href: "https://instagram.com", icon: "fa-instagram" },
    { href: "https://linkedin.com", icon: "fa-linkedin-in" },
];

function SocialLinks() {
    return (
        <>

        <div className="socials">
            {socialLink.map((socialLink1, index) => (
            <Link key={index} href={socialLink1.href}>
                <i className={`fa-brands ${socialLink1.icon}`} />
            </Link>
            ))}
        </div>

        </>
    )
}
export default SocialLinks