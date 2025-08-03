import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import AboutSection from "../components/sections/AboutUs/AboutSection";
import TeamSection from "../components/sections/AboutUs/TeamSection";

export default function AboutUs() {
  return (
    <>
      <Layout HeaderStyle="three">
        <PageTitle pageName="About Us" />
        <AboutSection />
        <TeamSection />
      </Layout>
    </>
  );
}
