import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home10Dark/Slider";
import Feature from "../components/sections/Home10Dark/Feature";
import About from "../components/sections/Home10Dark/About";
import Service from "../components/sections/Home10Dark/Service";
import Work from "../components/sections/Home10/Work";
import Marquee from "../components/sections/Home10Dark/Marquee";
import Portfolio from "../components/sections/Home10Dark/Portfolio";
import Testimonial from "../components/sections/Home10Dark/Testimonial";
import About2 from "../components/sections/Home1Dark/About";
import Video from "../components/sections/Home5Dark/Video2";
import Marquee2 from "../components/sections/Home5Dark/Marquee";
import News from "../components/sections/Home10/News";
import Contact from "../components/sections/Home2Dark/Contact";

export default function Home10Dark() {

    return (
        <>
            <Layout HeaderStyle="threedark" FooterStyle="threedark" styleMode="Dark">
                <Slider />
                <Feature />
                <About />
                <Service />
                <Work />
                <Marquee />
                <Portfolio />
                <Testimonial />
                <About2 />
                <Video />
                <Marquee2 />
                <News />
                <Contact />
            </Layout>
        </>
    );
}