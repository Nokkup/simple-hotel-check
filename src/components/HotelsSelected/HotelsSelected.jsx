import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import HotelsList from "../HotelsList/HotelsList";
import SortPanel from "./SortPanel/SortPanel";

const SelectedHotelsContainer = styled.div`
    display: flex;
    flex-direction: column;

    flex: 0 0 485px;
    max-height: 485px;

    padding: 30px;

    background: ${({ theme }) => theme.colors.backgroundFormColor};
    box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.04);
    border-radius: 16px;
`;

const Title = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.xLarge};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const SelectedHotels = () => {
    const { selectedHotels } = useSelector((state) => state.hotels);
    return (
        <SelectedHotelsContainer>
            <Title>Избранное</Title>
            <SortPanel />

            <HotelsList hotels={selectedHotels} withLogo={false} placeholder="Отели ещё не добавлены" />
        </SelectedHotelsContainer>
    );
};

export default SelectedHotels;
