import React from "react";
import Header from "./components/Header";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./modules/Home";

export const App = function () {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </main>
            {/* <Footer /> */}
        </>
    );
};
