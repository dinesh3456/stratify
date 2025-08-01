import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home13Dark/Slider";
import Service from "../components/sections/Home13Dark/Service";
import About from "../components/sections/Home13Dark/About";
import Solution from "../components/sections/Home13Dark/Solution";
import Pricing from "../components/sections/Home13Dark/Pricing";
import Testimonial from "../components/sections/Home13Dark/Testimonial";
import Teams from "../components/sections/Home7Dark/Teams";
import Video from "../components/sections/Home5Dark/Video2";
import About2 from "../components/sections/Home1Dark/About";
import Clients from "../components/sections/Home2Dark/Clients";
import News from "../components/sections/Home2/News";
import Contact from "../components/sections/Home9Dark/Contact";

export default function Home13Dark() {

    return (
        <>
            <Layout HeaderStyle="twodark" FooterStyle="dark" styleMode="Dark">
                <Slider />
                <Service />
                <About />
                <Solution />
                <Pricing />
                <Testimonial />
                <Teams />
                <Video />
                <About2 /> 
                <Clients />
                <News />
                <Contact />
            </Layout>
        </>
    );
}