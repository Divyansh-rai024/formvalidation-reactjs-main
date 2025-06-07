import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = {};
    if (!formData.firstName) errs.firstName = "First Name can't be blank";
    if (!formData.lastName) errs.lastName = "Last Name can't be blank";
    if (!formData.username) errs.username = "Username can't be blank";
    if (!formData.email) {
      errs.email = "Email can't be blank";
    } else if (!validateEmail(formData.email)) {
      errs.email = "Invalid email format";
    }
    if (!formData.password) errs.password = "Password can't be blank";
    if (!formData.phoneNo) errs.phoneNo = "Phone No. can't be blank";
    if (!formData.country) errs.country = "Country can't be blank";
    if (!formData.city) errs.city = "City can't be blank";
    if (!formData.panNo) errs.panNo = "Pan No. can't be blank";
    if (!formData.aadharNo) errs.aadharNo = "Aadhar No. can't be blank";

    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      navigate('/success', { state: { formData } });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <br />
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        {errors.firstName && <p>{errors.firstName}</p>}
      </label>
      <br />
      <label>
        Last Name:
        <br />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        {errors.lastName && <p>{errors.lastName}</p>}
      </label>
      <br />
      <label>
        Username:
        <br />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        {errors.username && <p>{errors.username}</p>}
      </label>
      <br />
      <label>
        Email:
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </label>
      <br />
      <label>
        Password:
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </label>
      <br />
      <label>
        Phone No.:
        <br />
        <input
          type="text"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleInputChange}
        />
        {errors.phoneNo && <p>{errors.phoneNo}</p>}
      </label>
      <br />
      <label>
        Country:
        <br />
        <select name="country" value={formData.country} onChange={handleInputChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
        {errors.country && <p>{errors.country}</p>}
      </label>
      <br />
      <label>
        City:
        <br />
        <select name="city" value={formData.city} onChange={handleInputChange}>
          <option value="">Select City</option>
          <option value="City1">City1</option>
          <option value="City2">City2</option>
        </select>
        {errors.city && <p>{errors.city}</p>}
      </label>
      <br />
      <label>
        Pan No.:
        <br />
        <input
          type="text"
          name="panNo"
          value={formData.panNo}
          onChange={handleInputChange}
        />
        {errors.panNo && <p>{errors.panNo}</p>}
      </label>
      <br />
      <label>
        Aadhar No.:
        <br />
        <input
          type="text"
          name="aadharNo"
          value={formData.aadharNo}
          onChange={handleInputChange}
        />
        {errors.aadharNo && <p>{errors.aadharNo}</p>}
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
