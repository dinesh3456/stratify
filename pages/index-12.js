import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home12/Slider";
import Feature from "../components/sections/Home12/Feature";
import Brand from "../components/sections/Home12/Brand";
import Choose from "../components/sections/Home12/Choose";
import Steps from "../components/sections/Home12/Steps";
import Service from "../components/sections/Home12/Service";
import Case from "../components/sections/Home12/Case";
import Testimonial from "../components/sections/Home12/Testimonial";
import Video from "../components/sections/Home5/Video";
import News from "../components/sections/Home1/News";

export default function Home12() {

    return (
        <>
            <Layout HeaderStyle="six" FooterStyle="three">
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