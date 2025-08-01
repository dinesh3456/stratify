import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ShopSidebar from "../components/sections/ShopSidebar";
export default function PageShopSidebar() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="Shop Sidebar" />
                <ShopSidebar />
            </Layout>
        </>
    );
}