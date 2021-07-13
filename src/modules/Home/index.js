import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Category from "../../components/Category";
import Carousel from "../../components/Carousel";
import { getBannerData } from "../../redux/banner/actions"
import { getCategoryData } from "../../redux/category/actions"

const Home = () => {
    const dispatch = useDispatch();
    const banners = useSelector((state) => state.banner.banners);
    const categories = useSelector((state) => state.category.categories);

    useEffect(()=> {
        dispatch(getBannerData())
        dispatch(getCategoryData())
    },[dispatch])
    return (
        <section className="homepage-section">
            <Carousel banners={banners}/>
            <Category categories={categories} />
        </section>
    );
};

export default Home;