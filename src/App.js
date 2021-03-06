import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import AppRoute from "./Routes/AppRoutes";
import { mainRoutes } from "./Routes/routes";

function Routes() {
  return (
    <Switch>
      {mainRoutes.map((route) => (
        <AppRoute
          exact={route.exact || true}
          path={route.path}
          key={route.path}
          component={route.component}
          customProps={route.customProps}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  );
}

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;