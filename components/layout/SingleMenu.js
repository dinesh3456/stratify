import Link from 'next/link';
import React from 'react';

const MenuSingle = () => {
    return (

        <ul>
            <li><Link href="#home-menu">Home</Link></li>
            <li><Link href="#about-menu">About</Link></li>
            <li><Link href="#service-menu">Services</Link></li>
            <li><Link href="#team-menu">Team</Link></li>
            <li><Link href="#blog-menu">Blog</Link></li>
            <li><Link href="#contact-menu">Contact</Link></li>
        </ul>
        
    );
};

export default MenuSingle;