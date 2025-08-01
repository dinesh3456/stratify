import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ShopCheckout from "../components/sections/ShopCheckout";
export default function PageShopCheckout() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="Shop Checkout" />
                <ShopCheckout />
            </Layout>
        </>
    );
}