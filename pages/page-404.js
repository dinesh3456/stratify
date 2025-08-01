import React from "react";
import Layout from "../components/layout/Layout";
import Page404 from "../components/sections/Page404";
export default function ErrorPage() {

    return (
        <>
            <Layout HeaderStyle="none" FooterStyle="none">
                <Page404 />
            </Layout>
        </>
    );
}