import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useAppSelector } from "./redux/hooks";
import GlobalFonts from "./assets/fonts/fonts";
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

library.add(faYoutube, faTwitter, faDiscord, faKey, faEnvelope);

const App = () => {
  const authorized = useAppSelector((state) => {
    return state.auth.authorized;
  });
  return (
    <AppDiv>
      <GlobalFonts />
      <StyledThemeProvider theme={theme}>
        <Router>
          {authorized === true ? (
            <Switch>
              <Route path={"/"} component={RepoContainer} />
            </Switch>
          ) : (
            <Switch>
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

export default App;
