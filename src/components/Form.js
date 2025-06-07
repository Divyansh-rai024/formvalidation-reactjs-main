import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    countryCode: '',
    phoneNumber: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePan = (pan) =>
    /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);

  const validateAadhar = (aadhar) =>
    /^[0-9]{12}$/.test(aadhar);

  const validateForm = () => {
    const errs = {};
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      countryCode,
      phoneNumber,
      country,
      city,
      panNo,
      aadharNo,
    } = formData;

    if (!firstName) errs.firstName = 'First name is required';
    if (!lastName) errs.lastName = 'Last name is required';
    if (!username) errs.username = 'Username is required';

    if (!email) {
      errs.email = 'Email is required';
    } else if (!validateEmail(email)) {
      errs.email = 'Invalid email';
    }

    if (!password) errs.password = 'Password is required';
    if (!countryCode) errs.countryCode = 'Country code is required';
    if (!phoneNumber) errs.phoneNumber = 'Phone number is required';

    if (!country) errs.country = 'Country is required';
    if (!city) errs.city = 'City is required';

    if (!panNo) {
      errs.panNo = 'PAN is required';
    } else if (!validatePan(panNo)) {
      errs.panNo = 'Invalid PAN format';
    }

    if (!aadharNo) {
      errs.aadharNo = 'Aadhar is required';
    } else if (!validateAadhar(aadharNo)) {
      errs.aadharNo = 'Invalid Aadhar number';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/success', { state: { formData } });
    }
  };

  const togglePassword = () => {
    setFormData((prev) => ({
      ...prev,
      showPassword: !prev.showPassword,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {[
        { label: 'First Name', name: 'firstName' },
        { label: 'Last Name', name: 'lastName' },
        { label: 'Username', name: 'username' },
        { label: 'Email', name: 'email', type: 'email' },
      ].map(({ label, name, type = 'text' }) => (
        <label key={name}>
          {label}:<br />
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
          />
          {errors[name] && <p style={{ color: 'red' }}>{errors[name]}</p>}
        </label>
      ))}

      <label>
        Password:<br />
        <input
          type={formData.showPassword ? 'text' : 'password'}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="button" onClick={togglePassword}>
          {formData.showPassword ? 'Hide' : 'Show'}
        </button>
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </label>

      <br />
      <label>
        Phone No.:<br />
        <input
          type="text"
          name="countryCode"
          placeholder="+91"
          style={{ width: '50px' }}
          value={formData.countryCode}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="1234567890"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        {errors.countryCode && <p style={{ color: 'red' }}>{errors.countryCode}</p>}
        {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}
      </label>

      <br />
      <label>
        Country:<br />
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
        </select>
        {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}
      </label>

      <br />
      <label>
        City:<br />
        <select name="city" value={formData.city} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="New York">New York</option>
        </select>
        {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
      </label>

      <br />
      <label>
        PAN No.:<br />
        <input
          type="text"
          name="panNo"
          value={formData.panNo}
          onChange={handleChange}
        />
        {errors.panNo && <p style={{ color: 'red' }}>{errors.panNo}</p>}
      </label>

      <br />
      <label>
        Aadhar No.:<br />
        <input
          type="text"
          name="aadharNo"
          value={formData.aadharNo}
          onChange={handleChange}
        />
        {errors.aadharNo && <p style={{ color: 'red' }}>{errors.aadharNo}</p>}
      </label>

      <br />
      <button type="submit" disabled={!validateForm()}>
        Submit
      </button>
    </form>
  );
};

export default Form;
