import React from "react";
import styled from "styled-components";
import { ReactComponent as LogoSvg } from "./house.svg";

const HotelLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 25px;

    width: 64px;
    height: 64px;

    border-radius: 50%;
    background: rgba(65, 82, 46, 0.05);
`;

const HotelLogo = () => {
    return (
        <HotelLogoContainer>
            <LogoSvg />
        </HotelLogoContainer>
    );
};

export default HotelLogo;
