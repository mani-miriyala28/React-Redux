import { pizzaReducer } from "./Pizza/pizzaReducer";
import {createStore} from 'redux';

export const store=createStore(pizzaReducer)