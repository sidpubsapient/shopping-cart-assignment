import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Text from "../Text";

import "./style.scss";

const CategoryCard = ({ categories }) => categories.filter(category => category.enabled).map(category => (
    <div className="categoryCard" key={category.id}>
        <img src={category.imageUrl} alt={category.name} />
        <div className="categoryCard__caption">
            <h4>{category.name}</h4>
            <Text>{category.description}</Text>
            <Link
                role="button"
                aria-label={`Explore ${category.name} Products`}
                to={`/products/${category.id}`}
                tabIndex="0"
            >
                <Button tabIndex="0">Explore {category.name}</Button>
            </Link>
        </div>
    </div>));

export default CategoryCard;
