import React from "react";
import Header from "./components/Header";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./modules/Home";
import Products from "./modules/PLP";
import Footer from "./components/Footer";

export const App = function () {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/products" component={Products} />
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
