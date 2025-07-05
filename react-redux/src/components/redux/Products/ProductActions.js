import axios from "axios"
import { FETCH_REQUEST,FETCH_SUCCESS,FETCH_ERROR } from "./ProductTypes"
export const fetchRequest=()=>{
    return {
        type:FETCH_REQUEST
    }
}

export const fetchSuccess=(products)=>{
    return {
        type: FETCH_SUCCESS,
        payload: products
    }
}

export const fetchError=(error)=>{
    return {
        type: FETCH_ERROR,
        payload: error
    }
}

export const fetchProducts=()=>{
    return (dispatch)=>{
        dispatch(fetchRequest());
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            console.log(res.data)
            dispatch(fetchSuccess(res.data)); // Pass the full array of products
            
        }
            
        ).catch(err=>{
            const errorMsg=err.message;
            dispatch(fetchError(errorMsg))
            
        })
    }
}