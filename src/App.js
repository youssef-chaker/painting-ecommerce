import React from "react";
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import SignInUpPage from "./pages/sign-in-up/sign-in-up.component";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SignInUpPage} />
      </Switch>
    </div>
  );
};

export default App;
