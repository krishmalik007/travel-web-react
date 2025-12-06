import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Contact.css';

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (formData.phone && !/^[0-9+\-\s]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please enter a message.';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus(null);
      return;
    }

    // Clear errors and "submit"
    setErrors({});
    setStatus('success');

    // For now, just log – yahan baad me API call laga sakte ho
    console.log('Contact form submitted:', formData);

    // Reset form
    setFormData(initialFormState);
  };

  return (
    <>
      <Navbar />
      <section className="page-section contact-page">
        <div className="page-inner contact-inner">
          <div className="contact-layout">
            {/* Left side: info */}
            <div className="contact-info-card">
              <h1>Contact Us</h1>
              <p className="contact-intro">
                Have a question about a package, need a custom itinerary, or
                facing an issue with your booking? Share your details and our
                team will get back to you shortly.
              </p>

              <div className="contact-highlights">
                <div>
                  <span className="contact-label">Phone</span>
                  <p>+91 1234567890</p>
                </div>
                <div>
                  <span className="contact-label">Email</span>
                  <p>abc@gmail.com</p>
                </div>
                <div>
                  <span className="contact-label">Office</span>
                  <p>Ambala, Haryana, India</p>
                </div>
              </div>

              <p className="contact-note">
                We typically respond within <strong>24–48 hours</strong> on
                business days.
              </p>
            </div>

            {/* Right side: form */}
            <div className="contact-form-card">
              <h2>Send us a message</h2>
              <form onSubmit={handleSubmit} noValidate>
                <div className="contact-form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <span className="error-text">{errors.name}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <span className="error-text">{errors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone (optional)</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 ..."
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <span className="error-text">{errors.phone}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="e.g. Kashmir package enquiry"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    {errors.subject && (
                      <span className="error-text">{errors.subject}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us a bit about your trip or issue..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <span className="error-text">{errors.message}</span>
                  )}
                </div>

                {status === 'success' && (
                  <div className="status-message success">
                    Thank you! Your message has been submitted. Our team will
                    contact you soon.
                  </div>
                )}

                <button type="submit" className="btn-primary contact-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
