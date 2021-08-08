import React from "react";
import "./style.scss";
import Text from "../Text";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/actions";

const ProductList = ({ products }) => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    const dispatch = useDispatch();
    const addItemHandler = (product) => {
        dispatch(addToCart(product));
    };

    return products.map((product) => (
        <div className="product" aria-label={product.name} key={product.id}>
            <div className="product-title">
                <Text className="title">{product.name}</Text>
            </div>
            <div className="product-img">
                <img src={product.imageURL} alt={product.name} />
            </div>
            <div className="desc-container">
                <div className="product-description">
                    <Text>{product.description}</Text>
                </div>
            </div>
            <div className="pricing-info">
                <Text className="product-mrp">MRP Rs.{product.price}</Text>

                {cartItems.find((item) => item.id === product.id) ? (
                    <Button
                        ariaLabel={`Press enter or click button to add more ${product.name} worth rupees of ${product.price}}`}
                        className="btn-buy"
                        onClick={() => addItemHandler(product)}
                    >
                        Add More{" "}
                        <Text className="tablet-mode-text">
                            &nbsp; @ Rs.{product.price}
                        </Text>
                    </Button>
                ) : (
                    <Button
                        ariaLabel={`Press enter or click button to buy now ${product.name} worth rupees of ${product.price}}`}
                        className="btn-buy"
                        onClick={() => addItemHandler(product)}
                    >
                        Buy Now{" "}
                        <Text className="tablet-mode-text">
                            &nbsp; @ Rs.{product.price}
                        </Text>
                    </Button>
                )}
            </div>
        </div>
    ));
};

export default ProductList;
