import React from "react";
import Link from "next/link";

const jobOpenings = [
  {
    id: 1,
    title: "Business Program Manager (Partner Enablement)",
    location: "Remote",
    employmentType: "Full-time",
    description:
      "Lead strategic partnerships and drive collaboration with deep tech knowledge and GSI expertise. Deliver executive-level presentations while managing sales enablement, alliances, and pre-sales initiatives with strong analytical capabilities.",
    requiredSkills: [
      "Sales Enablement",
      "Partnership Management",
      "Executive Presentations",
      "Business Analysis",
      "Strategic Planning",
      "Stakeholder Management",
    ],
    department: "Business Development",
    experience: "5+ years",
  },
  {
    id: 2,
    title: "Power Platform Developer",
    location: "Remote",
    employmentType: "Full-time",
    description:
      "Design and develop innovative solutions using Microsoft Power Platform to streamline business processes and drive automation. Work with our Global Partner Enablement Team to create scalable technical solutions that transform business operations.",
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
    department: "Technology",
    experience: "3+ years",
  },
];

function CareerGrid() {
  return (
    <>
      <section className="career-grid-area pt-130 pb-130">
        <div className="container">
          <div className="section-header text-center mb-60">
            <h6>JOIN OUR TEAM</h6>
            <h2 className="wow splt-txt" data-splitting>
              Build Your Career With <br /> Innovation & Excellence
            </h2>
            <p className="mt-3">
              We're always looking for talented individuals who are passionate
              about technology and innovation. Explore our current openings and
              join our dynamic team.
            </p>
          </div>

          <div className="row justify-content-center">
            {jobOpenings.map((job, index) => (
              <div
                key={job.id}
                className="col-lg-5 col-xl-5 mb-5 wow fadeInUp"
                data-wow-delay={`${index * 100}ms`}
                data-wow-duration="1500ms"
                style={{ marginRight: index === 0 ? "2rem" : "0" }}
              >
                <div className="career-card">
                  <div className="career-card__header">
                    <div className="job-meta">
                      <div className="job-location">
                        <i className="fa-light fa-location-dot"></i>
                        <span>{job.location}</span>
                      </div>
                      <div className="job-type">
                        <i className="fa-light fa-clock"></i>
                        <span>{job.employmentType}</span>
                      </div>
                    </div>
                  </div>

                  <div className="career-card__content">
                    <h4 className="job-title">
                      <Link href={`/career/${job.id}`} className="hover-link">
                        {job.title}
                      </Link>
                    </h4>

                    <div className="job-details">
                      <span className="department">{job.department}</span>
                      <span className="experience">{job.experience}</span>
                    </div>

                    <p className="job-description">{job.description}</p>

                    <div className="required-skills">
                      <h6>Required Skills:</h6>
                      <div className="skills-tags">
                        {job.requiredSkills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="career-card__footer">
                    <Link href={`/career/${job.id}`} className="apply-btn">
                      Apply Now <i className="fa-regular fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-60">
            <div className="career-info">
              <h4>Don't see a position that fits?</h4>
              <p>
                We're always interested in connecting with talented
                professionals. Send us your resume and we'll keep you in mind
                for future opportunities.
              </p>
              <Link
                href="/contact"
                className="btn-one"
                data-splitting
                data-text="Send Your Resume"
              >
                Send Your Resume
              </Link>
            </div>
          </div>
        </div>

        <style jsx>{`
          .career-grid-area {
            background-color: #f8f9fa;
          }

          .career-card {
            background: white;
            border-radius: 8px;
            padding: 30px;
            height: 100%;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            border: 1px solid #e9ecef;
            position: relative;
            overflow: hidden;
          }

          .career-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          }

          .career-card__header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 25px;
          }

          .company-logo .logo-placeholder {
            width: 50px;
            height: 40px;
            background: #121c27;
            border-radius: 6px;
          }

          .job-meta {
            display: flex;
            gap: 15px;
            align-items: center;
          }

          .job-location,
          .job-type {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 14px;
            color: #6b7280;
          }

          .job-location i,
          .job-type i {
            color: #121c27;
            font-size: 12px;
          }

          .career-card__content {
            margin-bottom: 30px;
          }

          .job-title {
            font-size: 20px;
            font-weight: 600;
            color: #121c27;
            margin-bottom: 15px;
            line-height: 1.3;
          }

          .job-title .hover-link {
            color: inherit;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .job-title .hover-link:hover {
            color: #bb9a65;
          }

          .job-details {
            display: flex;
            gap: 15px;
            margin-bottom: 20px;
          }

          .department,
          .experience {
            font-size: 12px;
            padding: 4px 10px;
            border-radius: 20px;
            font-weight: 500;
          }

          .department {
            background: #f8f9fa;
            color: #121c27;
            border: 1px solid #e9ecef;
          }

          .experience {
            background: rgba(187, 154, 101, 0.1);
            color: #bb9a65;
            border: 1px solid rgba(187, 154, 101, 0.2);
          }

          .job-description {
            color: #6b7280;
            line-height: 1.6;
            margin-bottom: 25px;
            font-size: 14px;
          }

          .required-skills h6 {
            font-size: 14px;
            font-weight: 600;
            color: #121c27;
            margin-bottom: 15px;
          }

          .skills-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }

          .skill-tag {
            background: #f8f9fa;
            color: #121c27;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
            border: 1px solid #e9ecef;
            transition: all 0.3s ease;
          }

          .skill-tag:hover {
            background: #121c27;
            color: white;
            border-color: #121c27;
          }

          .career-card__footer {
            margin-top: auto;
            padding-top: 25px;
            border-top: 1px solid #f1f5f9;
          }

          .apply-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #121c27;
            color: white;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 500;
            font-size: 14px;
            transition: all 0.3s ease;
            border: none;
            position: relative;
            overflow: hidden;
          }

          .apply-btn:before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(187, 154, 101, 0.4),
              transparent
            );
            transition: left 0.5s;
          }

          .apply-btn:hover:before {
            left: 100%;
          }

          .apply-btn:hover {
            background: #bb9a65;
            color: white;
            transform: translateX(5px);
            box-shadow: 0 4px 15px rgba(187, 154, 101, 0.3);
          }

          .apply-btn i {
            transition: transform 0.3s ease;
          }

          .apply-btn:hover i {
            transform: translateX(3px);
          }

          .career-info {
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            border: 1px solid #e9ecef;
          }

          .career-info h4 {
            color: #121c27;
            margin-bottom: 15px;
            font-weight: 600;
          }

          .career-info p {
            color: #6b7280;
            margin-bottom: 25px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          @media (max-width: 992px) {
            .col-lg-5 {
              margin-right: 0 !important;
              margin-bottom: 2rem;
            }
          }

          @media (max-width: 768px) {
            .career-card {
              padding: 20px;
            }

            .career-card__header {
              flex-direction: column;
              gap: 15px;
              align-items: flex-start;
            }

            .job-meta {
              flex-direction: column;
              align-items: flex-start;
              gap: 8px;
            }

            .job-details {
              flex-direction: column;
              gap: 8px;
            }

            .skills-tags {
              gap: 6px;
            }

            .skill-tag {
              font-size: 11px;
              padding: 4px 8px;
            }
          }
        `}</style>
      </section>
    </>
  );
}

export default CareerGrid;
