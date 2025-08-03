import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import CareerGrid from "../components/sections/CareerGrid";

export default function CareerPage() {
  return (
    <>
      <Layout HeaderStyle="three">
        <PageTitle pageName="Career" />
        <CareerGrid />
      </Layout>
    </>
  );
}
