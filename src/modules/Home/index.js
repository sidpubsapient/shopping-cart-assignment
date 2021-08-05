import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "../../components/Carousel";
import { getBannerData } from "../../redux/banner/actions";

const Home = () => {
    const dispatch = useDispatch();
    const banners = useSelector((state) => state.banner.banners);

    useEffect(() => {
        dispatch(getBannerData());
    }, [dispatch]);
    return (
        <section className="homepage-section">
            <Carousel banners={banners} />
        </section>
    );
};

export default Home;
