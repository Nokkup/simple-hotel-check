import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    flex: 0 0 370px;
    min-width: 350px;
    max-width: 400px;

    padding: 32px;

    background: ${({ theme }) => theme.colors.backgroundFormColor};
    box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.04);
    border-radius: 16px;
`;

export const FormGroup = styled.div`
    width: 100%;
    color: ${({ theme }) => theme.colors.primaryFontColor};
`;

export const FormTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.xLarge};
    font-weight: ${({ theme }) => theme.fontWeights.medium};

    color: ${({ theme }) => theme.colors.primaryFontColor};
`;
