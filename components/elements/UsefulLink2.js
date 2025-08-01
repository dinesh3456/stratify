import React from 'react';
import Link from 'next/link';

const usefulLinks2 = [
    { title: "Audit & Assurance", href: "/" },
    { title: "Consulting", href: "/" },
    { title: "Risk Advisory", href: "/" },
    { title: "Financial Advisory", href: "/" },
    { title: "Legal", href: "/" },
    { title: "Tax", href: "/" },
];

function UsefulLinks2() {
    return (
        <>

        <ul>
            {usefulLinks2.map((menu, index) => (
                <li key={index}>
                    <Link href={menu.href}>{menu.title}</Link>
                </li>
            ))}
        </ul>

        </>
    )
}
export default UsefulLinks2