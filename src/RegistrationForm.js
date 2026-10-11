import React, { useState } from "react";

function RegistrationForm() {
  const initialData = {
    name: "",
    email: "",
    password: "",
    gender: "",
    interests: [],
    country: "",
    bio: ""
  };

  const [formData, setFormData] = useState(initialData);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    setSuccess(false);
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { name, email, password, gender, interests, country, bio } = formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !password ||
      !gender ||
      interests.length === 0 ||
      !country ||
      !bio.trim()
    ) {
      setError("Please fill in all fields and select at least one interest.");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);
  }

  return (
    <div className="card">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Gender:</label>
        {["Male", "Female", "Other"].map(item => (
          <label className="option" key={item}>
            <input
              type="radio"
              name="gender"
              value={item}
              checked={formData.gender === item}
              onChange={handleChange}
              required
            />
            {item}
          </label>
        ))}

        <label>Interests:</label>
        {["Reading", "Music", "Sports"].map(item => (
          <label className="option" key={item}>
            <input
              type="checkbox"
              name="interests"
              value={item}
              checked={formData.interests.includes(item)}
              onChange={handleChange}
            />
            {item}
          </label>
        ))}

        <label>Country:</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>

        <label>Bio:</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>

      {error && <p className="error">{error}</p>}

      {success && (
        <div className="success">
          <h3>Registration Successful!</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Interests:</strong> {formData.interests.join(", ")}</p>
          <p><strong>Country:</strong> {formData.country}</p>
          <p><strong>Bio:</strong> {formData.bio}</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
