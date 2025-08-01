import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home5Dark/Slider";
import About from "../components/sections/Home5Dark/About";
import Feature from "../components/sections/Home5Dark/Feature";
import Solutions from "../components/sections/Home5Dark/Solutions";
import Pricing from "../components/sections/Home5Dark/Pricing";
import Faqs from "../components/sections/Home5/Faqs";
import Team from "../components/sections/Home5Dark/Team";
import Video from "../components/sections/Home5/Video";
import Testimonial from "../components/sections/Home5Dark/Testimonial";
import About2 from "../components/sections/Home5Dark/About2";
import Video2 from "../components/sections/Home5Dark/Video2";
import Marquee from "../components/sections/Home5Dark/Marquee";
import News from "../components/sections/Home5/News";
import Contact from "../components/sections/Home2Dark/Contact";

export default function Home5Dark() {

    return (
        <>
            <Layout HeaderStyle="eightdark" FooterStyle="threedark" styleMode="Dark">
                <Slider />
                <About />
                <Feature />
                <Solutions />
                <Pricing />
                <Faqs />
                <Team />
                <Video />
                <Testimonial />
                <About2 />
                <Video2 />
                <Marquee />
                <News />
                <Contact />
            </Layout>
        </>
    );
}