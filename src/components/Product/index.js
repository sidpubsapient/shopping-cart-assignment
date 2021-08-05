import React from "react";
import "./style.scss";
import Text from "../Text";
import Button from "../Button";
const ProductList = ({ products }) => {
    console.log("products", products);

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

                <Button
                    ariaLabel={`Press enter or click button to buy now ${product.name} worth rupees of ${product.price}}`}
                >
                    Buy Now
                </Button>
            </div>
        </div>
    ));
};

export default ProductList;
