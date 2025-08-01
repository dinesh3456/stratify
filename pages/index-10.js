import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home10/Slider";
import Feature from "../components/sections/Home10/Feature";
import About from "../components/sections/Home10/About";
import Service from "../components/sections/Home10/Service";
import Work from "../components/sections/Home10/Work";
import Marquee from "../components/sections/Home10/Marquee";
import Portfolio from "../components/sections/Home10/Portfolio";
import Testimonial from "../components/sections/Home10/Testimonial";
import About2 from "../components/sections/Home1/About";
import Video from "../components/sections/Home5/Video2";
import Marquee2 from "../components/sections/Home5/Marquee";
import News from "../components/sections/Home10/News";
import Contact from "../components/sections/Home2/Contact";

export default function Home10() {

    return (
        <>
            <Layout HeaderStyle="three" FooterStyle="three">
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