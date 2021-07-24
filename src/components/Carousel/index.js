import React from "react";
import "./style.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PropTypes from "prop-types";

const CarouselComponent = ({banners})=> {
    return (
        <div className="carousel-container">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                stopOnHover={true}
                swipeable={true}
                useKeyboardArrows={false}
                renderArrowPrev={(onClickHandler) => (
                    <button
                        aria-label="Previous Banner"
                        onClick={onClickHandler}
                        style={{ left: 0 }}
                        tabIndex="0"
                        type="button"
                    > PREV </button>
                )  
                }
                renderArrowNext={(onClickHandler) => (
                    <button
                        aria-label="Next Banner"
                        onClick={onClickHandler}
                        style={{ right: 0 }}
                        tabIndex="0"
                        type="button"
                    >NEXT</button>
                )
                }
            >
                {banners.map((banner) => (
                    <div key={banner.id}>
                        <img src={banner.bannerImageUrl} alt={banner.bannerImageAlt} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

CarouselComponent.propTypes = {
    banners: PropTypes.array.isRequired
}

export default CarouselComponent;