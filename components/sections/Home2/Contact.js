import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation Schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

function Contact() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Form Submitted:", data);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      reset();
      alert("Your message has been sent!");
    }, 2000);
  };

  return (
    <section className="contact-area pt-100 pb-100">
      <div className="container">
        <div className="row g-0">
          {/* Left Sidebar - Contact Information */}
          <div className="col-lg-5">
            <div
              className="contact-info-sidebar"
              style={{
                background: "#121c27",
                padding: "60px 40px",
                height: "100%",
                borderRadius: "10px 0 0 10px",
              }}
            >
              <div className="contact-info-content">
                <h3 className="contact-info-title text-white mb-4">
                  Contact Information
                </h3>
                <p className="text-white mb-5 opacity-90">
                  Have questions, feedback, or inquiries? Fill out the form
                  below to get in touch with us. Our team is here to assist you
                  and will get back to you as soon as possible.
                </p>

                {/* Phone Numbers */}
                <div className="contact-info-item mb-4">
                  <div className="d-flex align-items-center">
                    <div
                      className="contact-icon me-3"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "rgba(255,255,255,0.2)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i className="fa fa-phone text-white"></i>
                    </div>
                    <div>
                      <h6 className="text-white mb-1">Call Us</h6>
                      <p className="text-white mb-1 opacity-90">
                        USA: +1 (346) 305-8999
                      </p>
                      <p className="text-white mb-0 opacity-90">
                        IND: +91 9900297673
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-info-item mb-4">
                  <div className="d-flex align-items-center">
                    <div
                      className="contact-icon me-3"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "rgba(255,255,255,0.2)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i className="fa fa-envelope text-white"></i>
                    </div>
                    <div>
                      <h6 className="text-white mb-1">Email</h6>
                      <p className="text-white mb-0 opacity-90">
                        operations@stratify.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="contact-info-item mb-5">
                  <div className="d-flex align-items-start">
                    <div
                      className="contact-icon me-3"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "rgba(255,255,255,0.2)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i className="fa fa-map-marker text-white"></i>
                    </div>
                    <div>
                      <h6 className="text-white mb-1">US Headquarters</h6>
                      <p className="text-white mb-0 opacity-90">
                        Suite 304, 800 N King Street,
                        <br />
                        Wilmington, DE 19801, United States
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="contact-social">
                  <h6 className="text-white mb-3">Follow Social:</h6>
                  <div className="social-links">
                    <a
                      href="#"
                      className="social-link me-3"
                      style={{
                        width: "35px",
                        height: "35px",
                        backgroundColor: "rgba(255,255,255,0.2)",
                        borderRadius: "50%",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-lg-7">
            <div
              className="contact-form-wrapper"
              style={{
                padding: "60px 50px",
                backgroundColor: "#fff",
                borderRadius: "0 10px 10px 0",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              {/* Form Header */}
              <div className="form-header mb-4">
                <span
                  className="form-badge"
                  style={{
                    color: "#121c27",
                    fontSize: "14px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  🔵 GET IN TOUCH
                </span>
                <h2
                  className="form-title mt-2 mb-0"
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: "#2d3748",
                    lineHeight: "1.2",
                  }}
                >
                  Your Gateway To Your
                  <br />
                  Seamless Communication.
                </h2>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        htmlFor="your-name"
                        className="form-label"
                        style={{
                          color: "#2d3748",
                          fontSize: "14px",
                          fontWeight: "600",
                          marginBottom: "8px",
                        }}
                      >
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="your-name"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        style={{
                          border: "1px solid #e2e8f0",
                          borderRadius: "8px",
                          padding: "15px 20px",
                          fontSize: "16px",
                          transition: "all 0.3s ease",
                        }}
                        {...register("name")}
                      />
                      {errors.name && (
                        <p
                          className="error mt-1"
                          style={{ color: "#e53e3e", fontSize: "14px" }}
                        >
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label
                        htmlFor="your-email"
                        className="form-label"
                        style={{
                          color: "#2d3748",
                          fontSize: "14px",
                          fontWeight: "600",
                          marginBottom: "8px",
                        }}
                      >
                        Your Email*
                      </label>
                      <input
                        type="email"
                        id="your-email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        style={{
                          border: "1px solid #e2e8f0",
                          borderRadius: "8px",
                          padding: "15px 20px",
                          fontSize: "16px",
                          transition: "all 0.3s ease",
                        }}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p
                          className="error mt-1"
                          style={{ color: "#e53e3e", fontSize: "14px" }}
                        >
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-group mt-4">
                  <label
                    htmlFor="message"
                    className="form-label"
                    style={{
                      color: "#2d3748",
                      fontSize: "14px",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    Write Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="6"
                    placeholder="Write Message"
                    style={{
                      border: "1px solid #e2e8f0",
                      borderRadius: "8px",
                      padding: "15px 20px",
                      fontSize: "16px",
                      resize: "vertical",
                      transition: "all 0.3s ease",
                    }}
                    {...register("message")}
                  ></textarea>
                  {errors.message && (
                    <p
                      className="error mt-1"
                      style={{ color: "#e53e3e", fontSize: "14px" }}
                    >
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-one mt-4"
                  disabled={loading}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <i className="fa fa-arrow-right"></i>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles */}
      <style jsx>{`
        .form-control:focus {
          border-color: #121c27 !important;
          box-shadow: 0 0 0 0.2rem rgba(18, 28, 39, 0.25) !important;
        }

        .contact-info-item:hover .contact-icon {
          background-color: rgba(255, 255, 255, 0.3) !important;
          transform: scale(1.1);
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background-color: rgba(255, 255, 255, 0.4) !important;
          transform: scale(1.1);
          transition: all 0.3s ease;
        }

        @media (max-width: 991px) {
          .contact-info-sidebar {
            border-radius: 10px 10px 0 0 !important;
            padding: 40px 30px !important;
          }

          .contact-form-wrapper {
            border-radius: 0 0 10px 10px !important;
            padding: 40px 30px !important;
          }

          .form-title {
            font-size: 28px !important;
          }
        }

        @media (max-width: 767px) {
          .contact-info-sidebar,
          .contact-form-wrapper {
            padding: 30px 20px !important;
          }

          .form-title {
            font-size: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;
