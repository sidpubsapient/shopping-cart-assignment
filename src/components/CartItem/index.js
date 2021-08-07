import React from "react";
import { useDispatch } from "react-redux";
import Text from "../Text";
import PropTypes from "prop-types";
import {
    incrementQty,
    decrementQty,
    removeFromCart,
} from "../../redux/cart/actions";

import "./style.scss";

const CartItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const decrementHandler = () => {
        dispatch(decrementQty(cartItem));
    };
    const incrementHandler = () => {
        dispatch(incrementQty(cartItem));
    };
    const removeItemHandler = () => {
        dispatch(removeFromCart(cartItem));
    };

    return (
        <div
            className="item-container"
            aria-label={`You have added ${cartItem.quantity} quantity of ${cartItem.name} worth rupees ${cartItem.totalPrice}`}
        >
            <img
                src={cartItem.imageURL}
                alt={cartItem.name}
                className="item-img"
            />
            <div className="item-content">
                <Text className="item-name">{cartItem.name}</Text>
                <div className="item-data">
                    <div className="item-actions">
                        <button
                            aria-label={`Press enter or click button to ${
                                cartItem.quantity === 1
                                    ? `remove ${cartItem.name} from your cart`
                                    : `decrease quantity of ${cartItem.name} to 
                            ${cartItem.quantity - 1}`
                            }`}
                            tabIndex="0"
                            className="item-action-btn"
                            onClick={
                                cartItem.quantity === 1
                                    ? removeItemHandler
                                    : decrementHandler
                            }
                        >
                            <Text className="action-btn-text">-</Text>
                        </button>
                        <Text className="item-qty">{cartItem.quantity}</Text>
                        <button
                            aria-label={`Press enter or click button to increase quantity of ${
                                cartItem.name
                            } to ${cartItem.quantity + 1} `}
                            tabIndex="0"
                            className="item-action-btn"
                            onClick={incrementHandler}
                        >
                            <Text className="action-btn-text">+</Text>
                        </button>
                        <Text className="multiplier">x</Text>
                        <Text className="item-price">{`Rs.${cartItem.price}`}</Text>
                    </div>
                    <Text className="item-total-price">{`Rs.${cartItem.totalPrice}`}</Text>
                </div>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    cartItem: PropTypes.exact({
        price: PropTypes.number.isRequired,
        totalPrice: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired,
        alt: PropTypes.string,
        description: PropTypes.string,
        stock: PropTypes.number,
        category: PropTypes.any,
        sku: PropTypes.any,
        id: PropTypes.string,
    }),
};

export default CartItem;
