import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home3/Slider";
import Services from "../components/sections/Home3/Services";
import About from "../components/sections/Home3/About";
import Clients from "../components/sections/Home3/Clients";
import Chooseus from "../components/sections/Home3/ChooseUs";
import Work from "../components/sections/Home3/Work";
import Marquee from "../components/sections/Home3/Marquee";
import Faqs from "../components/sections/Home3/Faqs";
import Achivement from "../components/sections/Home3/Achivement";
import Video from "../components/sections/Home3/Video";
import Projects from "../components/sections/Home3/Projects";
import Testimonial from "../components/sections/Home3/Testimonial";
import News from "../components/sections/Home3/News";
import Qta from "../components/sections/Home3/Qta";

export default function Home3() {

    return (
        <>
            <Layout HeaderStyle="three" FooterStyle="two">
                <Slider />
                <Services />
                <About />
                <Clients />
                <Chooseus />
                <Work />
                <Marquee />
                <Faqs />
                <Achivement />
                <Video />
                <Projects />
                <Testimonial />
                <News />
                <Qta />
            </Layout>
        </>
    );
}