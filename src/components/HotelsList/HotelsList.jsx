import React from "react";
import styled from "styled-components";
import HotelCard from "../HotelCard/HotelCard";
import { useDispatch, useSelector } from "react-redux";
import { HotelsActionCreators } from "../../store/actions/hotelsActions";
import { formatDate } from "../../utils/date";

const HotelsListContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding-right: 14px;

    overflow-y: auto;

    /* firefox */
    scrollbar-color: #41522e #e7e7e7;
    scrollbar-width: thin;

    ::-webkit-scrollbar {
        width: 3px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.scrollThumbColor};
        border-radius: 2px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.colors.scrollColor};
    }
`;

const EmptyListMessage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;

    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: ${({ theme }) => theme.fontWeights.normal};

    color: ${({ theme }) => theme.colors.thirdFontColor};
`;

const HotelsList = ({ hotels, withLogo = true, placeholder }) => {
    const dispatch = useDispatch();
    const { selectedHotels } = useSelector((state) => state.hotels);
    const { query: { checkIn, daysCount } } = useSelector((state) => state.query);

    const hotelInSelected = (hotel) => {
        const alreadySelected = selectedHotels.some(
            (h) => hotel.hotelId === h.hotelId
        );
        return alreadySelected;
    };

    const setSelected = (hotel, inSelected) => {
        if (!inSelected) {
            dispatch(HotelsActionCreators.addHotelInSelected(hotel));
        } else {
            dispatch(HotelsActionCreators.deleteHotelFromSelected(hotel));
        }
    };

    return hotels.length ? (
        <HotelsListContainer>
            {hotels.map((hotel) => (
                <HotelCard
                    hotel={hotel}
                    setSelected={setSelected}
                    inSelected={hotelInSelected(hotel)}
                    checkIn={formatDate(checkIn)}
                    days={daysCount}
                    withLogo={withLogo}
                    key={hotel.hotelId}
                />
            ))}
        </HotelsListContainer>
    ) : (
        <EmptyListMessage>{placeholder}</EmptyListMessage>
    );
};

export default HotelsList;
