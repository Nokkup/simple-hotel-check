import styled from "styled-components";

export const InputLabel = styled.label`
    display: block;

    padding-bottom: 5px;

    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: ${({ theme }) => theme.fontWeights.light};
`;

export const Input = styled.input`
    display: block;

    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: ${({ theme }) => theme.fontWeights.light};

    padding: 0 16px;

    width: 100%;
    height: 50px;

    background: ${({ theme }) => theme.colors.backgroundFormColor};
    border: 1px solid ${({ theme }) => theme.colors.inputBorderColor};
    border-radius: 4px;

    color: inherit;
`;
