import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import TestimonialInner from "../components/sections/TestimonialInner";
import Brand from "../components/sections/Home12/Brand";
export default function TestimonialPage() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="Testimonial" />
                <TestimonialInner />
                <Brand />
            </Layout>
        </>
    );
}