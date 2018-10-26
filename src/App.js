import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import DataDetails from './components/data/DataDetails';
import TeamDetails from './components/teams/TeamDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateData from './components/data/CreateData';
import CreateTeam from './components/teams/CreateTeam';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/data/:id" component={DataDetails} />
            <Route path="/teams/:id" component={TeamDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/createdata" component={CreateData} />
            <Route path="/createteam" component={CreateTeam} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
