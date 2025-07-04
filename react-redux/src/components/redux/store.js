import { pizzaReducer } from "./Pizza/pizzaReducer";
import {createStore} from 'redux';
import { burgerReducer } from "./BurgerBox/BurgerReducer";
import { combineReducers } from "redux";
// Combine reducers if you have multiple reducers   
const rootReducer = combineReducers({
    pizza: pizzaReducer,
    burger: burgerReducer, // Example for another reducer
    // Add other reducers here if needed
});

export const store=createStore(rootReducer)