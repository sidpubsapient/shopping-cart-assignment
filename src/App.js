import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GlobalStyles } from "./styles/global";
import Home from "./modules/Home";
import Register from "./modules/Register";
import Products from "./modules/PLP";
import SignIn from "./modules/SignIn";

export const App = function () {
    return (
        <>
            <GlobalStyles />
            <Header />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/products/:id" component={Products} />
                    <Redirect to="/" />
                </Switch>
            </main>
            <Footer />
        </>
    );
};
