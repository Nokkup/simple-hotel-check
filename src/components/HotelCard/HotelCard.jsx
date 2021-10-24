import React from "react";
import styled from "styled-components";
import HotelRating from "./HotelRating/HotelRating";
import HotelPrice from "./HotelPrice/HotelPrice";
import HotelLogo from "./HotelLogo/HotelLogo";
import HeartButton from "../Buttons/HeartButton/HeartButton";
import CheckInDate from "./CheckInDate/CheckInDate";

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 2px 0;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    
    flex-grow: ${({ grow }) => grow || 0};
    
`;

const HotelCardContainer = styled.div`
    display: flex;
    align-items: center;

    padding: 16px 16px 16px 0;

    border-bottom: 1px solid rgba(135, 135, 135, 0.2);
`;

const HotelName = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: ${({ theme }) => theme.fontWeights.light};
`;


const HotelCard = ({hotel, setSelected, checkIn = "", days = "", inSelected = false, withLogo = true}) => {

    const handleClick = () => {
        setSelected(hotel, inSelected);
    };

    return (
        <HotelCardContainer>
            {withLogo && (
                <Col>
                    <HotelLogo />
                </Col>
            )}

            <Col grow={1}>
                <Row>
                    <HotelName>{hotel.hotelName}</HotelName>
                    <HeartButton onClick={handleClick} active={inSelected} />
                </Row>

                <Row>
                    <CheckInDate checkIn={checkIn} days={days} />
                </Row>

                <Row>
                    <HotelRating rating={hotel.stars} />
                    <HotelPrice price={hotel.priceFrom} />
                </Row>
            </Col>
        </HotelCardContainer>
    );
};

export default HotelCard;
