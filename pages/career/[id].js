import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/sections/PageTitle";
import JobDetails from "../../components/sections/JobDetails";

// Job data (detailed version for job pages)
const jobOpenings = {
  1: {
    id: 1,
    title: "Business Program Manager (Partner Enablement)",
    location: "Remote",
    employmentType: "Full-time",
    department: "Business Development",
    experience: "5+ years",
    salary: "$80,000 - $120,000",
    posted: "2 days ago",
    description:
      "Lead strategic partnerships and drive collaboration with deep tech knowledge and GSI expertise. Deliver executive-level presentations while managing sales enablement, alliances, and pre-sales initiatives with strong analytical capabilities.",
    responsibilities: [
      "Lead strategic partnership initiatives and drive collaboration with Global System Integrators (GSIs)",
      "Deliver executive-level presentations to C-suite stakeholders and key decision makers",
      "Manage sales enablement programs and pre-sales technical initiatives",
      "Develop and execute partner enablement strategies across multiple channels",
      "Conduct business analysis and provide data-driven insights for strategic decisions",
      "Collaborate with cross-functional teams to align partnership goals with business objectives",
      "Build and maintain relationships with key stakeholders in the partner ecosystem",
      "Drive revenue growth through effective partner program management",
    ],
    requirements: [
      "Bachelor's degree in Business, Engineering, or related field",
      "5+ years of experience in business development, partner management, or related roles",
      "Proven track record of managing strategic partnerships and alliances",
      "Strong analytical skills with experience in business analysis and data interpretation",
      "Excellent presentation and communication skills at executive level",
      "Experience with sales enablement tools and methodologies",
      "Knowledge of technology industry and GSI landscape",
      "Project management experience with ability to manage multiple initiatives simultaneously",
    ],
    requiredSkills: [
      "Sales Enablement",
      "Partnership Management",
      "Executive Presentations",
      "Business Analysis",
      "Strategic Planning",
      "Stakeholder Management",
    ],
    benefits: [
      "Competitive salary and performance-based bonuses",
      "Comprehensive health, dental, and vision insurance",
      "Flexible remote work arrangement",
      "Professional development budget ($2,000 annually)",
      "Paid time off and flexible vacation policy",
      "401(k) retirement plan with company matching",
      "Stock option opportunities",
      "Modern equipment and home office setup allowance",
    ],
  },
  2: {
    id: 2,
    title: "Power Platform Developer",
    location: "Remote",
    employmentType: "Full-time",
    department: "Technology",
    experience: "3+ years",
    salary: "$70,000 - $95,000",
    posted: "1 week ago",
    description:
      "Design and develop innovative solutions using Microsoft Power Platform to streamline business processes and drive automation. Work with our Global Partner Enablement Team to create scalable technical solutions that transform business operations.",
    responsibilities: [
      "Design and develop Power Apps applications to meet business requirements",
      "Create automated workflows using Power Automate to streamline business processes",
      "Build comprehensive dashboards and reports using Power BI for data visualization",
      "Integrate Power Platform solutions with existing systems using APIs and connectors",
      "Collaborate with business stakeholders to gather requirements and translate them into technical solutions",
      "Implement best practices for Power Platform governance and security",
      "Provide technical support and maintenance for deployed solutions",
      "Train end-users on Power Platform applications and functionality",
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Information Technology, or related field",
      "3+ years of experience developing solutions on Microsoft Power Platform",
      "Strong proficiency in Power Apps canvas and model-driven app development",
      "Experience with Power Automate workflow design and implementation",
      "Advanced knowledge of Power BI report and dashboard creation",
      "Proficiency in JavaScript, C#, and SQL for custom development",
      "Experience with API integration and web services",
      "Knowledge of Microsoft 365 ecosystem and Azure services",
      "Strong problem-solving skills and attention to detail",
    ],
    requiredSkills: [
      "Power Apps",
      "Power Automate",
      "Power BI",
      "JavaScript",
      "C#",
      "SQL",
      "API Integration",
      "Solution Architecture",
    ],
    benefits: [
      "Competitive salary and annual performance reviews",
      "Comprehensive health and wellness benefits",
      "Remote-first work culture with flexible hours",
      "Learning and development opportunities including Microsoft certifications",
      "Paid time off and company holidays",
      "Retirement savings plan with employer contribution",
      "Technology allowance for home office setup",
      "Team building events and company retreats",
    ],
  },
};

export default function JobDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const job = jobOpenings[id];

  if (!job) {
    if (typeof window !== "undefined") {
      router.push("/career");
    }
    return null;
  }

  return (
    <>
      <Layout HeaderStyle="three">
        <PageTitle pageName={job.title} />
        <JobDetails job={job} />
      </Layout>
    </>
  );
}
