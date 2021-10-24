import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const StyledCarousel = styled.div`
    max-width: 650px;
    height: 200px;

    margin: 38px 0;
`;

const StyledImg = styled.img`
    width: 164px;
    height: 149px;
    object-fit: cover;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
`;

const Carousel = () => {
    const { images } = useSelector((state) => state.images);

    return (
        <StyledCarousel>
            <Swiper
                slidesPerView={3.4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
            >
                {images.map((img, ind) => (
                    <SwiperSlide key={ind}>
                        <StyledImg src={img} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </StyledCarousel>
    );
};

export default Carousel;
