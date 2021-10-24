import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { HotelsActionCreators } from "../../../store/actions/hotelsActions";
import SortButton from "../../Buttons/SortButton/SortButton";

const SortPanelContainer = styled.div`
    display: flex;
    margin: 24px 0 14px 0;
`;

const SortPanel = () => {
    const dispatch = useDispatch();
    const [activeButtonName, setActiveButtonName] = useState(null);
    const { selectedHotels } = useSelector((state) => state.hotels);
    
    const sortByRating = (compareFunc) => {
        const sortedSelectedHotels = [...selectedHotels].sort((a, b) =>
            compareFunc(a.stars, b.stars)
        );
        dispatch(HotelsActionCreators.setSelectedHotels(sortedSelectedHotels));
    };

    const sortByPrice = (compareFunc) => {
        const sortedSelectedHotels = [...selectedHotels].sort((a, b) =>
            compareFunc(a.priceFrom, b.priceFrom)
        );
        dispatch(HotelsActionCreators.setSelectedHotels(sortedSelectedHotels));
    };

    const sortOptions = [
        { name: "Рейтинг", sortFunc: sortByRating },
        { name: "Цена", sortFunc: sortByPrice },
    ];

    return (
        <SortPanelContainer>
            {sortOptions.map((option, ind) => (
                <SortButton
                    {...option}
                    active={activeButtonName === option.name}
                    setActiveButton={setActiveButtonName}
                    key={option.name}
                />
            ))}
        </SortPanelContainer>
    );
};

export default SortPanel;
