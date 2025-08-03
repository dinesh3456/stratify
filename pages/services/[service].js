import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import ServiceDetails from "../../components/sections/ServiceDetails";

// Define the available services
const services = {
  "cloud-migration": {
    title: "Cloud Migration",
    pageTitle: "Cloud Migration Services",
  },
  "ai-solutions": {
    title: "AI Solutions",
    pageTitle: "AI Solutions & Machine Learning",
  },
  "it-solutions": {
    title: "IT Solutions",
    pageTitle: "IT Solutions & Consulting",
  },
  "data-analytics": {
    title: "Data Analytics",
    pageTitle: "Data Analytics & Business Intelligence",
  },
  "product-engineering": {
    title: "Product Engineering",
    pageTitle: "Product Engineering & Development",
  },
};

export default function ServicePage() {
  const router = useRouter();
  const { service } = router.query;

  // If service doesn't exist, redirect to 404 or services page
  if (!service || !services[service]) {
    if (typeof window !== "undefined") {
      router.push("/404");
    }
    return null;
  }

  const currentService = services[service];

  return (
    <>
      <Layout HeaderStyle="three">
        <PageTitle pageName={currentService.pageTitle} />
        <ServiceDetails serviceType={service} />
      </Layout>
    </>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on services
  const paths = Object.keys(services).map((service) => ({
    params: { service },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the service slug.
  const service = params.service;

  if (!services[service]) {
    return {
      notFound: true,
    };
  }

  // Pass service data to the page via props
  return {
    props: {},
  };
}
