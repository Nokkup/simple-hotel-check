import React from "react";
import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";
import GradientButton from "../Buttons/GradientButton/GradientButton";
import { Input, InputLabel } from "../Input/Input";
import { FormContainer, FormGroup, FormTitle } from "../Form/Form";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../../store/actions/authActions";

const LoginFormGroup = styled(FormGroup)`
    margin-top: 18px;

    ${({ error, theme }) =>
        error &&
        css`
            ${Input}, ${Input}:focus, ${Input}:active {
                color: ${theme.colors.errorColor};
                border: 2px solid ${theme.colors.errorColor};
                outline: none;
            }
            ${ErrorMessage} {
                display: block;
            }
            ${InputLabel} {
                color: ${theme.colors.errorColor};
            }
        `};
`;

const LoginFormTitle = styled(FormTitle)`
    -webkit-text-stroke: 1px #000000;
`;

const ErrorMessageContainer = styled.div`
    width: 100%;
    height: 16px;
`;

const ErrorMessage = styled.span`
    display: none;

    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: ${({ theme }) => theme.fontWeights.light};

    color: ${({ theme }) => theme.colors.errorColor};
`;

const LoginForm = () => {
    const dispatch = useDispatch();
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        dispatch(AuthActionCreators.login());
    };

    const passwordErrorMessage = (error) => {
        let errorMessage = "";
        if (error.type === "minLength") {
            errorMessage = "Пароль должен содержать как минимум 8 символов";
        }
        if (error.type === "pattern") {
            errorMessage = "Пароль не должен содержать кириллицы";
        }
        return errorMessage;
    };

    const loginErrorMessage = (error) => {
        let errorMessage = "";
        if (error.type === "pattern") {
            errorMessage = "Введите почту";
        }
        return errorMessage;
    };

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <LoginFormTitle>Simple Hotel Check</LoginFormTitle>
            <LoginFormGroup error={errors.email}>
                <InputLabel htmlFor="email">Логин</InputLabel>
                <Input
                    tabIndex={1}
                    type="email"
                    id="email"
                    {...register("email", {
                        required: true,
                        pattern: /.+@.+\..+/i,
                    })}
                />
                <ErrorMessageContainer>
                    <ErrorMessage>
                        {errors.email && loginErrorMessage(errors.email)}
                    </ErrorMessage>
                </ErrorMessageContainer>
            </LoginFormGroup>
            <LoginFormGroup error={errors.password}>
                <InputLabel htmlFor="password">Пароль</InputLabel>
                <Input
                    tabIndex={1}
                    type="password"
                    id="password"
                    {...register("password", {
                        required: true,
                        pattern: /^[^а-яА-ЯЁё]+$/iu,
                        minLength: 8,
                    })}
                />
                <ErrorMessageContainer>
                    <ErrorMessage>
                        {errors.password && passwordErrorMessage(errors.password)}
                    </ErrorMessage>
                </ErrorMessageContainer>
            </LoginFormGroup>
            <LoginFormGroup>
                <GradientButton tabIndex={2} type="submit" width="100%">
                    Войти
                </GradientButton>
            </LoginFormGroup>
        </FormContainer>
    );
};

export default LoginForm;
