import React from "react";
import Header from "./components/header/header.component";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import SignInUpPage from "./pages/sign-in-up/sign-in-up.component";
import SellPage from "./pages/sellPage/sellPage.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { connect } from "react-redux";
import ShopPageContainer from "./pages/shopPage/shop-container.component";
import "./App.css";

const App = ({ currentUser }) => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInUpPage />)}
        />
        <Route
          exact
          path="/sell"
          render={() =>
            currentUser ? <SellPage /> : <Redirect to="/signin" />
          }
        />
        <Route exact path="/shop" component={ShopPageContainer} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
