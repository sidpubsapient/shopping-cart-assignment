import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import Sidebar from "./../../components/Sidebar";
import Products from "./../../components/Product";

import { getCategoryData } from "../../redux/category/actions";
import { getProductData } from "../../redux/product/actions";
import "./style.scss";

const PLP = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const categories = useSelector((state) => state.category.categories);
    const products = useSelector((state) => state.product.products);
    const getProducts = () => {
        return params.hasOwnProperty("id") ? products.filter(product => product.category == params.id) : products
    }

    useEffect(() => {
        dispatch(getCategoryData());
        dispatch(getProductData());
    }, []);

    return (
        <section className="products-section">
            <Sidebar
                categories={categories.filter( category => category.enabled)}
            />
            <div className="products-section__plp">
                <Products products={getProducts()}/>
            </div>
        </section>
    );
};

export default PLP;
