import React from "react";
import Header from "./components/header/header.component";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
    </div>
  );
};

export default App;
