import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home4/Slider";
import Feature from "../components/sections/Home4/Feature";
import Services from "../components/sections/Home4/Services";
import Marquee from "../components/sections/Home4/Marquee";
import Testimonial from "../components/sections/Home4/Testimonial";
import Chooseus from "../components/sections/Home4/ChooseUs";
import Portfolio from "../components/sections/Home4/Portfolio";
import Faqs from "../components/sections/Home4/Faqs";
import Team from "../components/sections/Home4/Team";
import Contact from "../components/sections/Home4/Contact";
import News from "../components/sections/Home4/News";

export default function Home4Single() {

    return (
        <>
            <Layout HeaderStyle="foursingle" FooterStyle="three">
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