import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home1/Slider";
import Features from "../components/sections/Home1/Features";
import Consult from "../components/sections/Home1/Consult";
import HzAccordion from "../components/sections/Home1/HzAccordion";
import Professional from "../components/sections/Home1/Professional";
import ChooseUs from "../components/sections/Home1/ChooseUs";
import Video from "../components/sections/Home1/Video";
import About from "../components/sections/Home1/About";
import Team from "../components/sections/Home1/Team";
import Faqs from "../components/sections/Home1/Faqs";
import Brand from "../components/sections/Home1/Brand";
import Contact from "../components/sections/Home1/Contact";
import News from "../components/sections/Home1/News";

export default function Home1() {
    return (
        <>
            <Layout>
                <Slider />
                <Features />
                <Consult />
                <HzAccordion />
                <Professional />
                <ChooseUs />
                <Video />
                <About />
                <Team />
                <Faqs />
                <Brand />
                <Contact />
                <News />
            </Layout>
        </>
    );
}