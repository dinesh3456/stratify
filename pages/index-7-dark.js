import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home7Dark/Slider";
import About from "../components/sections/Home7Dark/About";
import Consult from "../components/sections/Home7Dark/Consult";
import Serveice from "../components/sections/Home7Dark/Serveice";
import Choose from "../components/sections/Home7Dark/Choose";
import Pricing from "../components/sections/Home7Dark/Pricing";
import Marquee from "../components/sections/Home7Dark/Marquee";
import Professional from "../components/sections/Home7Dark/Professional";
import Teams from "../components/sections/Home7Dark/Teams";
import Contact from "../components/sections/Home7Dark/Contact";

export default function Home7Dark() {

    return (
        <>
            <Layout HeaderStyle="twodark" FooterStyle="dark" styleMode="Dark">
                <Slider />
                <About />
                <Consult />
                <Serveice />
                <Choose />
                <Pricing />
                <Marquee />
                <Professional />
                <Teams />
                <Contact />
            </Layout>
        </>
    );
}