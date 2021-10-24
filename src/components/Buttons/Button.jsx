import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: ${({ theme }) => theme.fontWeights.medium};

    color: ${({ theme }) => theme.colors.secondaryFontColor};

    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "auto"};

    border: 1.5px solid ${({ theme }) => theme.colors.buttonBorderColor};
    border-radius: 4px;

    padding: 8px 18px;

    &:hover,
    &:focus,
    &:active {
        cursor: pointer;
    }
`;

const Button = (props) => {
    return <StyledButton {...props} />;
};

export default Button;
