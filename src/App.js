import React from "react";
import Header from "./components/Header";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./modules/Home";
import Register from "./modules/Register";
import SignIn from "./modules/SignIn";
import Products from "./modules/PLP";
import Footer from "./components/Footer";
import "./App.scss";

export const App = function () {
    return (
        <>
            <Header />
            <main className="main-height">
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/signin" component={SignIn} />
                        <Route
                            exact
                            path="/products/:id"
                            component={Products}
                        />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </main>
            <Footer />
        </>
    );
};
