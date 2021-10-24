import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledGradientButton = styled(Button)`
    min-height: 50px;

    background: linear-gradient(104.34deg, #41522e -15.34%, #be8022 145.95%);
`;

const GradientButton = (props) => {
    return <StyledGradientButton {...props} />;
};

export default GradientButton;
