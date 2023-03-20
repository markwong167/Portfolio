import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, InputAdornment, TextField } from "@mui/material";
import {
  FieldIcon,
  Heading1,
  LinkSpan,
  SocialLoginButton,
  SocialLoginDiv,
  PWManagementTextDiv,
} from "./login-style";
import { StandardForm, FormFieldDiv } from "../../styles/form-style";

import { useAppDispatch } from "../../redux/hooks";
import { loginAdded } from "../../redux/Slices/authSlice";

const LoginContainer = () => {
  const dispatch: import("src/redux/store").AppDispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginClicked = () => {
    dispatch(loginAdded({ email: email, password: password }));
    setEmail("");
    setPassword("");
  };
  const handleChange = (value: string, type: string) => {
    if (type === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };
  return (
    <StandardForm onSubmit={loginClicked}>
      <Heading1>FRONTEND TEMPLATE</Heading1>

      <span>Log in with a platform</span>
      <SocialLoginDiv>
        <SocialLoginButton style={{ backgroundColor: "white" }}>
          <FontAwesomeIcon
            icon={["fab", "youtube"]}
            style={{ color: "red" }}
            size={"lg"}
          />
        </SocialLoginButton>
        <SocialLoginButton style={{ backgroundColor: "#5865F2" }}>
          <FontAwesomeIcon
            icon={["fab", "discord"]}
            style={{ color: "white" }}
          />
        </SocialLoginButton>
        <SocialLoginButton style={{ backgroundColor: "white" }}>
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            style={{ color: "#1DA1F2" }}
            size={"lg"}
          />
        </SocialLoginButton>
      </SocialLoginDiv>
      <span>Log in with email or password</span>
      <FormFieldDiv>
        <TextField
          id='loginEmail'
          label='Email'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <FieldIcon icon='envelope' />
              </InputAdornment>
            ),
          }}
          value={email}
          onChange={(e) => handleChange(e.target.value, "email")}
          variant='filled'
        />
      </FormFieldDiv>
      <FormFieldDiv>
        <TextField
          id='loginPW'
          label='Password'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <FieldIcon icon='key' />
              </InputAdornment>
            ),
          }}
          type='password'
          value={password}
          onChange={(e) => handleChange(e.target.value, "password")}
          variant='filled'
        />
      </FormFieldDiv>
      <FormFieldDiv>
        <Button variant='contained' size='large' onClick={loginClicked}>
          Submit
        </Button>
      </FormFieldDiv>

      <PWManagementTextDiv>
        <LinkSpan>Forgot Password</LinkSpan>
        <LinkSpan>
          <Link to='/Register'>Sign Up Here</Link>
        </LinkSpan>
      </PWManagementTextDiv>
    </StandardForm>
  );
};

export default LoginContainer;
