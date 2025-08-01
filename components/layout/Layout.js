import React, { useEffect, useState } from 'react';
import BackToTop from '../elements/BackToTop';
import Footer from './Footer';
import Footer2 from './Footer2';
import Footer3 from './Footer3';
import Footer4 from './Footer4';
import Footer5 from './Footer5';
import Footer6 from './Footer6';
import Footer7 from './Footer7';
import Footer8 from './Footer8';
import FooterDark from './FooterDark';
import Footer2Dark from './Footer2Dark';
import Footer3Dark from './Footer3Dark';
import Footer4Dark from './Footer4Dark';
import Footer5Dark from './Footer5Dark';
import Footer6Dark from './Footer6Dark';
import Footer7Dark from './Footer7Dark';
import Footer8Dark from './Footer8Dark';
import Header from './Header';
import Header2 from './Header2';
import Header3 from './Header3';
import Header4 from './Header4';
import Header5 from './Header5';
import Header6 from './Header6';
import Header7 from './Header7';
import Header8 from './Header8';
import HeaderSingle from './HeaderSingle';
import Header2Single from './Header2Single';
import Header3Single from './Header3Single';
import Header4Single from './Header4Single';
import Header5Single from './Header5Single';
import Header6Single from './Header6Single';
import Header7Single from './Header7Single';
import Header8Single from './Header8Single';
import HeaderDark from './HeaderDark';
import Header2Dark from './Header2Dark';
import Header3Dark from './Header3Dark';
import Header4Dark from './Header4Dark';
import Header5Dark from './Header5Dark';
import Header6Dark from './Header6Dark';
import Header7Dark from './Header7Dark';
import Header8Dark from './Header8Dark';
import PageHead from './PageHead';

const Layout = ({ children, HeaderStyle, FooterStyle, styleMode}) => {
    const isServer = typeof window === 'undefined';
    const WOW = !isServer ? require('wow.js') : null;
    const [searchToggle, setSearchToggled] = useState(false);
    const [scroll, setScroll] = useState(0)
    const handleToggle = () => setSearchToggled(!searchToggle);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (styleMode === "Dark") {
                document.body.classList.add("dark-mode");
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.body.classList.remove("dark-mode");
                document.documentElement.removeAttribute('data-theme');
            }
        }
    }, [styleMode]);

    useEffect(() => {
        const onScroll = () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };
        document.addEventListener("scroll", onScroll);
        return () => document.removeEventListener("scroll", onScroll); // Clean up event listener
    }, [scroll]);

    const handleOpen = () => {
        document.body.classList.add("mobile-menu-visible");
    }

    const handleRemove = () => {
        document.body.classList.remove("mobile-menu-visible");
    }

    useEffect(() => {
        if (!isServer) {
            new WOW().init();
        }
    }, []);

    return (
        <>
            <PageHead />
            <div className="page-wrapper" id="top">

                {!HeaderStyle && <Header handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "two" && <Header2 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "three" && <Header3 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "four" && <Header4 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "five" && <Header5 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "six" && <Header6 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "seven" && <Header7 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "eight" && <Header8 handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "single" && <HeaderSingle handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "twosingle" && <Header2Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "threesingle" && <Header3Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "foursingle" && <Header4Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "fivesingle" && <Header5Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "sixsingle" && <Header6Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "sevensingle" && <Header7Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "eightsingle" && <Header8Single handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "dark" && <HeaderDark handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "twodark" && <Header2Dark handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "threedark" && <Header3Dark handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "fourdark" && <Header4Dark handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "fivedark" && <Header5Dark handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "sixdark" && <Header6Dark handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "sevendark" && <Header7Dark handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}
                {HeaderStyle === "eightdark" && <Header8Dark handleOpen={handleOpen} handleRemove={handleRemove} searchToggle={searchToggle} handleToggle={handleToggle} scroll={scroll} />}

                {/* <Sidebar /> */}

                {children}

                {!FooterStyle && <Footer />}
                {FooterStyle === "two" && <Footer2 />}
                {FooterStyle === "three" && <Footer3 />}
                {FooterStyle === "four" && <Footer4 />}
                {FooterStyle === "five" && <Footer5 />}
                {FooterStyle === "six" && <Footer6 />}
                {FooterStyle === "seven" && <Footer7 />}
                {FooterStyle === "eight" && <Footer8 />}
                {FooterStyle === "dark" && <FooterDark />}
                {FooterStyle === "twodark" && <Footer2Dark />}
                {FooterStyle === "threedark" && <Footer3Dark />}
                {FooterStyle === "fourdark" && <Footer4Dark />}
                {FooterStyle === "fivedark" && <Footer5Dark />}
                {FooterStyle === "sixdark" && <Footer6Dark />}
                {FooterStyle === "sevendark" && <Footer7Dark />}
                {FooterStyle === "eightdark" && <Footer8Dark />}
            </div>
            {/* <BackToTop /> */}
            <BackToTop />
        </>
    );
};

export default Layout;