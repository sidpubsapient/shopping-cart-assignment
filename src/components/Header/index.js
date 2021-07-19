import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Text from "../Text";
import Cart from "../Cart"

import "./style.scss";
import { useDispatch, useSelector } from "react-redux";

import { toggleCart } from "../../redux/cart/actions";


const Header = () => {
    const dispatch = useDispatch();
    const cartItemsCount = useSelector((state) => state.cart.cartItemsCount);
    const clickHandlerCartButton = () => {
        dispatch(toggleCart());
    };
    return (
        <>
            <header className="header">
                <Cart />
                <div className="logo-container">
                    <Link aria-label="Sabka Bazaar Logo" tabIndex="0" to="/">
                        <img
                            aria-hidden
                            src="/static/images/logo_2x.png"
                            alt="Sabka Bazaar Logo"
                        />
                    </Link>
                </div>
                <div className="nav-container">
                    {localStorage.getItem("isLoggedIn") ? (
                        <div className="nav-container__quickLinks">
                            <Text>Welcome</Text>
                            <Link
                                aria-label="Click to logout"
                                to="/"
                                role="navigation"
                                tabIndex="0"
                                onClick={localStorage.removeItem("isLoggedIn")}
                            >
                                <Text>Register</Text>
                            </Link>
                        </div>
                    ) : (<div className="nav-container__quickLinks">
                        <Link
                            aria-label="Navigate to signin page"
                            to="/signin"
                            role="navigation"
                            tabIndex="0"
                        >
                            <Text>SignIn</Text>
                        </Link>
                        <Link
                            aria-label="Navigate to register page"
                            to="/register"
                            role="navigation"
                            tabIndex="0"
                        >
                            <Text>Register</Text>
                        </Link>
                    </div>)}
                    <div className="nav-container__navigation">
                        <div className="nav-container__navigation__links">
                            <Link
                                aria-label="Navigate to home page"
                                to="/"
                                role="navigation"
                                tabIndex="0"
                            >
                                <Text>Home</Text>
                            </Link>
                            <Link
                                aria-label="Navigate to products page"
                                to="/products"
                                role="navigation"
                                tabIndex="0"
                            >
                                <Text>Products</Text>
                            </Link>
                        </div>

                        <div className="nav-container__navigation__buttonContainer">
                            <Button
                                ariaLabel={`You have ${cartItemsCount} items in your cart`}
                                className="cartButton"
                                onClick={clickHandlerCartButton}
                                role="button"
                                tabIndex="0"
                                data-testid="open-cart-button"
                            >
                                <img src="/static/images/cart.svg" alt="Cart Icon" />
                                <Text>{cartItemsCount} items</Text>
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
