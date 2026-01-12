import React, { useState } from 'react';
import { FaEarthAmericas } from "react-icons/fa6";
import { IoLogoDesignernews } from "react-icons/io";

const Taabss = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="tabs-container">
      <nav className="tabs-nav">
        <div
          className={`tab-btn ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          Home
        </div>
        <div
          className={`tab-btn ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => setActiveTab('services') }
        >
          Our Services
        </div>
        <div
          className={`tab-btn ${activeTab === 'content' ? 'active' : ''}`}
          onClick={() => setActiveTab('content')}
        >
          Content
        </div>
      </nav>

      <div className="tab-content">
        {activeTab === 'home' && (
          <div>
            <h2>Welcome to Our Website</h2>
            <p>We build modern, fast and beautiful digital experiences for your business.</p>
            <div className="cta-btn">Get Started </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="services-section">
            <h2>Our Services</h2>
            <p className="intro">We help businesses grow with powerful digital solutions.</p>

            <div className="services-grid">
              <div className="service-card">
                <FaEarthAmericas />
                <h3>Website Development</h3>
                <p>Custom, responsive & SEO-ready websites that convert visitors into customers.</p>
              </div>

              <div className="service-card">
                <IoLogoDesignernews />
                <h3>UI/UX Design</h3>
                <p>Beautiful, user-friendly designs that people love to use.</p>
              </div>

              <div className="service-card">
                <h3>Digital Marketing</h3>
                <p>SEO, Google Ads & Social Media strategies to grow your reach.</p>
              </div>

              <div className="service-card">
                <h3>Maintenance & Support</h3>
                <p>Keep your website fast, secure and always up-to-date.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'content' && (
          <div>
            <h2>Our Content</h2>
            <ul>
              <li>Blog: Latest web trends 2026</li>
              <li>Guide: How to choose the best tech stack</li>
              <li>Case Study: 200% growth in 6 months</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Taabss;