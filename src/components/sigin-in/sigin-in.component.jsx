import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sigin-in.styles.scss";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const { email, password } = values;

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValues({
      ...values,
      email: "",
      password: ""
    });
  };

  return (
    <div className="sign-in">
      <h2>I alredy have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          value={email}
          handleChange={handleChange("email")}
          label="Email"
          required
        />
        <FormInput
          type="password"
          value={password}
          handleChange={handleChange("password")}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            {" "}
            Sign In With Google{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
