import React from 'react';
import "../css/register.css"
const register = () => {
  return (
    <form className="form-container">
      <div>
        <h1> Let Get Started </h1>
        <p>Enter your Credential to Register your Account </p>
      </div>
      <label>
        Full Name:
        <input
          type="text"
          name="full name"
          placeholder="First Name Last Name"
          autoComplete="off"
        />
      </label>
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
      <label>
        Phone Number:
        <input
          type="phone number"
          name="phone number"
          placeholder="+234 *********"
          autoComplete="off"
        />
      </label>
      <label>
        Home Address:
        <input
        type='home address'
        name='home address'
        placeholder='Enter address'
        autoComplete='off'
         />
      </label>
      <label>
        Work Address:
        <input
        type='work address'
        name='work address'
        placeholder='Enter address'
        autoComplete='off'
        />
      </label>
      <button type="button">
        Register
      </button>
    </form>
  );
}

export default register;
