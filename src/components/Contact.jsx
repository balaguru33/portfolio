import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [copied, setCopied] = useState(false);

  const emailAddress = 'balaguru3012@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Construct pre-filled mailto link for direct visitor outreach
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      window.location.href = mailtoUrl;
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="contact-container container">
        
        {/* Contact Banner Wrapper matching Enver style with metal bg */}
        <div className="contact-metal-banner">
          {/* Decorative floating vectors */}
          <div className="banner-glow-radial"></div>

          <div className="banner-content-grid">
            
            {/* Column 1: Info and Slogan */}
            <div className="banner-info-column">
              <h2 className="banner-title">
                Get in touch for career opportunities
              </h2>
              
              <div className="connection-channels">
                {/* Email Direct */}
                <div className="channel-node">
                  <div className="channel-icon-circle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="channel-meta">
                    <span className="channel-label">Email Direct</span>
                    <span className="channel-value">{emailAddress}</span>
                  </div>
                  <button className="btn-copy-inline" onClick={handleCopyEmail}>
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>

                {/* Phone */}
                <div className="channel-node">
                  <div className="channel-icon-circle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="channel-meta">
                    <span className="channel-label">Phone Direct</span>
                    <span className="channel-value">+91 6383583914</span>
                  </div>
                </div>

                {/* Location */}
                <div className="channel-node">
                  <div className="channel-icon-circle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="channel-meta">
                    <span className="channel-label">Location</span>
                    <span className="channel-value">Coimbatore, TN</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Send Message Form */}
            <div className="banner-form-column">
              <h3 className="form-column-title">Send a Message</h3>
              
              <form onSubmit={handleSubmit} noValidate className="contact-form-layout">
                <div className="form-row-double">
                  <div className="form-group-field">
                    <label htmlFor="name" className="field-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`field-input ${errors.name ? 'input-error' : ''}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="field-error-text">{errors.name}</span>}
                  </div>

                  <div className="form-group-field">
                    <label htmlFor="email" className="field-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`field-input ${errors.email ? 'input-error' : ''}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="field-error-text">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group-field">
                  <label htmlFor="subject" className="field-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`field-input ${errors.subject ? 'input-error' : ''}`}
                    placeholder="MNC Opportunity / Collaboration"
                  />
                  {errors.subject && <span className="field-error-text">{errors.subject}</span>}
                </div>

                <div className="form-group-field">
                  <label htmlFor="message" className="field-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`field-textarea ${errors.message ? 'input-error' : ''}`}
                    placeholder="Hi Balaguru, I'd love to connect..."
                  />
                  {errors.message && <span className="field-error-text">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-submit-form" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <svg className="btn-spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="8"></circle>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-status-alert alert-success">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Redirecting to mail client...
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
