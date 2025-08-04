import React, { useState } from "react";
import Link from "next/link";

const JobDetails = ({ job }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
    linkedIn: "",
    portfolio: "",
    experience: "",
    availability: "",
  });

  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        resume: null,
        coverLetter: "",
        linkedIn: "",
        portfolio: "",
        experience: "",
        availability: "",
      });
    }, 2000);
  };

  return (
    <>
      <section className="job-details-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="job-details__content">
                {/* Job Header */}
                <div className="job-header">
                  <div className="job-header__main">
                    <div className="company-logo">
                      <div className="logo-placeholder"></div>
                    </div>
                    <div className="job-info">
                      <h1 className="job-title">{job.title}</h1>
                      <div className="job-meta">
                        <span className="department">{job.department}</span>
                        <span className="location">
                          <i className="fa-light fa-location-dot"></i>
                          {job.location}
                        </span>
                        <span className="employment-type">
                          <i className="fa-light fa-clock"></i>
                          {job.employmentType}
                        </span>
                        <span className="experience">
                          <i className="fa-light fa-briefcase"></i>
                          {job.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="job-header__actions">
                    <button
                      className="apply-btn-primary"
                      onClick={() => setShowApplicationForm(true)}
                    >
                      Apply Now <i className="fa-regular fa-arrow-right"></i>
                    </button>
                    <button className="save-btn">
                      <i className="fa-regular fa-bookmark"></i>
                      Save Job
                    </button>
                  </div>
                </div>

                {/* Job Description */}
                <div className="job-section">
                  <h3>Job Description</h3>
                  <p>{job.description}</p>
                </div>

                {/* Key Responsibilities */}
                <div className="job-section">
                  <h3>Key Responsibilities</h3>
                  <ul className="responsibilities-list">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index}>
                        <i className="fa-solid fa-check"></i>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div className="job-section">
                  <h3>Requirements</h3>
                  <ul className="requirements-list">
                    {job.requirements.map((requirement, index) => (
                      <li key={index}>
                        <i className="fa-solid fa-circle-dot"></i>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Required Skills */}
                <div className="job-section">
                  <h3>Required Skills</h3>
                  <div className="skills-tags">
                    {job.requiredSkills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="job-section">
                  <h3>Benefits & Perks</h3>
                  <ul className="benefits-list">
                    {job.benefits.map((benefit, index) => (
                      <li key={index}>
                        <i className="fa-solid fa-star"></i>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="job-sidebar">
                <div className="job-overview">
                  <h4>Job Overview</h4>

                  <div className="overview-item">
                    <div className="overview-label">
                      <i className="fa-light fa-dollar-sign"></i>
                      Salary Range
                    </div>
                    <div className="overview-value">{job.salary}</div>
                  </div>
                  <div className="overview-item">
                    <div className="overview-label">
                      <i className="fa-light fa-building"></i>
                      Department
                    </div>
                    <div className="overview-value">{job.department}</div>
                  </div>
                  <div className="overview-item">
                    <div className="overview-label">
                      <i className="fa-light fa-briefcase"></i>
                      Experience
                    </div>
                    <div className="overview-value">{job.experience}</div>
                  </div>
                  <div className="overview-item">
                    <div className="overview-label">
                      <i className="fa-light fa-clock"></i>
                      Job Type
                    </div>
                    <div className="overview-value">{job.employmentType}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Form Modal */}
        {showApplicationForm && (
          <div className="application-modal">
            <div
              className="modal-overlay"
              onClick={() => setShowApplicationForm(false)}
            ></div>
            <div className="modal-content">
              <div className="modal-header">
                <h3>Apply for {job.title}</h3>
                <button
                  className="close-btn"
                  onClick={() => setShowApplicationForm(false)}
                >
                  <i className="fa-light fa-times"></i>
                </button>
              </div>
              <form onSubmit={handleSubmit} className="application-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Resume/CV *</label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleInputChange}
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Cover Letter</label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell us why you're interested in this position..."
                  ></textarea>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>LinkedIn Profile</label>
                    <input
                      type="url"
                      name="linkedIn"
                      value={formData.linkedIn}
                      onChange={handleInputChange}
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                  <div className="form-group">
                    <label>Portfolio/Website</label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Years of Experience</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="4-5">4-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Availability</label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                  >
                    <option value="">Select availability</option>
                    <option value="immediate">Immediate</option>
                    <option value="2-weeks">2 weeks notice</option>
                    <option value="1-month">1 month notice</option>
                    <option value="2-months">2+ months</option>
                  </select>
                </div>
                <div className="form-actions">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setShowApplicationForm(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={submitStatus === "submitting"}
                  >
                    {submitStatus === "submitting"
                      ? "Submitting..."
                      : "Submit Application"}
                  </button>
                </div>
                {submitStatus === "success" && (
                  <div className="success-message">
                    <i className="fa-solid fa-check-circle"></i>
                    Application submitted successfully! We'll be in touch soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </section>

      <style jsx>{`
        .job-details-area {
          background-color: #f8f9fa;
        }

        .job-details__content {
          background: white;
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          border: 1px solid #e9ecef;
          margin-bottom: 30px;
        }

        .job-header {
          border-bottom: 2px solid #f1f5f9;
          padding-bottom: 30px;
          margin-bottom: 40px;
        }

        .job-header__main {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 30px;
        }

        .company-logo .logo-placeholder {
          width: 80px;
          height: 80px;
          background: #121c27;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .company-logo .logo-placeholder::after {
          content: "S";
          color: white;
          font-size: 32px;
          font-weight: 700;
        }

        .job-info {
          flex: 1;
        }

        .job-title {
          font-size: 32px;
          font-weight: 700;
          color: #121c27;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .job-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          align-items: center;
        }

        .job-meta span {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
        }

        .job-meta i {
          color: #bb9a65;
          font-size: 16px;
        }

        .department {
          background: #f8f9fa;
          color: #121c27 !important;
          padding: 6px 14px;
          border-radius: 20px;
          border: 1px solid #e9ecef;
          font-weight: 600 !important;
        }

        .job-header__actions {
          display: flex;
          gap: 15px;
          align-items: center;
        }

        .apply-btn-primary {
          background: #121c27;
          color: white;
          padding: 16px 32px;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
        }

        .apply-btn-primary:before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #121c27;
          transition: left 0.3s ease;
          z-index: -1;
        }

        .apply-btn-primary:hover:before {
          left: 0;
        }

        .apply-btn-primary:hover {
          color: white;
        }

        .save-btn {
          background: white;
          color: #121c27;
          padding: 16px 24px;
          border: 2px solid #121c27;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .save-btn:hover {
          background: #121c27;
          color: white;
          border-color: #281e0fff;
        }

        .job-section {
          margin-bottom: 40px;
        }

        .job-section h3 {
          font-size: 24px;
          font-weight: 600;
          color: #121c27;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 10px;
        }

        .job-section h3::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background: #121c27;
          border-radius: 2px;
        }

        .job-section p {
          font-size: 16px;
          line-height: 1.7;
          color: #4b5563;
          margin-bottom: 0;
        }

        .responsibilities-list,
        .requirements-list,
        .benefits-list {
          list-style: none;
          padding: 0;
        }

        .responsibilities-list li,
        .requirements-list li,
        .benefits-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 15px;
          font-size: 16px;
          line-height: 1.6;
          color: #4b5563;
        }

        .responsibilities-list li i {
          color: #10b981;
          margin-top: 4px;
          font-size: 14px;
        }

        .requirements-list li i {
          color: #121c27;
          margin-top: 4px;
          font-size: 12px;
        }

        .benefits-list li i {
          color: #121c27;
          margin-top: 4px;
          font-size: 14px;
        }

        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .skill-tag {
          background: #f8f9fa;
          color: #121c27;
          padding: 10px 18px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          border: 2px solid #e9ecef;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .skill-tag:hover {
          background: #121c27;
          color: white;
          border-color: #121c27;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(187, 154, 101, 0.2);
        }

        .job-sidebar {
          position: sticky;
          top: 30px;
        }

        .job-overview,
        .share-job,
        .related-jobs {
          background: white;
          border-radius: 12px;
          padding: 30px;
          margin-bottom: 30px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          border: 1px solid #e9ecef;
        }

        .job-overview h4,
        .share-job h4,
        .related-jobs h4 {
          font-size: 20px;
          font-weight: 600;
          color: #121c27;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 2px solid #f1f5f9;
        }

        .overview-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding: 15px 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .overview-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        .overview-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
        }

        .overview-label i {
          color: #121c27;
          font-size: 16px;
        }

        .overview-value {
          font-size: 14px;
          font-weight: 600;
          color: #121c27;
        }

        .social-share {
          display: flex;
          gap: 12px;
        }

        .share-btn {
          width: 45px;
          height: 45px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 16px;
        }

        .share-btn.facebook {
          background: #1877f2;
          color: white;
        }

        .share-btn.twitter {
          background: #1da1f2;
          color: white;
        }

        .share-btn.linkedin {
          background: #0077b5;
          color: white;
        }

        .share-btn.email {
          background: #6b7280;
          color: white;
        }

        .share-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }

        .related-job-item {
          padding: 20px 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .related-job-item:last-child {
          border-bottom: none;
        }

        .related-job-item h6 {
          font-size: 16px;
          font-weight: 600;
          color: #121c27;
          margin-bottom: 10px;
        }

        .job-meta-small {
          display: flex;
          gap: 15px;
        }

        .job-meta-small span {
          font-size: 12px;
          color: #6b7280;
          background: #f8f9fa;
          padding: 4px 10px;
          border-radius: 12px;
        }

        /* Application Modal Styles */
        .application-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          cursor: pointer;
        }

        .modal-content {
          position: relative;
          background: white;
          border-radius: 12px;
          width: 90%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
        }

        .modal-header {
          padding: 30px 40px 20px;
          border-bottom: 2px solid #f1f5f9;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-header h3 {
          font-size: 24px;
          font-weight: 600;
          color: #121c27;
          margin: 0;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          color: #6b7280;
          cursor: pointer;
          padding: 5px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          background: #f3f4f6;
          color: #121c27;
        }

        .application-form {
          padding: 30px 40px 40px;
        }

        .form-row {
          display: flex;
          gap: 20px;
          margin-bottom: 25px;
        }

        .form-group {
          flex: 1;
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: #121c27;
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #121c27;
          box-shadow: 0 0 0 3px rgba(187, 154, 101, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-actions {
          display: flex;
          gap: 15px;
          justify-content: flex-end;
          margin-top: 30px;
        }

        .btn-secondary,
        .btn-primary {
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }

        .btn-secondary {
          background: #f3f4f6;
          color: #121c27;
          border: 2px solid #e9ecef;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .btn-secondary:hover {
          background: #121c27;
          color: white;
          border-color: #121c27;
        }

        .btn-primary {
          background: #121c27;
          color: white;
          border-radius: 50px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
        }

        .btn-primary:before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #121c27;
          transition: left 0.3s ease;
          z-index: -1;
        }

        .btn-primary:hover:not(:disabled):before {
          left: 0;
        }

        .btn-primary:hover:not(:disabled) {
          color: white;
        }

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .success-message {
          background: #d1fae5;
          color: #065f46;
          padding: 15px 20px;
          border-radius: 8px;
          margin-top: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
        }

        .success-message i {
          color: #10b981;
          font-size: 18px;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .job-sidebar {
            position: static;
            margin-top: 30px;
          }
        }

        @media (max-width: 768px) {
          .job-details__content {
            padding: 25px;
          }

          .job-header__main {
            flex-direction: column;
            gap: 15px;
          }

          .job-title {
            font-size: 24px;
          }

          .job-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .job-header__actions {
            flex-direction: column;
            align-items: stretch;
          }

          .apply-btn-primary,
          .save-btn {
            justify-content: center;
          }

          .form-row {
            flex-direction: column;
            gap: 0;
          }

          .modal-content {
            width: 95%;
            margin: 20px;
          }

          .modal-header,
          .application-form {
            padding: 20px;
          }

          .form-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 576px) {
          .container {
            padding: 0 15px;
          }

          .job-section h3 {
            font-size: 20px;
          }

          .skills-tags {
            gap: 8px;
          }

          .skill-tag {
            padding: 8px 14px;
            font-size: 12px;
          }

          .social-share {
            justify-content: center;
          }

          .share-btn {
            width: 40px;
            height: 40px;
            font-size: 14px;
          }

          .company-logo .logo-placeholder {
            width: 60px;
            height: 60px;
          }

          .company-logo .logo-placeholder::after {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default JobDetails;
