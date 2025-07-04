import { ORDER_PiZZA } from "./pizzaTypes"

const initialState={
    pizzaBase:100
}
export const pizzaReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case ORDER_PiZZA:
            return {
                ...state,pizzaBase:state.pizzaBase-1
            }
        default:
            return state
    }

}