import React from "react";
import Text from "../Text";
import { useSelector } from "react-redux";

import "./style.scss";

const Footer = () => {
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);

    return (
        <footer className={`footer ${isCartOpen ? "overlay" : ""}`}>
            <Text>
                Copyright &copy; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd
            </Text>
        </footer>
    );
};

export default Footer;
