import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../../../store/actions/authActions";
import { ReactComponent as LogOutSvg } from "./logout.svg";
import Button from "../Button";

const StyledLogOutButton = styled(Button)`
    display: flex;
    align-items: center;

    padding: 0;

    color: ${({ theme }) => theme.colors.fourthFontColor};
    font-weight: ${({ theme }) => theme.fontWeights.normal};

    background: transparent;
    border: none;
`;

const LogOutIcon = styled(LogOutSvg)`
    margin-left: 12px;
`;

const LogOutButton = (props) => {
    const dispatch = useDispatch();

    const handleLogOutButtonClick = () => {
        dispatch(AuthActionCreators.logout());
    };

    return (
        <StyledLogOutButton
            onClick={handleLogOutButtonClick}
            {...props}
        >
            {props.children}
            <LogOutIcon />
        </StyledLogOutButton>
    );
};

export default LogOutButton;
