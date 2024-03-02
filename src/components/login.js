import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const formData = localStorage.getItem("formData");

  console.log("formData: ", formData);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storeData = localStorage.getItem("formData");
    const storeUser = storeData ? JSON.parse(storeData) : null;
    console.log(storeUser);
    if (
      storeUser &&
      storeUser.email === email &&
      storeUser.password === password
    ) {
      navigate("/profile");
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>
          Email: <input type="text" onChange={handleEmailChange} required/>
        </p>
        <p>
          Password: <input type="password" onChange={handlePasswordChange} required/>
        </p>
        <button type="submit">Login</button>
        {error && <p>Error: Incorrect email or password</p>}
      </form>
    </div>
  );
}

export default Login;
