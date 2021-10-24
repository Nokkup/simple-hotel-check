import React from "react";
import styled from "styled-components";
import { ReactComponent as StarSvg } from "./star.svg";

const RaitingContainer = styled.div`
    display: flex;
`;

const Star = styled(StarSvg)`
    fill: ${({ fullfiled, theme }) =>
        fullfiled
            ? theme.colors.starActiveColor
            : theme.colors.starInactiveColor};

    padding-right: 3px;
`;

const HotelRating = ({ rating }) => {
    const stars = Array(5).fill(0);

    return (
        <RaitingContainer>
            {stars.map((stars, ind) =>
                ind < rating ? <Star fullfiled="true" key={ind} /> : <Star key={ind} />
            )}
        </RaitingContainer>
    );
};

export default React.memo(HotelRating);
