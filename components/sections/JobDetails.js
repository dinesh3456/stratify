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
                      <i className="fa-light fa-calendar"></i>
                      Posted Date
                    </div>
                    <div className="overview-value">{job.posted}</div>
                  </div>
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
                      <i className="fa-light fa-clock"></i>
                      Job Type
                    </div>
                    <div className="overview-value">{job.employmentType}</div>
                  </div>
                  <div className="overview-item">
                    <div className="overview-label">
                      <i className="fa-light fa-map-marker-alt"></i>
                      Location
                    </div>
                    <div className="overview-value">{job.location}</div>
                  </div>
                </div>

                <div className="share-job">
                  <h4>Share This Job</h4>
                  <div className="share-buttons">
                    <a href="#" className="share-btn linkedin">
                      <i className="fa-brands fa-linkedin-in"></i>
                      LinkedIn
                    </a>
                    <a href="#" className="share-btn twitter">
                      <i className="fa-brands fa-twitter"></i>
                      Twitter
                    </a>
                    <a href="#" className="share-btn facebook">
                      <i className="fa-brands fa-facebook-f"></i>
                      Facebook
                    </a>
                    <a href="#" className="share-btn email">
                      <i className="fa-light fa-envelope"></i>
                      Email
                    </a>
                  </div>
                </div>

                <div className="related-jobs">
                  <h4>Related Jobs</h4>
                  {job.id === 1 ? (
                    <div className="related-job-item">
                      <h6>
                        <Link href="/career/2">Power Platform Developer</Link>
                      </h6>
                      <span>Technology • Remote</span>
                    </div>
                  ) : (
                    <div className="related-job-item">
                      <h6>
                        <Link href="/career/1">
                          Business Program Manager (Partner Enablement)
                        </Link>
                      </h6>
                      <span>Business Development • Remote</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="row mt-60">
            <div className="col-12">
              <div className="job-navigation">
                <Link href="/career" className="back-to-jobs">
                  <i className="fa-light fa-arrow-left"></i>
                  Back to All Jobs
                </Link>
                <button
                  className="apply-btn-secondary"
                  onClick={() => setShowApplicationForm(true)}
                >
                  Apply for This Position
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="application-modal">
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

            {submitStatus === "success" ? (
              <div className="success-message">
                <i className="fa-solid fa-check-circle"></i>
                <h4>Application Submitted Successfully!</h4>
                <p>
                  Thank you for your interest. We'll review your application and
                  get back to you within 2-3 business days.
                </p>
                <button
                  className="btn-one"
                  onClick={() => setShowApplicationForm(false)}
                >
                  Close
                </button>
              </div>
            ) : (
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
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
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
                  <small>Accepted formats: PDF, DOC, DOCX (Max 5MB)</small>
                </div>

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
                  <label>Portfolio Website</label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    placeholder="https://yourportfolio.com"
                  />
                </div>

                <div className="form-group">
                  <label>Cover Letter *</label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows="6"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    required
                  ></textarea>
                </div>

                <div className="form-row">
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
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => setShowApplicationForm(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-submit"
                    disabled={submitStatus === "submitting"}
                  >
                    {submitStatus === "submitting" ? (
                      <>
                        <i className="fa-light fa-spinner fa-spin"></i>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <i className="fa-regular fa-arrow-right"></i>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default JobDetails;
