import React, { useEffect, useMemo } from "react";
import {useDispatch, useSelector} from "react-redux";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import GradientButton from "../Buttons/GradientButton/GradientButton";
import { Input, InputLabel} from "../Input/Input";
import { FormContainer, FormGroup } from "../Form/Form";
import { getCurrentDate } from "../../utils/date";
import { GET_HOTELS } from "../../store/actionTypes";

const SearchFormContainer = styled(FormContainer)`
    margin-bottom: 24px;

    ${InputLabel} {
        font-size: ${({ theme }) => theme.fontSizes.medium};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
    }
`;

const SearchFormGroup = styled(FormGroup)`
    &:not(:last-child) {
        margin-bottom: 24px;
    }
`;

const SearchForm = () => {
    const dispatch = useDispatch();
    const {query} = useSelector(state => state.query);
    const { register, handleSubmit, setValue } = useForm();
    const currentDate = useMemo(() => getCurrentDate("YYYY-MM-DD"), []);

    const onSubmit = (data) => {
        dispatch({type: GET_HOTELS, payload: data});
    };
    
    useEffect(() => {
        setValue("location", query.location);
        setValue("date", query.checkIn);
        setValue("daysCount", query.daysCount);
    }, [query, setValue]);

    return (
        <SearchFormContainer onSubmit={handleSubmit(onSubmit)}>
            <SearchFormGroup>
                <InputLabel htmlFor="location">Локация</InputLabel>
                <Input
                    tabIndex={1}
                    type="text"
                    id="location"
                    {...register("location", {required: true})}
                />
            </SearchFormGroup>
            <SearchFormGroup>
                <InputLabel htmlFor="date">Дата</InputLabel>
                <Input
                    tabIndex={1}
                    type="date"
                    min={currentDate}
                    id="date"
                    {...register("date", {required: true})}
                />
            </SearchFormGroup>
            <SearchFormGroup>
                <InputLabel htmlFor="days">Количество дней</InputLabel>
                <Input
                    tabIndex={1}
                    type="number"
                    min="1"
                    id="days"
                    {...register("daysCount", {required: true})}
                />
            </SearchFormGroup>
            <SearchFormGroup>
                <GradientButton tabIndex={2} type="submit" width="100%">
                    Найти
                </GradientButton>
            </SearchFormGroup>
        </SearchFormContainer>
    );
};

export default SearchForm;
