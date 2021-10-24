import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { formatDate } from "../../../utils/date";
import { ReactComponent as ArrowRightSvg } from "./arrowRight.svg";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LocationTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes.xxLarge};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ArrowRight = styled(ArrowRightSvg)`
    margin: 0 10px;
`;

const CurrentDate = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.xLarge};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

const HotelsHeader = () => {
    const {query: {checkIn, location}} = useSelector(state => state.query);
    const date = useMemo(() => formatDate(checkIn, "DD MMMM YYYY"), [checkIn]);

    return (
        <HeaderContainer>
            <LocationTitle>
                Отели <ArrowRight /> {location}
            </LocationTitle>

            <CurrentDate>{date}</CurrentDate>
        </HeaderContainer>
    );
};

export default HotelsHeader;
