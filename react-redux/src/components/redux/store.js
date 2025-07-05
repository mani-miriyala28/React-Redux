import { pizzaReducer } from "./Pizza/pizzaReducer";
import {applyMiddleware, createStore} from 'redux';
import { burgerReducer } from "./BurgerBox/BurgerReducer";
import { combineReducers } from "redux";
import {logger} from'redux-logger'
import {thunk} from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import productReducer from "./Products/ProductReducer";
// Combine reducers if you have multiple reducers   
const rootReducer = combineReducers({
    pizza: pizzaReducer,
    burger: burgerReducer, // Example for another reducer
    // Add other reducers here if needed
    products:productReducer
});

export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))