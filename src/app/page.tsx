"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  // Contact Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "website_dev",
    budget: "$1,000 - $3,000",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      // Connect to Django backend API
      const response = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || "Thank you! Your request has been successfully submitted.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "website_dev",
          budget: "$1,000 - $3,000",
          message: "",
        });
      } else {
        // Handle validation errors or server errors
        const errorMsg = data.errors
          ? Object.entries(data.errors)
              .map(([key, val]) => `${key}: ${Array.isArray(val) ? val.join(", ") : val}`)
              .join(" | ")
          : data.message || "Failed to submit request. Please try again.";
        
        setStatus({
          type: "error",
          message: errorMsg,
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        type: "error",
        message: "Unable to connect to the server. Please check that the Django API is running or try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Sleek Navigation Header */}
      <header className={styles.header}>
        <div className={`${styles.navContainer} container`}>
          <a href="#" className={styles.logo}>
            <span className={styles.logoIcon}>
              <svg width="32" height="32" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5H18L26.5 22L35 5H40L29 27L22.5 40L5 5Z" fill="url(#logo-grad-1)" />
                <path d="M40 5L30.5 24L26.5 32L35 32L40 24V5Z" fill="url(#logo-grad-2)" />
                <defs>
                  <linearGradient id="logo-grad-1" x1="5" y1="5" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#60A5FA" />
                    <stop offset="1" stopColor="#2563EB" />
                  </linearGradient>
                  <linearGradient id="logo-grad-2" x1="26.5" y1="5" x2="40" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#06B6D4" />
                    <stop offset="1" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            V2 Labs
          </a>

          <nav className={styles.navLinks}>
            <a onClick={() => scrollTo("hero")} className={styles.navLink}>Home</a>
            <a onClick={() => scrollTo("services")} className={styles.navLink}>Our Services</a>
            <a onClick={() => scrollTo("estimate")} className={styles.navLink}>Estimate Project</a>
            <button onClick={() => scrollTo("estimate")} className="btn-secondary">
              Let's Talk
            </button>
          </nav>
        </div>
      </header>

      <main className="container">
        {/* Hero Section */}
        <section id="hero" className={styles.hero}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Build • Innovate • Scale
          </div>
          <h1 className={styles.heroTitle}>
            We Build <span className={styles.gradientText}>Digital Experiences</span> That Drive Results.
          </h1>
          <p className={styles.heroDesc}>
            V2 Labs is a premium digital studio focused on building modern websites,
            scalable web applications, and stunning designs for businesses and startups.
          </p>
          <div className={styles.heroActions}>
            <button onClick={() => scrollTo("estimate")} className="btn-primary">
              Estimate Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button onClick={() => scrollTo("services")} className="btn-secondary">
              Explore Services
            </button>
          </div>
        </section>

        {/* Services Grid Section */}
        <section id="services" className={styles.services}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionSubtitle}>Exclusive Capabilities</p>
            <h2 className={styles.sectionTitle}>Our Premium Services</h2>
          </div>

          <div className={styles.servicesGrid}>
            {/* Website Development */}
            <div className={`${styles.serviceCard} glass-card`}>
              <div className={styles.serviceIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                  <line x1="14" y1="4" x2="10" y2="20"></line>
                </svg>
              </div>
              <h3 className={styles.serviceCardTitle}>Website Development</h3>
              <p className={styles.serviceCardDesc}>
                Custom, responsive, and high performance websites tailored to showcase your unique brand identity.
              </p>
            </div>

            {/* Web Application Development */}
            <div className={`${styles.serviceCard} glass-card`}>
              <div className={styles.serviceIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className={styles.serviceCardTitle}>Web Applications</h3>
              <p className={styles.serviceCardDesc}>
                Powerful, highly scalable web portals built with cutting-edge technologies to automate and scale business growth.
              </p>
            </div>

            {/* E-Commerce Solutions */}
            <div className={`${styles.serviceCard} glass-card`}>
              <div className={styles.serviceIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <h3 className={styles.serviceCardTitle}>E-Commerce (Shopify)</h3>
              <p className={styles.serviceCardDesc}>
                Feature-rich, conversion-focused e-commerce layouts built to maximize sales and elevate checkout experience.
              </p>
            </div>

            {/* Mobile Responsive Design */}
            <div className={`${styles.serviceCard} glass-card`}>
              <div className={styles.serviceIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <h3 className={styles.serviceCardTitle}>Mobile Responsive Design</h3>
              <p className={styles.serviceCardDesc}>
                Pixel-perfect, mobile-first design system that ensures a seamless, modern experience on all screen sizes.
              </p>
            </div>

            {/* Performance Optimization */}
            <div className={`${styles.serviceCard} glass-card`}>
              <div className={styles.serviceIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className={styles.serviceCardTitle}>Performance & SEO</h3>
              <p className={styles.serviceCardDesc}>
                Lightning fast loading speed combined with search engine optimizations to drive organic traffic and keep users engaged.
              </p>
            </div>

            {/* Logo & Design */}
            <div className={`${styles.serviceCard} glass-card`}>
              <div className={styles.serviceIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M12 8v8"></path>
                  <path d="M8 12h8"></path>
                </svg>
              </div>
              <h3 className={styles.serviceCardTitle}>Logo & Brand Identity</h3>
              <p className={styles.serviceCardDesc}>
                Iconic logos, bespoke branding assets, video editing, and graphic design that set your brand miles apart.
              </p>
            </div>
          </div>
        </section>

        {/* Project Estimator Section */}
        <section id="estimate" className={styles.contact}>
          <div className={styles.contactLayout}>
            {/* Left side details */}
            <div className={styles.contactDetails}>
              <div>
                <p className={styles.sectionSubtitle}>Start a Collaboration</p>
                <h2 className={styles.contactTitle}>Let's Build Something Revolutionary</h2>
                <p className={styles.contactDesc}>
                  Whether you need a custom landing page, an e-commerce hub, video editing, or an enterprise scale portal, we are ready to partner with you. Fill out the estimation form to receive a prompt proposal.
                </p>
              </div>

              <div className={styles.bulletPoints}>
                <div className={styles.bulletPoint}>
                  <span className={styles.bulletIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  Premium, hand-crafted Vanilla CSS custom styles.
                </div>
                <div className={styles.bulletPoint}>
                  <span className={styles.bulletIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  Django-powered secure lead tracking databases.
                </div>
                <div className={styles.bulletPoint}>
                  <span className={styles.bulletIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  Full Docker support ready for deployment.
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className={`${styles.formCard} glass-card`}>
              {status.type && (
                <div className={`${styles.statusMessage} ${status.type === "success" ? styles.statusSuccess : styles.statusError}`}>
                  {status.type === "success" ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 8 12 12 14 14"></polyline>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  )}
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Phone (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Service Type</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="website_dev">Website Development</option>
                      <option value="webapp_dev">Web Application</option>
                      <option value="ecommerce">E-Commerce (Shopify)</option>
                      <option value="wordpress">WordPress Custom Site</option>
                      <option value="video_editing">Video Editing</option>
                      <option value="logo_design">Logo & Graphic Design</option>
                      <option value="other">Other / Custom</option>
                    </select>
                  </div>
                  <div className={styles.formFullWidth}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Estimated Budget</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={styles.select}
                      >
                        <option value="Under $1,000">Under $1,000</option>
                        <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                        <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.formFullWidth}>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>Project Scope & Goals</label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your startup, requirements, timelines, etc."
                        className={styles.textarea}
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" disabled={loading} className={`${styles.formBtn} btn-primary`}>
                  {loading ? (
                    <>
                      Submitting Project Details...
                    </>
                  ) : (
                    <>
                      Submit Project Lead
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Premium Footer */}
      <footer className={styles.footer}>
        <div className={`${styles.footerGrid} container`}>
          <div className={styles.footerCol}>
            <a href="#" className={styles.logo}>
              <span className={styles.logoIcon}>
                <svg width="24" height="24" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 5H18L26.5 22L35 5H40L29 27L22.5 40L5 5Z" fill="url(#footer-logo-grad)" />
                  <defs>
                    <linearGradient id="footer-logo-grad" x1="5" y1="5" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#60A5FA" />
                      <stop offset="1" stopColor="#2563EB" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              V2 Labs
            </a>
            <p className={styles.footerText}>
              V2 Labs is a modern digital agency specializing in custom high-fidelity web and mobile responsive builds.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Navigation</h4>
            <div className={styles.footerLinks}>
              <a onClick={() => scrollTo("hero")} className={styles.footerLink}>Home</a>
              <a onClick={() => scrollTo("services")} className={styles.footerLink}>Services</a>
              <a onClick={() => scrollTo("estimate")} className={styles.footerLink}>Start Project</a>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Services</h4>
            <div className={styles.footerLinks}>
              <a onClick={() => scrollTo("services")} className={styles.footerLink}>Web Development</a>
              <a onClick={() => scrollTo("services")} className={styles.footerLink}>E-Commerce</a>
              <a onClick={() => scrollTo("services")} className={styles.footerLink}>Mobile Design</a>
              <a onClick={() => scrollTo("services")} className={styles.footerLink}>Logo & Brand</a>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4 className={styles.footerColTitle}>Contact Studio</h4>
            <p className={styles.footerText}>
              📧 hello@v2labs.co<br />
              📞 +91 (800) 555-0199<br />
              📍 V2 Labs Agency, Silicon Square
            </p>
          </div>
        </div>

        <div className={`${styles.copyright} container`}>
          © 2026 V2 Labs. Built with Next.js, Django & premium engineering.
        </div>
      </footer>
    </>
  );
}
