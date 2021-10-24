import React from "react";
import styled from "styled-components";
import { daysFormat } from "../../../utils/strings";

const StyledCheckInDate = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: ${({ theme }) => theme.fontWeights.normal};

    color: ${({ theme }) => theme.colors.thirdFontColor};
`;

const CheckInDate = ({checkIn, days}) => {
    return (
        <StyledCheckInDate>
                {checkIn} — {days} {daysFormat(days)}
        </StyledCheckInDate>
    );
};

export default CheckInDate;
