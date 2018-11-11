import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavigationBar from "./Components/Layout/NavigationBar";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProjectDetails from "./Components/Projects/ProjectDetails";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";
import CreateProject from "./Components/Projects/CreateProject";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
