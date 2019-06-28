import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Login from "./containers/Login";
import SignupForm from "./containers/Signup";
import Navigation from "./containers/Navigation";
import Home from "./containers/Home"

const App = () => {
    return (
        <div className="body-box" data-test='component-app'>
            <BrowserRouter>
                <Navigation />
                <div className="page-body">
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/login" component={Login} exact />
                        <Route path="/signup" component={SignupForm} exact />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;