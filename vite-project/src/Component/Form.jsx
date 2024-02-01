import React, { useState } from "react";


const Form = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
  });

  const [error, setError] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);

  const handleInput = (e) => {
    let { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(data);
    setError(errors);

    if (Object.keys(errors).length === 0) {
      setFormSubmit(true);
    } else {
      setFormSubmit(false);
    }
  };

  const validate = (data) => {
    let error = {};
    if (data.firstName.trim() === "") {
      error.firstName = "Please enter the First name";
    }
    if (data.lastName.trim() === "") {
      error.lastName = "Please enter the last name";
    }
    if (data.email.trim() === "") {
      error.email = "Please enter the Email";
    }
    if (data.phoneNo.trim() === "") {
      error.phoneNo = "Please enter the phone number";
    } else if (data.phoneNo.length !== 10) {
      error.phoneNo = "Please enter a valid Phone Number";
    }
    return error;
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Registration Form</h2>

        {formSubmit && (
          <p className="successMessage">Registration completed Successfully</p>
        )}

        <div className="inputContainer">
          <label htmlFor="firstName" className="label">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            onChange={handleInput}
            className="input"
          />
          {error.firstName && <p className="error">{error.firstName}</p>}
        </div>

        <div className="inputContainer">
          <label htmlFor="lastName" className="label">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            onChange={handleInput}
            className="input"
          />
          {error.lastName && <p className="error">{error.lastName}</p>}
        </div>

        <div className="inputContainer">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleInput}
            className="input"
          />
          {error.email && <p className="error">{error.email}</p>}
        </div>

        <div className="inputContainer">
          <label htmlFor="phoneNo" className="label">
            Phone Number
          </label>
          <input
            type="tel"
            name="phoneNo"
            placeholder="Enter your phone number"
            onChange={handleInput}
            className="input"
          />
          {error.phoneNo && <p className="error">{error.phoneNo}</p>}
        </div>

        <button type="submit" className="submitButton">
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;