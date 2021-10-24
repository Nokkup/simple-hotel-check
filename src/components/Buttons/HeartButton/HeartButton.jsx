import styled from "styled-components";
import { ReactComponent as HeartSvg } from "./heart.svg";

const StyledHeartButton = styled.button`
    padding: 0;
    margin: 0;

    background: none;
    border: none;

    svg {
        fill: ${({ active, theme }) =>
            active
                ? theme.colors.heartActiveColor
                : theme.colors.heartInactiveColor};
    }

    &:hover,
    &:hover svg,
    &:focus {
        cursor: pointer;
        fill: ${({ theme }) => theme.colors.heartActiveColor};
    }
`;

const HeartButton = (props) => {
    return (
        <StyledHeartButton {...props}>
            <HeartSvg />
        </StyledHeartButton>
    );
};

export default HeartButton;
