import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.10.0";
import LandingPage from "./views/LandingPage";
import CreateInvited from "./views/CreateInvited";

var hist = createBrowserHistory();

let hash = window.location.search.substring(1);
hash = hash ? hash.split("=")[1] : null;

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route
        exact={true}
        path="/"
        component={() => <LandingPage hash={hash} />}
      />
      <Route exact={true} path="/create" component={CreateInvited} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
