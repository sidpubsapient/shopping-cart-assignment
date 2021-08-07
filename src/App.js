import React from "react";
import Header from "./components/Header";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./modules/Home";
import Register from "./modules/Register";
import SignIn from "./modules/SignIn";
import Products from "./modules/PLP";
import Footer from "./components/Footer";
import "./App.scss";
import { useSelector } from "react-redux";
import Cart from "./components/Cart";

export const App = function () {
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);

    return (
        <>
            <Header />
            <Cart />
            <main className={`main-height ${isCartOpen ? "overlay" : ""}`}>
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
