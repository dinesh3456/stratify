import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import PricingInner from "../components/sections/PricingInner";
import Brand from "../components/sections/Home12/Brand";
export default function PricingPage() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="Pricing" />
                <PricingInner />
                <Brand />
            </Layout>
        </>
    );
}