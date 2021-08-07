import React, { useEffect } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../redux/cart/actions";
import Text from "../Text";
import Button from "../Button";
import CartItem from "../CartItem";

const Cart = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartItemsCount = useSelector((state) => state.cart.cartItemsCount);
    const cartTotalPrice = useSelector((state) => state.cart.cartTotalPrice);
    useEffect(() => {
        if (isCartOpen) {
            document.body.classList.remove("inherit-scroll");
            document.body.classList.add("remove-scroll");
        } else {
            document.body.classList.add("inherit-scroll");
            document.body.classList.remove("remove-scroll");
        }
    }, [isCartOpen]);
    const clickHandlerCloseButton = () => {
        dispatch(toggleCart());
    };
    return (
        isCartOpen && (
            <div className="cart">
                <div aria-label="You have opened the cart" role="alert"></div>
                <div className="cart-heading-wrapper">
                    <Text className="cart-heading">
                        My Cart{" "}
                        {cartItemsCount ? ` (${cartItemsCount} items)` : ""}
                    </Text>
                    <button
                        aria-label="Close Cart"
                        data-testid="close-cart-button"
                        onClick={clickHandlerCloseButton}
                        className="btn-close-cart"
                        tabIndex="0"
                    >
                        x
                    </button>
                </div>
                {cartItemsCount ? (
                    <div>
                        <div className="cart-content">
                            {cartItems.map((cartItem) => (
                                <CartItem
                                    cartItem={cartItem}
                                    key={cartItem.id}
                                />
                            ))}
                            <div className="promotion-caption">
                                <img
                                    src="/static/images/lowest-price.png"
                                    alt="Lowest Price Guranteed"
                                />
                                <Text className="promotion-text">
                                    You won&apos;t find it cheaper anywhere
                                </Text>
                            </div>
                        </div>

                        <div className="checkout-container">
                            <Text className="promo-info">
                                Promo code can be applied on the payment page
                            </Text>
                            <div className="proceed-checkout-wrapper">
                                <Button
                                    ariaLabel={`Press enter or click button to proceed to checkout with cart items worth rupees ${cartTotalPrice}`}
                                    onClick={clickHandlerCloseButton}
                                    className="btn-checkout"
                                >
                                    <Text>Proceed to checkout</Text>
                                    <Text className="total-price">
                                        {`Rs.${cartTotalPrice}`} &nbsp; &gt;
                                    </Text>
                                </Button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="cart-content empty-item-wrapper">
                            <Text className="empty-item-heading">
                                No items in your cart
                            </Text>
                            <Text className="empty-item-description">
                                Your favorite items are a click away
                            </Text>
                        </div>
                        <div className="cart-checkout-wrapper">
                            <Button onClick={clickHandlerCloseButton}>
                                Start Shopping
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        )
    );
};

export default Cart;
