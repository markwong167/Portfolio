import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";

import GlobalFonts from "./assets/fonts/fonts";
import RegisterContainer from "./pages/Register/RegisterContainer";
import LoginContainer from "./pages/Login/LoginContainer";
import {
  faTwitter,
  faYoutube,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faKey, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "./theme";
import { AppDiv } from "./styles/app-style";
import RepoContainer from "./pages/Repo/RepoContainer";
import HomeContainer from "./pages/Home/HomeContainer";

library.add(faYoutube, faTwitter, faDiscord, faKey, faEnvelope);
const App = (props) => {
  return (
    <AppDiv>
      <GlobalFonts />
      <StyledThemeProvider theme={theme}>
        <Router>
          {props.authorized ? (
            <Switch>
              <Route path={"/"} component={RepoContainer} />
              {/* <Route path='/' component={HomeContainer} /> */}
            </Switch>
          ) : (
            <Switch>
              <Route path='/Register' component={RegisterContainer} />
              <Route path='/Login' component={LoginContainer} />
              <Route path='*'>
                <Redirect to='/Login' />
              </Route>
            </Switch>
          )}
        </Router>
      </StyledThemeProvider>
    </AppDiv>
  );
};

const mapStateToProps = (state) => ({
  authorized: state.authReducer.authorized,
});
export default connect(mapStateToProps)(App);
