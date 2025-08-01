import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ShopCart from "../components/sections/ShopCart";
export default function PageShopCart() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="Cart" />
                <ShopCart />
            </Layout>
        </>
    );
}