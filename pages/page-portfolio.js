import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import PortfolioInner from "../components/sections/PortfolioInner";
export default function PortfolioPage() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="The Portfolio" />
                <PortfolioInner />
            </Layout>
        </>
    );
}