import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import Sidebar from "./../../components/Sidebar";
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

    useEffect(() => {
        dispatch(getCategoryData());
        dispatch(getProductData());
    }, []);

    return (
        <section className="plp-section">
            <div className="plp-sidebar">
                <Sidebar
                    categories={categories.filter(
                        (category) => category.enabled
                    )}
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
