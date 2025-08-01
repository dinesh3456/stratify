import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <ul>
      {/* 1. Home - Simple link without dropdown */}
      <li>
        <Link href="/">Home</Link>
      </li>

      {/* 2. Services - Dropdown with your 5 core services */}
      <li>
        <Link href="/">
          Services <i className="fa-solid fa-angle-down"></i>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link href="/services/cloud-migration">Cloud Migration</Link>
          </li>
          <li>
            <Link href="/services/ai-solutions">AI Solutions</Link>
          </li>
          <li>
            <Link href="/services/it-solutions">IT Solutions</Link>
          </li>
          <li>
            <Link href="/services/data-analytics">Data Analytics</Link>
          </li>
          <li>
            <Link href="/services/product-engineering">
              Product Engineering
            </Link>
          </li>
        </ul>
      </li>

      {/* 3. Blog - Simple link without dropdown */}
      <li>
        <Link href="/blog">Blog</Link>
      </li>

      {/* 4. About - Dropdown with About Us and Career (as per Strat AI website) */}
      <li>
        <Link href="/">
          About <i className="fa-solid fa-angle-down"></i>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/career">Career</Link>
          </li>
        </ul>
      </li>

      {/* 5. Contact - Simple link */}
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
