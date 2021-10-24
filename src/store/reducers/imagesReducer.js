
const initialState = {
    images: [
        "/img/carousel1.png",
        "/img/carousel2.png",
        "/img/carousel3.png",
        "/img/carousel3.png",
    ]
};

export function imagesReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}