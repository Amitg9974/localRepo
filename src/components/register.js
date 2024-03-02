import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const isEmpty = Object.values(formData).some(value => value === '');
    // if(isEmpty){
    //   alert('please fill all field');
    //   return;
    // }
    console.log(formData);
    // let existData = JSON.parse(localStorage.getItem("formData"));

    // if (!Array.isArray(existData)) {
    //   existData = [];
    // }
    // existData.push(formData);

    localStorage.setItem("formData", JSON.stringify(formData));
    navigate('/login')
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <p>
          Firstname:{" "}
          <input
            type="text"
            placeholder="type here"
            name="firstName"
            onChange={handleChange}
            required
          />
        </p>
        <p>
          Lastname:{" "}
          <input
            type="text"
            placeholder="type here"
            name="lastName"
            onChange={handleChange}
            required
          />
        </p>
        <p>
          Phone:{" "}
          <input
            type="phone"
            placeholder="type here"
            name="phone"
            onChange={handleChange}
            required
          />
        </p>
        <p>
          Email:{" "}
          <input
            type="email"
            placeholder="type here"
            name="email"
            onChange={handleChange}
            required
          />
        </p>
        <p>
          Password:{" "}
          <input
            type="password"
            placeholder="type here"
            name="password"
            onChange={handleChange}
            required
          />
        </p>
        <p>
          Gender:
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            onChange={handleChange}
          />
          Other
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
