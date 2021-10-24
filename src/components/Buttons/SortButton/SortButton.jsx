import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowUpSvg } from "./arrowUp.svg";
import { ReactComponent as ArrowDownSvg } from "./arrowDown.svg";
import Button from "../Button";
import {
    ascendingSortCompare,
    descendingSortCompare,
} from "../../../utils/sort";

const StyledSortButton = styled(Button)`
    display: flex;

    padding: 5px 0 5px 5px;
    margin-right: 10px;

    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: ${({ theme }) => theme.fontWeights.normal};

    background: transparent;

    border: 1px solid
        ${({ active, theme }) =>
            active
                ? theme.colors.buttonBorderColor
                : theme.colors.backgroundColor};

    color: ${({ active, theme }) =>
        active ? theme.colors.primaryFontColor : theme.colors.thirdFontColor};
`;

const ArrowsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 10px;

    fill: ${({ theme }) => theme.colors.thirdFontColor};
`;

const ArrowUp = styled(ArrowUpSvg)`
    fill: ${({ active, theme }) =>
        active ? theme.colors.primaryFontColor : "inherit"};
`;

const ArrowDown = styled(ArrowDownSvg)`
    fill: ${({ active, theme }) =>
        active ? theme.colors.primaryFontColor : "inherit"};
`;

const SortButton = ({ name, active, setActiveButton, sortFunc }) => {
    const [activeArrow, setActiveArrow] = useState(null);

    const UP = "UP",
        DOWN = "DOWN";

    const handleButtonClick = (event) => {
        if (event.target === event.currentTarget) {
            if (activeArrow === DOWN && active) {
                handleArrowClick(UP);
            } else {
                handleArrowClick(DOWN);
            }
        }
        setActiveButton(name);
    };

    const handleArrowClick = (type) => {
        if (type === UP) {
            sortFunc(ascendingSortCompare);
        }
        if (type === DOWN) {
            sortFunc(descendingSortCompare);
        }
        setActiveArrow(type);
    };

    return (
        <StyledSortButton active={active} onClick={handleButtonClick}>
            {name}
            <ArrowsContainer>
                <ArrowUp
                    active={active ? activeArrow === UP : undefined}
                    onClick={() => handleArrowClick(UP)}
                />
                <ArrowDown
                    active={active ? activeArrow === DOWN : undefined}
                    onClick={() => handleArrowClick(DOWN)}
                />
            </ArrowsContainer>
        </StyledSortButton>
    );
};

export default SortButton;
