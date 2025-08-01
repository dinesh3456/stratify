import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home11/Slider";
import Service from "../components/sections/Home11/Service";
import About from "../components/sections/Home11/About";
import Feature from "../components/sections/Home11/Feature";
import Solution from "../components/sections/Home11/Solution";
import Work from "../components/sections/Home11/Work";
import Choose from "../components/sections/Home7/Choose";
import Pricing from "../components/sections/Home11/Pricing";
import Brand from "../components/sections/Home11/Brand";
import Teams from "../components/sections/Home7/Teams";
import News from "../components/sections/Home8/News";
export default function Home11() {

    return (
        <>
            <Layout HeaderStyle="three" FooterStyle="eight">
                <Slider />
                <Service />
                <About />
                <Feature />
                <Solution />
                <Work />
                <Choose />
                <Pricing />                
                <Brand />
                <Teams />
                <News />
            </Layout>
        </>
    );
}