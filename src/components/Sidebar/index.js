import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Sidebar = ({ categories, selectedCategory }) => {
    return (
        <aside className="sidebar">
            {categories.map((category) => (
                <Link
                    aria-label={`Show ${category.name} products`}
                    key={category.id}
                    role="button"
                    to={`/products/${category.id}`}
                    tabIndex={0}
                    className={`${
                        selectedCategory == category.id && "selected-category"
                    }`}
                >
                    {category.name}
                </Link>
            ))}
        </aside>
    );
};

export default Sidebar;
