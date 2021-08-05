import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import Sidebar from "./../../components/Sidebar";

import { getCategoryData } from "../../redux/category/actions";
import "./style.scss";

const PLP = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const categories = useSelector((state) => state.category.categories);

    useEffect(() => {
        dispatch(getCategoryData());
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
                <h1>Product listing page</h1>
            </div>
        </section>
    );
};

export default PLP;
