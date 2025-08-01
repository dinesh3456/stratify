import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import FaqInner from "../components/sections/FaqInner";
import Brand from "@/components/sections/Home12/Brand";
export default function FaqPage() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="FAQ" />
                <FaqInner />
                <Brand />
            </Layout>
        </>
    );
}