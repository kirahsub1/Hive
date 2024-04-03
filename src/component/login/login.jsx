import React from 'react'
import "../css/login.css"
const login = () => {
  return (
    <form className="form-container">
      <span>
        <h1>Welcome Back!</h1>
        <p>Please enter your Email Address and Password to Sign in </p>
      </span>
      <label>
        Email:
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          autoComplete="off"
        />
      </label>

      <lable>
        Password:
        <input
          type="password"
          name="password"
          placeholder="*******"
          autoComplete="off"
        />
      </lable>
      <p>forget password</p>
      <button type="button">Sign In</button>
    </form>
  );
}

export default login
