import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.10.0";
import LandingPage from "./views/LandingPage";
import CreateInvited from "./views/CreateInvited";
import Thanks from "./views/Thanks";

var hist = createBrowserHistory();

let id = window.location.search.substring(1);
id = id ? decodeURIComponent(id?.substring(2, id?.length)) : null;

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact={true} path="/" component={() => <LandingPage id={id} />} />
      <Route exact={true} path="/crear-invitacion" component={CreateInvited} />
      <Route exact={true} path="/agradecimiento" component={Thanks} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
