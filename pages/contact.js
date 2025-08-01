import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import Contact from "../components/sections/Home2/Contact";
import Brand from "../components/sections/Home12/Brand";

export default function Contactus() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="Contact Us" />
                <Contact />
                <Brand />
            </Layout>
        </>
    );
}