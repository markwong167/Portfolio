import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputAdornment, TextField } from "@mui/material";
import { handleLogin } from "../../redux/Actions/authActions";
import {
  FieldIcon,
  Heading1,
  LinkSpan,
  SocialLoginButton,
  SocialLoginDiv,
  SubmitInput,
} from "./login-style";
import {
  StandardForm,
  CustomInputDiv,
  FormFieldDiv,
} from "../../styles/form-style";

const LoginContainer = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginClicked = (e) => {
    e.preventDefault();
    props.handleLogin({ email: email, password: password });
    setEmail("");
    setPassword("");
  };
  const handleChange = (value, type) => {
    if (type === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };
  return (
    <StandardForm>
      {props.authorized ? "Logged in" : ""}
      {props.loginProcessing && !props.authorized ? "Logging.." : ""}
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
        <CustomInputDiv>
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
        </CustomInputDiv>
      </FormFieldDiv>
      <FormFieldDiv>
        <CustomInputDiv>
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
            value={password}
            onChange={(e) => handleChange(e.target.value, "password")}
            variant='filled'
          />
        </CustomInputDiv>
      </FormFieldDiv>
      <FormFieldDiv>
        <LinkSpan>Forgot Password?</LinkSpan>
      </FormFieldDiv>
      <FormFieldDiv>
        <SubmitInput type='submit' value='SIGN IN' onClick={loginClicked} />
      </FormFieldDiv>
      <FormFieldDiv>
        <LinkSpan>
          <Link to='/Register'>New User? Sign up here</Link>
        </LinkSpan>
      </FormFieldDiv>
    </StandardForm>
  );
};

const mapStateToProps = (state) => ({
  authorized: state.authReducer.authorized,
});
export default connect(mapStateToProps, { handleLogin })(LoginContainer);
