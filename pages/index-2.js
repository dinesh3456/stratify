import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home2/Slider";
import Features from "../components/sections/Home2/Features";
import About from "../components/sections/Home2/About";
import Projects from "../components/sections/Home2/Projects";
import Services from "../components/sections/Home2/Services";
import Pricing from "../components/sections/Home2/Pricing";
import Testimonial from "../components/sections/Home2/Testimonial";
import Funfact from "../components/sections/Home2/Funfact";
import Parallax from "../components/sections/Home2/Parallax";
import Clients from "../components/sections/Home2/Clients";
import News from "../components/sections/Home2/News";
import Contact from "../components/sections/Home2/Contact";

export default function Home2() {

    return (
        <>
            <Layout HeaderStyle="two" FooterStyle="two">
                <Slider />
                <Features />
                <About />
                <Projects />
                <Services />
                <Pricing />
                <Testimonial />
                <Funfact />
                <Parallax />
                <Clients />
                <News />
                <Contact />
            </Layout>
        </>
    );
}