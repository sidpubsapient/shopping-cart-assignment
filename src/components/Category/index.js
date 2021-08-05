import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Text from "../Text";
import PropTypes from "prop-types";
import "./style.scss";

const CategoryCard = ({ categories }) =>
    categories
        .filter((category) => category.enabled)
        .sort((a, b) => (a.order > b.order ? 1 : b.order > a.order ? -1 : 0))
        .map((category) => (
            <div className="category-card" key={category.id}>
                <img src={category.imageUrl} alt={category.name} />
                <div className="category-content">
                    <p className="category-name">{category.name}</p>
                    <Text className="category-description">
                        {category.description}
                    </Text>
                    <Link
                        role="button"
                        aria-label={`Explore ${category.name} Products`}
                        to={`/products/${category.id}`}
                        tabIndex="0"
                    >
                        <Button tabIndex="0" className="btn-category">
                            Explore {category.name}
                        </Button>
                    </Link>
                </div>
            </div>
        ));

CategoryCard.propTypes = {
    categories: PropTypes.array.isRequired,
};

export default CategoryCard;
