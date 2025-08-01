import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home6/Slider";
import Feature from "../components/sections/Home6/Feature";
import About from "../components/sections/Home6/About";
import Service from "../components/sections/Home6/Service";
import Choose from "../components/sections/Home6/Choose";
import Video from "../components/sections/Home1/Video";
import About2 from "../components/sections/Home1/About";
import Team from "../components/sections/Home6/Team";
import Testimonial from "../components/sections/Home6/Testimonial";
import Brand from "../components/sections/Home6/Brand";
import Professional from "../components/sections/Home1/Professional";
import Contact from "../components/sections/Home6/Contact";
import Blog from "../components/sections/Home6/News";

export default function Home6Single() {

    return (
        <>
            <Layout HeaderStyle="twosingle" FooterStyle="six">
                <Slider />
                <Feature />
                <About />
                <Service />
                <Choose />
                <Video />
                <About2 />
                <Team />
                <Testimonial />
                <Brand />
                <Professional />
                <Contact />
                <Blog />
            </Layout>
        </>
    );
}