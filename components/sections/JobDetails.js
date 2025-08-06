import React, { useState } from "react";
import styles from "./JobDetails.module.css"; // Import CSS module

const JobDetails = ({ job }) => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);
  const [submitStatus, setSubmitStatus] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    resume: null,
  });

  const handleSave = () => {
    if (savedJobs.includes(job.id)) {
      setSavedJobs(savedJobs.filter((id) => id !== job.id));
    } else {
      setSavedJobs([...savedJobs, job.id]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setSubmitStatus("success");
      setTimeout(() => {
        setShowApplicationForm(false);
        setSubmitStatus("");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          experience: "",
          coverLetter: "",
          resume: null,
        });
      }, 2000);
    }, 1500);
  };

  const shareJob = (platform) => {
    const url = window.location.href;
    const text = `Check out this job: ${job.title} at Stratify`;

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`);
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        );
        break;
      case "email":
        window.open(`mailto:?subject=${text}&body=${url}`);
        break;
      default:
        break;
    }
  };

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <>
      <section className={styles["job-details-area"]}>
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className={styles["job-details__content"]}>
                {/* Job Header */}
                <div className={styles["job-header"]}>
                  <div className={styles["job-header__main"]}>
                    <div className={styles["company-logo"]}>
                      <div className={styles["logo-placeholder"]}></div>
                    </div>
                    <div className={styles["job-info"]}>
                      <h1 className={styles["job-title"]}>{job.title}</h1>
                      <div className={styles["job-meta"]}>
                        <span>
                          <i className="fa-light fa-location-dot"></i>
                          {job.location}
                        </span>
                        <span>
                          <i className="fa-light fa-clock"></i>
                          {job.employmentType}
                        </span>
                        <span>
                          <i className="fa-light fa-calendar"></i>
                          Posted {job.posted}
                        </span>
                        <span className={styles.department}>
                          {job.department}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles["job-header__actions"]}>
                    <button
                      className={styles["apply-btn-primary"]}
                      onClick={() => setShowApplicationForm(true)}
                    >
                      Apply Now <i className="fa-regular fa-arrow-right"></i>
                    </button>
                    <button className={styles["save-btn"]} onClick={handleSave}>
                      <i
                        className={`fa-${
                          savedJobs.includes(job.id) ? "solid" : "regular"
                        } fa-bookmark`}
                      ></i>
                      {savedJobs.includes(job.id) ? "Saved" : "Save Job"}
                    </button>
                  </div>
                </div>

                {/* Job Description */}
                <div className={styles["job-section"]}>
                  <h3>Job Description</h3>
                  <p>{job.description}</p>
                </div>

                {/* Key Responsibilities */}
                <div className={styles["job-section"]}>
                  <h3>Key Responsibilities</h3>
                  <ul className={styles["responsibilities-list"]}>
                    {job.responsibilities?.map((responsibility, index) => (
                      <li key={index}>
                        <i className="fa-solid fa-check"></i>
                        {responsibility}
                      </li>
                    )) || <li>No responsibilities specified</li>}
                  </ul>
                </div>

                {/* Requirements */}
                <div className={styles["job-section"]}>
                  <h3>Requirements</h3>
                  <ul className={styles["requirements-list"]}>
                    {job.requirements?.map((requirement, index) => (
                      <li key={index}>
                        <i className="fa-solid fa-circle-dot"></i>
                        {requirement}
                      </li>
                    )) || <li>No requirements specified</li>}
                  </ul>
                </div>

                {/* Required Skills */}
                <div className={styles["job-section"]}>
                  <h3>Required Skills</h3>
                  <div className={styles["skills-tags"]}>
                    {job.requiredSkills?.map((skill, index) => (
                      <span key={index} className={styles["skill-tag"]}>
                        {skill}
                      </span>
                    )) || <p>No skills specified</p>}
                  </div>
                </div>

                {/* Benefits */}
                <div className={styles["job-section"]}>
                  <h3>Benefits & Perks</h3>
                  <ul className={styles["benefits-list"]}>
                    {job.benefits?.map((benefit, index) => (
                      <li key={index}>
                        <i className="fa-solid fa-star"></i>
                        {benefit}
                      </li>
                    )) || <li>No benefits specified</li>}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className={styles["job-sidebar"]}>
                <div className={styles["job-overview"]}>
                  <h4>Job Overview</h4>

                  <div className={styles["overview-item"]}>
                    <div className={styles["overview-label"]}>
                      <i className="fa-light fa-dollar-sign"></i>
                      Salary Range
                    </div>
                    <div className={styles["overview-value"]}>{job.salary}</div>
                  </div>
                  <div className={styles["overview-item"]}>
                    <div className={styles["overview-label"]}>
                      <i className="fa-light fa-building"></i>
                      Department
                    </div>
                    <div className={styles["overview-value"]}>
                      {job.department}
                    </div>
                  </div>
                  <div className={styles["overview-item"]}>
                    <div className={styles["overview-label"]}>
                      <i className="fa-light fa-briefcase"></i>
                      Experience
                    </div>
                    <div className={styles["overview-value"]}>
                      {job.experience}
                    </div>
                  </div>
                  <div className={styles["overview-item"]}>
                    <div className={styles["overview-label"]}>
                      <i className="fa-light fa-clock"></i>
                      Job Type
                    </div>
                    <div className={styles["overview-value"]}>
                      {job.employmentType}
                    </div>
                  </div>
                  <div className={styles["overview-item"]}>
                    <div className={styles["overview-label"]}>
                      <i className="fa-light fa-location-dot"></i>
                      Location
                    </div>
                    <div className={styles["overview-value"]}>
                      {job.location}
                    </div>
                  </div>
                </div>

                {/* Share Job */}
                <div className={styles["share-job"]}>
                  <h4>Share This Job</h4>
                  <div className={styles["social-share"]}>
                    <button
                      className={`${styles["share-btn"]} ${styles.facebook}`}
                      onClick={() => shareJob("facebook")}
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button
                      className={`${styles["share-btn"]} ${styles.twitter}`}
                      onClick={() => shareJob("twitter")}
                    >
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button
                      className={`${styles["share-btn"]} ${styles.linkedin}`}
                      onClick={() => shareJob("linkedin")}
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                    <button
                      className={`${styles["share-btn"]} ${styles.email}`}
                      onClick={() => shareJob("email")}
                    >
                      <i className="fa-light fa-envelope"></i>
                    </button>
                  </div>
                </div>

                {/* Related Jobs */}
                <div className={styles["related-jobs"]}>
                  <h4>Related Jobs</h4>

                  <div className={styles["related-job-item"]}>
                    <h6>Senior Developer</h6>
                    <div className={styles["job-meta-small"]}>
                      <span>Remote</span>
                      <span>Full-time</span>
                    </div>
                  </div>

                  <div className={styles["related-job-item"]}>
                    <h6>Project Manager</h6>
                    <div className={styles["job-meta-small"]}>
                      <span>Hybrid</span>
                      <span>Full-time</span>
                    </div>
                  </div>

                  <div className={styles["related-job-item"]}>
                    <h6>UX Designer</h6>
                    <div className={styles["job-meta-small"]}>
                      <span>Remote</span>
                      <span>Contract</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Modal */}
        {showApplicationForm && (
          <div className={styles["application-modal"]}>
            <div
              className={styles["modal-overlay"]}
              onClick={() => setShowApplicationForm(false)}
            ></div>
            <div className={styles["modal-content"]}>
              <div className={styles["modal-header"]}>
                <h3>Apply for {job.title}</h3>
                <button
                  className={styles["close-btn"]}
                  onClick={() => setShowApplicationForm(false)}
                >
                  ×
                </button>
              </div>
              <form
                className={styles["application-form"]}
                onSubmit={handleSubmit}
              >
                <div className={styles["form-row"]}>
                  <div className={styles["form-group"]}>
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles["form-row"]}>
                  <div className={styles["form-group"]}>
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles["form-group"]}>
                    <label>Years of Experience</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="2-3">2-3 years</option>
                      <option value="4-5">4-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                </div>

                <div className={styles["form-group"]}>
                  <label>Cover Letter</label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're the perfect fit for this role..."
                  />
                </div>

                <div className={styles["form-group"]}>
                  <label>Resume/CV *</label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleInputChange}
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>

                <div className={styles["form-actions"]}>
                  <button
                    type="button"
                    className={styles["btn-secondary"]}
                    onClick={() => setShowApplicationForm(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={styles["btn-primary"]}
                    disabled={submitStatus === "loading"}
                  >
                    {submitStatus === "loading"
                      ? "Submitting..."
                      : "Submit Application"}
                  </button>
                </div>

                {submitStatus === "success" && (
                  <div className={styles["success-message"]}>
                    <i className="fa-solid fa-check-circle"></i>
                    Application submitted successfully! We'll be in touch soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default JobDetails;
