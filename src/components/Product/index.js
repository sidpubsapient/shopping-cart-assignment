import React from "react";
import "./style.scss";
import Text from "../Text";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
} from "../../redux/cart/actions";


const ProductList = ({products})=>{
    const cartItems = useSelector((state) => state.cart.cartItems);

    const dispatch = useDispatch();
    const addItemHandler = (product) => {
        dispatch(addToCart(product));
    };

    return products.map(product => (
        <div className="product" aria-label={product.name} key={product.id}>
            <div className="product__name">
                <Text>{product.name}</Text>
            </div>
            <div className="product__imageContainer">
                <div className="product__imageContainer__wrapper">
                    <img
                        className="product__imageContainer__wrapper__image"
                        src={product.imageURL}
                        alt={product.name}
                    />
                </div>
                <div className="product__imageContainer__mobileTabletLayout">
                    <div className="product__imageContainer__mobileTabletLayout__description">
                        <Text ariaLabel={product.description} tabIndex="0">
                            {product.description}
                        </Text>
                    </div>
                    <div className="product__imageContainer__mobileTabletLayout__buyNowContainer">
                        {cartItems.find(item => item.id === product.id) ? 
                            <Button
                                ariaLabel={`Press enter or click button to add more ${product.name} worth rupees ${product.price}}`}
                                onClick={() => addItemHandler(product)}
                                role="button"
                                tabIndex={0}
                            >
              Add More @ Rs. {product.price}
                            </Button>
                            : <Button
                                ariaLabel={`Press enter or click button to buy ${product.name} worth rupees ${product.price}}`}
                                onClick={() => addItemHandler(product)}
                                role="button"
                                tabIndex={0}
                            >
              Buy Now @ Rs. {product.price}
                            </Button>}
                    </div>
                </div>
            </div>
            <div className="product__desktopLayout">
                <div className="product__description">
                    <Text ariaLabel={product.description}>
                        {product.description}
                    </Text>
                </div>
                <div className="product__buyNowContainer">
                    <Text>MRP Rs.{product.price}</Text>
                    {cartItems.find(item => item.id === product.id) ? 
                        <Button
                            ariaLabel={`Press enter or click button to add more ${product.name} worth rupees of ${product.price}}`}
                            onClick={() => addItemHandler(product)}
                        >
        Add More
                        </Button>
                        : <Button
                            ariaLabel={`Press enter or click button to buy now ${product.name} worth rupees of ${product.price}}`}
                            onClick={() => addItemHandler(product)}
                        >
            Buy Now
                        </Button>}
                </div>
            </div>
        </div>
    ));

}


export default ProductList;
