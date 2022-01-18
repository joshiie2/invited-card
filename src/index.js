import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.10.0";
import LandingPage from "./views/LandingPage";

var hist = createBrowserHistory();

const windowUrl = window.location.search;
const params = new URLSearchParams(windowUrl);
const hash = params.get("hash");

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route
        exact={true}
        path="/"
        component={() => <LandingPage hash={hash} />}
      />
    </Switch>
  </Router>,
  document.getElementById("root")
);
