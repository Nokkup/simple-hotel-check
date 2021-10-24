import React from "react";
import styled from "styled-components";
import { priceFormat } from "../../../utils/strings";

const PriceContainer = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: flex-end;

    width: 120px;
`;

const PriceLabel = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.thirdFontColor};
    padding-right: 10px;
`;

const Price = styled.span`
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: ${({ theme }) => theme.fontWeights.normal};

    color: ${({ theme }) => theme.colors.primaryFontColor};
`;

const HotelPrice = ({ price }) => {
    return (
        <PriceContainer>
            <PriceLabel>Price:</PriceLabel>
            <Price>{priceFormat(price)}</Price>
        </PriceContainer>
    );
};

export default HotelPrice;
