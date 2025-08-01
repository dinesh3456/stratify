import React from "react";
import Layout from "../components/layout/Layout";
import Slider from "../components/sections/Home11Dark/Slider";
import Service from "../components/sections/Home11Dark/Service";
import About from "../components/sections/Home11Dark/About";
import Feature from "../components/sections/Home11Dark/Feature";
import Solution from "../components/sections/Home11Dark/Solution";
import Work from "../components/sections/Home11/Work";
import Choose from "../components/sections/Home7Dark/Choose";
import Pricing from "../components/sections/Home11Dark/Pricing";
import Brand from "../components/sections/Home11Dark/Brand";
import Teams from "../components/sections/Home7Dark/Teams";
import News from "../components/sections/Home8/News";
export default function Home11Dark() {

    return (
        <>
            <Layout HeaderStyle="threedark" FooterStyle="eightdark" styleMode="Dark">
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