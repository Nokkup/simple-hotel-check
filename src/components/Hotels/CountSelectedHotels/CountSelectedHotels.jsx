import React from "react";
import styled from "styled-components";
import { hotelsFormat } from "../../../utils/strings";

const CountHotelsContainer = styled.div`
    display: flex;

    margin-bottom: 12px;

    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: ${({ theme }) => theme.fontWeights.light};

    & span {
        color: ${({ theme }) => theme.colors.primaryFontColor};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        padding: 0 5px;
    }
`;

const CountSelectedHotels = ({count}) => {
    return (
        <CountHotelsContainer>
            Добавленно в Избранное:
            <span>{count}</span>
            {hotelsFormat(count)}
        </CountHotelsContainer>
    );
};

export default React.memo(CountSelectedHotels);
