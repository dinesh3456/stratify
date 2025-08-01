import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home2Dark/Slider";
import Features from "../components/sections/Home2Dark/Features";
import About from "../components/sections/Home2Dark/About";
import Projects from "../components/sections/Home2Dark/Projects";
import Services from "../components/sections/Home2Dark/Services";
import Pricing from "../components/sections/Home2Dark/Pricing";
import Testimonial from "../components/sections/Home2Dark/Testimonial";
import Funfact from "../components/sections/Home2Dark/Funfact";
import Parallax from "../components/sections/Home2/Parallax";
import Clients from "../components/sections/Home2Dark/Clients";
import News from "../components/sections/Home2/News";
import Contact from "../components/sections/Home2Dark/Contact";

export default function Home2Dark() {

    return (
        <>
            <Layout HeaderStyle="twodark" FooterStyle="twodark" styleMode="Dark">
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