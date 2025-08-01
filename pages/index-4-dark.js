import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home4Dark/Slider";
import Feature from "../components/sections/Home4Dark/Feature";
import Services from "../components/sections/Home4Dark/Services";
import Marquee from "../components/sections/Home4Dark/Marquee";
import Testimonial from "../components/sections/Home4Dark/Testimonial";
import Chooseus from "../components/sections/Home4Dark/ChooseUs";
import Portfolio from "../components/sections/Home4Dark/Portfolio";
import Faqs from "../components/sections/Home4/Faqs";
import Team from "../components/sections/Home4Dark/Team";
import Contact from "../components/sections/Home4Dark/Contact";
import News from "../components/sections/Home4/News";

export default function Home4Dark() {

    return (
        <>
            <Layout HeaderStyle="fourdark" FooterStyle="threedark" styleMode="Dark">
                <Slider />
                <Feature />
                <Services />
                <Marquee />
                <Testimonial />
                <Chooseus />
                <Portfolio />
                <Faqs />
                <Team />
                <Contact />
                <News />
            </Layout>
        </>
    );
}