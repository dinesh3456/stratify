import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <ul>
        {/* 1. Home - Simple link */}
        <li>
          <Link href="/">Home</Link>
        </li>

        {/* 2. Services - With your 5 core services dropdown */}
        <li>
          <Link href="/">
            Services <i className="fa-solid fa-angle-down" />
          </Link>
          <ul className={isActive.key === 1 ? "sub-menu d-block" : "d-none"}>
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
          <div
            className={
              isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"
            }
            onClick={() => handleClick(1)}
          >
            <i className="fa fa-angle-down" />
          </div>
        </li>

        {/* 3. Blog - Simple link without dropdown */}
        <li>
          <Link href="/blog">Blog</Link>
        </li>

        {/* 4. About - With About Us and Career dropdown */}
        <li>
          <Link href="/">
            About <i className="fa-solid fa-angle-down" />
          </Link>
          <ul className={isActive.key === 2 ? "sub-menu d-block" : "d-none"}>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/career">Career</Link>
            </li>
          </ul>
          <div
            className={
              isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"
            }
            onClick={() => handleClick(2)}
          >
            <i className="fa fa-angle-down" />
          </div>
        </li>

        {/* 5. Contact - Simple link */}
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default MobileMenu;
