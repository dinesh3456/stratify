import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import TeamDetails from "../components/sections/TeamDetails";
export default function TeamDetailsPage() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="Team Details" />
                <TeamDetails />
            </Layout>
        </>
    );
}