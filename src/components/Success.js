import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  if (!formData) {
    return (
      <div>
        <p>No form data found. Please submit the form first.</p>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Form submitted successfully!</h2>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Username:</strong> {formData.username}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Password:</strong> {formData.password}</p>
      <p><strong>Phone No.:</strong> {formData.countryCode} {formData.phoneNumber}</p>
      <p><strong>Country:</strong> {formData.country}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>PAN No.:</strong> {formData.panNo}</p>
      <p><strong>Aadhar No.:</strong> {formData.aadharNo}</p>
    </div>
  );
};

export default Success;
