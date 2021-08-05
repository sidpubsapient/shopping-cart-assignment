import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Text from "../Text";
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
        <header className="header1">
            <div className="container">
                <Link aria-label="Sabka Bazaar Logo" tabIndex="0" to="/">
                    <img
                        src="static/images/logo_2x.png"
                        alt="Sabka Bazaar Logo"
                        className="skb-logo"
                    />
                </Link>
                <div className="nav-container">
                    <div className="action-links">
                        <Link
                            aria-label="Navigate to signin page"
                            to="/signin"
                            role="navigation"
                            tabIndex="0"
                        >
                            <Text className="header-text">SignIn</Text>
                        </Link>
                        <Link
                            aria-label="Navigate to register page"
                            to="/register"
                            role="navigation"
                            tabIndex="0"
                        >
                            <Text className="header-text">Register</Text>
                        </Link>
                    </div>
                    <div className="action-container">
                        <div className="nav-links">
                            <Link
                                aria-label="Navigate to home page"
                                to="/"
                                role="navigation"
                                tabIndex="0"
                            >
                                <Text className="header-text">Home</Text>
                            </Link>
                            <Link
                                aria-label="Navigate to products page"
                                to="/products"
                                role="navigation"
                                tabIndex="0"
                            >
                                <Text className="header-text">Products</Text>
                            </Link>
                        </div>
                        <div className="cart-container">
                            <Button
                                ariaLabel={`You have ${cartItemsCount} items in your cart`}
                                className="cart-button"
                                onClick={clickHandlerCartButton}
                                role="button"
                                tabIndex="0"
                                data-testid="open-cart-button"
                            >
                                <img
                                    src="/static/images/cart.svg"
                                    alt="Cart Icon"
                                    className="cart-icon"
                                />
                                <Text>{cartItemsCount} items</Text>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
