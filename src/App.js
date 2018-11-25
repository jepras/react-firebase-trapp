import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/NewDashboard";
import Home from "./components/home";
import TeamDetails from "./components/teams/TeamDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import GetIn from "./components/auth/GetIn";
import User from "./components/dashboard/User";

import "./style/scss/style.scss";
import "./style/js/main.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/" component={GetIn} />
            <Route path="/teams/:id/:week" component={TeamDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/user" component={User} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
