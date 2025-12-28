import React from "react";

function Register({ setPage }) {
  return (
    <div className="card">
      <h2>Register</h2>

      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button onClick={() => setPage("login")}>Register</button>

      <p>
        Already have an account?{" "}
        <span onClick={() => setPage("login")}>Login</span>
      </p>
    </div>
  );
}

export default Register;
