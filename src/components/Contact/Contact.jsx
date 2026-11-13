import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Phone, AlertCircle } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import './Contact.css';

// Regex patterns for validation
const NAME_REGEX = /^[a-zA-Z\s'.]{2,50}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const SUBJECT_REGEX = /^.{3,100}$/;
const MESSAGE_REGEX = /^[\s\S]{10,1500}$/;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    const trimmed = value.trim();
    switch (name) {
      case 'name':
        if (!trimmed) return 'Name is required';
        if (!NAME_REGEX.test(trimmed)) return 'Name must be 2-50 characters (letters, spaces, dots)';
        return '';
      case 'email':
        if (!trimmed) return 'Email address is required';
        if (!EMAIL_REGEX.test(trimmed)) return 'Please enter a valid email (e.g. name@domain.com)';
        return '';
      case 'subject':
        if (trimmed && !SUBJECT_REGEX.test(trimmed)) {
          return 'Subject must be between 3 and 100 characters';
        }
        return '';
      case 'message':
        if (!trimmed) return 'Message is required';
        if (!MESSAGE_REGEX.test(trimmed)) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all as touched
    const allTouched = { name: true, email: true, subject: true, message: true };
    setTouched(allTouched);

    // Validate all
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const subjectErr = validateField('subject', formData.subject);
    const messageErr = validateField('message', formData.message);

    const validationErrors = {
      name: nameErr,
      email: emailErr,
      subject: subjectErr,
      message: messageErr,
    };

    setErrors(validationErrors);

    const hasError = Object.values(validationErrors).some((err) => !!err);

    if (!hasError) {
      const recipient = personalInfo.email;
      const subject = encodeURIComponent(
        formData.subject.trim() || `Portfolio Contact from ${formData.name.trim()}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
      );

      // Open user's default email client addressed to your email
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        setTouched({});
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
            Open for app development roles, software engineering positions, and project collaborations.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="contact-grid">
          
          {/* Info Card */}
          <div className="contact-info-card reveal-slide-left">
            <h3 className="info-card-title hover-gradient-text">Contact Information</h3>
            <p className="info-card-desc">
              Feel free to reach out directly via email, phone, or drop a message through the form. I'll get back to you promptly.
            </p>

            <div className="contact-methods">
              <a href={`mailto:${personalInfo.email}`} className="contact-method-item">
                <div className="method-icon-box">
                  <Mail size={19} />
                </div>
                <div className="method-details">
                  <span className="method-label">Email Directly</span>
                  <span className="method-value">{personalInfo.email}</span>
                </div>
              </a>

              <a href={`tel:${personalInfo.phone.replace(/[\s-]/g, '')}`} className="contact-method-item">
                <div className="method-icon-box">
                  <Phone size={19} />
                </div>
                <div className="method-details">
                  <span className="method-label">Phone Call</span>
                  <span className="method-value">{personalInfo.phone}</span>
                </div>
              </a>

              <div className="contact-method-item">
                <div className="method-icon-box">
                  <MapPin size={19} />
                </div>
                <div className="method-details">
                  <span className="method-label">Location</span>
                  <span className="method-value">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Status Box */}
            <div className="contact-status-card">
              <div className="status-indicator-dot" />
              <div className="status-text-group">
                <span className="status-title">Actively Seeking Opportunities</span>
                <p className="status-desc">Available for Full-time Roles & High-Impact Projects</p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="contact-form-card reveal-slide-right">
            {submitted ? (
              <div className="form-success-box">
                <CheckCircle2 size={44} className="success-icon" />
                <h4 className="success-title">Message Draft Ready</h4>
                <p className="success-desc">
                  Your message has been opened in your email client addressed to {personalInfo.email}. I'll reply promptly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="field-required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-input ${errors.name ? 'input-error' : ''}`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <span className="field-error-msg" id="name-error">
                        <AlertCircle size={13} />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Your Email <span className="field-required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-input ${errors.email ? 'input-error' : ''}`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <span className="field-error-msg" id="email-error">
                        <AlertCircle size={13} />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="e.g. Flutter App Development / Job Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-input ${errors.subject ? 'input-error' : ''}`}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <span className="field-error-msg" id="subject-error">
                      <AlertCircle size={13} />
                      {errors.subject}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="field-required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write your message here (min. 10 characters)..."
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <span className="field-error-msg" id="message-error">
                      <AlertCircle size={13} />
                      {errors.message}
                    </span>
                  )}
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
