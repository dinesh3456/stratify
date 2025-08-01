import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import About from "../components/sections/Home2/About";
import Projects from "../components/sections/Home2/Projects";
import Services from "../components/sections/Home2/Services";
import Pricing from "../components/sections/Home2/Pricing";
import Brand from "../components/sections/Home12/Brand";
export default function AboutUS() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="About Us" />
                <About />
                <Projects />
                <Services />
                <Pricing />
                <Brand />
            </Layout>
        </>
    );
}