import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import TeamGrid from "../components/sections/TeamGrid";
export default function TeamPage() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="Team Grid" />
                <TeamGrid />
            </Layout>
        </>
    );
}