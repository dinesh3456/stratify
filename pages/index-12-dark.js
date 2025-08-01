import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home12Dark/Slider";
import Feature from "../components/sections/Home12Dark/Feature";
import Brand from "../components/sections/Home12Dark/Brand";
import Choose from "../components/sections/Home12Dark/Choose";
import Steps from "../components/sections/Home12Dark/Steps";
import Service from "../components/sections/Home12Dark/Service";
import Case from "../components/sections/Home12Dark/Case";
import Testimonial from "../components/sections/Home12Dark/Testimonial";
import Video from "../components/sections/Home5/Video";
import News from "../components/sections/Home1/News";

export default function Home12Dark() {

    return (
        <>
            <Layout HeaderStyle="sixdark" FooterStyle="threedark" styleMode="Dark">
                <Slider />
                <Feature />
                <Brand />
                <Choose />
                <Steps />
                <Service />
                <Case />
                <Testimonial />
                <Video />
                <News />
            </Layout>
        </>
    );
}