import React from 'react';
import Link from 'next/link';

const servicesList = [
    { title: "UI Design", href: "/page-service-details" },
    { title: "Web Design", href: "/page-service-details" },
    { title: "Branding", href: "/page-service-details" },
    { title: "WebFlow", href: "/page-service-details" },
    { title: "Development", href: "/page-service-details" },
];

function ServicesList() {
    return (
        <>

        <ul>
            {servicesList.map((service, index) => (
                <li key={index}>
                    <Link href={service.href}>{service.title}</Link>
                </li>
            ))}
        </ul>

        </>
    )
}
export default ServicesList