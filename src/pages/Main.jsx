import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Hotels from "../components/Hotels/Hotels";
import SearchForm from "../components/SearchForm/SearchForm";
import HotelsSelected from "../components/HotelsSelected/HotelsSelected";

import { GET_HOTELS } from "../store/actionTypes";

const MainContainer = styled.div`
    position: absolute;

    display: flex;
    flex-direction: column;

    min-width: 100%;
    min-height: 100%;

    background: ${({ theme }) => theme.colors.backgroundColor};

    padding: 0 24px 24px;
`;

const MainContentContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const SideContainer = styled.div`
    display: flex;
    flex-direction: column;

    flex: 0 0 370px;

    margin-right: 24px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;

    flex: 0 0 650px;
    min-width: 500px;
`;

const Main = () => {
    const dispatch = useDispatch();
    const { query } = useSelector((state) => state.query);

    useEffect(() => {
        dispatch({ type: GET_HOTELS, payload: query });
    }, []);

    return (
        <MainContainer>
            <Header />
            <MainContentContainer>
                <SideContainer>
                    <SearchForm />
                    <HotelsSelected />
                </SideContainer>

                <ContentContainer>
                    <Hotels />
                </ContentContainer>
            </MainContentContainer>
        </MainContainer>
    );
};

export default Main;
