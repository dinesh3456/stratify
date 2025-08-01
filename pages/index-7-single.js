import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home7/Slider";
import About from "../components/sections/Home7/About";
import Consult from "../components/sections/Home7/Consult";
import Serveice from "../components/sections/Home7/Serveice";
import Choose from "../components/sections/Home7/Choose";
import Pricing from "../components/sections/Home7/Pricing";
import Marquee from "../components/sections/Home7/Marquee";
import Professional from "../components/sections/Home7/Professional";
import Teams from "../components/sections/Home7/Teams";
import Contact from "../components/sections/Home7/Contact";

export default function Home7Single() {

    return (
        <>
            <Layout HeaderStyle="twosingle">
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