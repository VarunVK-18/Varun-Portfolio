import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header reveal-fade-up">
          <div className="section-tag">
            <Mail size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="hover-gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Open for software engineering opportunities, contract projects, and architecture discussions.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid">
          
          {/* Info Card */}
          <div className="contact-info-card reveal-fade-up">
            <h3 className="info-card-title hover-gradient-text">Contact Information</h3>
            <p className="info-card-desc">
              Feel free to reach out directly via email or drop a message through the form. I'll get back to you promptly.
            </p>

            <div className="contact-methods">
              <a href={`mailto:${personalInfo.email}`} className="contact-method-item">
                <div className="method-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="method-label">Email</div>
                  <div className="method-value hover-gradient-text">{personalInfo.email}</div>
                </div>
              </a>

              <div className="contact-method-item">
                <div className="method-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="method-label">Location</div>
                  <div className="method-value">{personalInfo.location}</div>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="method-icon-box">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <div className="method-label">Current Status</div>
                  <div className="method-value status-available">{personalInfo.status}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="contact-form-card reveal-fade-up">
            {submitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={44} className="success-icon" />
                <h4 className="success-title">Message Received</h4>
                <p className="success-desc">
                  Thank you for reaching out! I'll reply to your email as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="e.g. Project Discussion / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input form-textarea"
                  />
                </div>

                <button type="submit" className="btn-submit">
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
