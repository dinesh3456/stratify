import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home13/Slider";
import Service from "../components/sections/Home13/Service";
import About from "../components/sections/Home13/About";
import Solution from "../components/sections/Home13/Solution";
import Pricing from "../components/sections/Home13/Pricing";
import Testimonial from "../components/sections/Home13/Testimonial";
import Team from "../components/sections/Home7/Teams";
import Video from "../components/sections/Home5/Video2";
import About2 from "../components/sections/Home1/About";
import Clients from "../components/sections/Home2/Clients";
import News from "../components/sections/Home2/News";
import Contact from "../components/sections/Home9/Contact";

export default function Home13() {

    return (
        <>
            <Layout HeaderStyle="two">
                <Slider />
                <Service />
                <About />
                <Solution />
                <Pricing />
                <Testimonial />
                <Team />
                <Video />
                <About2 /> 
                <Clients />
                <News />
                <Contact />
            </Layout>
        </>
    );
}