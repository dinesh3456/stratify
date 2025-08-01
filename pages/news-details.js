import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import BlogDetails from "../components/sections/BlogDetails";
export default function NewsDetails() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="Blog Details" />
                <BlogDetails />
            </Layout>
        </>
    );
}