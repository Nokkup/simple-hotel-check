import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import CountSelectedHotels from "./CountSelectedHotels/CountSelectedHotels";
import Carousel from "../Carousel/Carousel";
import HotelsList from "../HotelsList/HotelsList";
import HotelsHeader from "./HotelsHeader/HotelsHeader";

const HotelsContainer = styled.div`
    display: flex;
    flex-direction: column;

    min-height: 920px;
    max-height: 100vh;

    background: ${({ theme }) => theme.colors.backgroundFormColor};

    box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.04);
    border-radius: 16px;

    padding: 48px 32px;
`;

const Hotels = () => {
    const { hotels } = useSelector((state) => state.hotels);
    const { length: selectedHotelsCount } = useSelector(
        (state) => state.hotels.selectedHotels
    );

    return (
        <HotelsContainer>
            <HotelsHeader />
            
            <Carousel />

            <CountSelectedHotels count={selectedHotelsCount} />

            <HotelsList hotels={hotels} placeholder="Отели не найдены" />
        </HotelsContainer>
    );
};

export default Hotels;
