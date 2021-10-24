import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm/LoginForm";

const BackgroundContainer = styled.div`
    width: 100vw;
    height: 100vh;

    background: url("/img/background.png") no-repeat center/cover;
`;

const BackgroundContainerBlur = styled.div`
    position: absolute;
    z-index: 10;

    height: 100%;
    width: 100%;

    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(4px);
`;

const LoginContainer = styled.div`
    position: absolute;
    z-index: 10;
    
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;
`;

const Login = () => {
    return (
        <>
            <BackgroundContainer>
                <BackgroundContainerBlur />
                <LoginContainer>
                    <LoginForm />
                </LoginContainer>
            </BackgroundContainer>
        </>
    );
};

export default Login;
