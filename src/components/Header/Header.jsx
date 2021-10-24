import React from "react";
import styled from "styled-components";
import LogOutButton from "../Buttons/LogOutButton/LogOutButton";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 90px;
    width: 100%;
`;

const HeaderTitle = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xLarge};
    font-weight: ${({ theme }) => theme.fontWeights.medium};

    color: ${({ theme }) => theme.colors.primaryFontColor};
`;

const Header = () => {

    return (
        <HeaderContainer>
            <HeaderTitle>Simple Hotel Check</HeaderTitle>
            <LogOutButton>Выйти</LogOutButton>
        </HeaderContainer>
    );
};

export default Header;
