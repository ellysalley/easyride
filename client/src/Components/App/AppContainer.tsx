import React from "react";
import { compose, graphql } from "react-apollo";
import theme from "../../theme"
import { ThemeProvider } from "../../typed-components";
import AppPresenter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries.local";

const AppContainer = ({ data }) => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
    </ThemeProvider>
  </React.Fragment>
);

export default compose(
  graphql(IS_LOGGED_IN),
)(AppContainer);