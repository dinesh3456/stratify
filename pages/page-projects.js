import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ProjectGrid from "../components/sections/ProjectGrid";
export default function ProjectsPage() {

    return (
        <>
            <Layout HeaderStyle="three">
                <PageTitle pageName="Projects Grid" />
                <ProjectGrid />
            </Layout>
        </>
    );
}