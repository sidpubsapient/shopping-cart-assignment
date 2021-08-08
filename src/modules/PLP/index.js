/* eslint-disable indent */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router";

import Sidebar from "./../../components/Sidebar";
import Dropdown from "./../../components/Dropdown";
import Product from "./../../components/Product";

import { getCategoryData } from "../../redux/category/actions";
import { getProductData } from "../../redux/product/actions";

import "./style.scss";

const PLP = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const categories = useSelector((state) => state.category.categories);
    const products = useSelector((state) => state.product.products);
    const getProducts = () => {
        // eslint-disable-next-line no-prototype-builtins
        return params.hasOwnProperty("id")
            ? products.filter((product) => product.category == params.id)
            : products;
    };

    const history = useHistory();
    const enabledCategories = categories
        .filter((category) => category.enabled)
        .sort((a, b) => (a.order > b.order ? 1 : b.order > a.order ? -1 : 0));
    const changeHandlerDropdown = (e) => {
        e.target.selectedIndex
            ? history.push(
                  `/products/${
                      enabledCategories[e.target.selectedIndex - 1].id
                  }`
              )
            : history.push("/products");
    };

    useEffect(() => {
        dispatch(getCategoryData());
        dispatch(getProductData());
    }, []);

    return (
        <section className="plp-section">
            <div className="plp-dropdown">
                <Dropdown
                    options={enabledCategories}
                    ariaLabel="Choose a category"
                    changeHandlerDropdown={changeHandlerDropdown}
                    value={params["id"]}
                />
            </div>
            <div className="plp-sidebar">
                <Sidebar
                    categories={enabledCategories}
                    selectedCategory={params["id"]}
                />
            </div>
            <div className="plp-products">
                <Product products={getProducts()} />
            </div>
        </section>
    );
};

export default PLP;
