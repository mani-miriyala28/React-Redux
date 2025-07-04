const initalState = { burgerBuns:1000}
export const burgerReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ORDER_BURGER':
            return {
                ...state,
                burgerBuns: state.burgerBuns - 1
            }
        default:
            return state;
    }
}