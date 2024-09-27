import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css'; // Import the Contact page styles

const Contact = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate to the home page

  // State to hold the form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.firstName}! Your message has been sent.`);
    // Redirect to Home page after form submission
    navigate('/');
  };

  return (
    <div className="contact-page">
      {/* Contact Information Panel */}
      <div className="contact-info">
        <h2>Contact Info</h2>
        <p>Email: yesevdi5@gmail.com</p>
        <p>Phone: (647) 512-6179</p>
        <p>Address: 138 Downes St. Toronto, ON</p>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
