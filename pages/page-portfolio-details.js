import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import PortfolioDetails from "../components/sections/PortfolioDetails";
export default function PortfolioDetailsPage() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="Portfolio Details" />
                <PortfolioDetails />
            </Layout>
        </>
    );
}