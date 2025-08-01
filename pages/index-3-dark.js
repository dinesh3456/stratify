import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home3Dark/Slider";
import Services from "../components/sections/Home3Dark/Services";
import About from "../components/sections/Home3/About";
import Clients from "../components/sections/Home3Dark/Clients";
import Chooseus from "../components/sections/Home3Dark/ChooseUs";
import Work from "../components/sections/Home3Dark/Work";
import Marquee from "../components/sections/Home3Dark/Marquee";
import Faqs from "../components/sections/Home3/Faqs";
import Achivement from "../components/sections/Home3/Achivement";
import Video from "../components/sections/Home3Dark/Video";
import Projects from "../components/sections/Home3Dark/Projects";
import Testimonial from "../components/sections/Home3Dark/Testimonial";
import News from "../components/sections/Home3/News";
import Qta from "../components/sections/Home3/Qta";

export default function Home3Dark() {

    return (
        <>
            <Layout HeaderStyle="threedark" FooterStyle="twodark" styleMode="Dark">
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