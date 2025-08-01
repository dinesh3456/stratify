import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home1Dark/Slider";
import Features from "../components/sections/Home1Dark/Features";
import Consult from "../components/sections/Home1Dark/Consult";
import HzAccordion from "../components/sections/Home1Dark/HzAccordion";
import Professional from "../components/sections/Home1Dark/Professional";
import ChooseUs from "../components/sections/Home1Dark/ChooseUs";
import Video from "../components/sections/Home1Dark/Video";
import About from "../components/sections/Home1Dark/About";
import Team from "../components/sections/Home1Dark/Team";
import Faqs from "../components/sections/Home1Dark/Faqs";
import Brand from "../components/sections/Home1Dark/Brand";
import Contact from "../components/sections/Home1Dark/Contact";
import News from "../components/sections/Home1/News";

export default function Home1Dark() {

    return (
        <>
            <Layout HeaderStyle="dark" styleMode="Dark" FooterStyle="dark">
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