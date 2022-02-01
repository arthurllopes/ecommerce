import { AnyAction, createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { Product } from "../fragments/ProductCard";
import { RootState } from "./configureStore";

const setTotal = (items: Product[]) => {
    const total = items.reduce((total, item) => total + item.price, 0);
    return total;
} 
const slice = createSlice({
    name: 'Cart',
    initialState: {
        items: [],
        total: 0,
    },
    reducers: {
        addItem(state: any, action: PayloadAction<Product>){
            state.items = [action.payload, ...state.items]
            state.total = setTotal(state.items)
        },
        removeItem(state: any, action: PayloadAction<Product[]>){
            state.items = [...action.payload]
            state.total = setTotal(state.items)
        }
    }
})
export const {addItem, removeItem} = slice.actions

export const addToCart = (product: Product): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch, getState) => {
    const items = getState().Cart.items
    const alreadyInCart = items.filter((item: Product) => item.id === product.id).length > 0
    if (!alreadyInCart) {
        dispatch(addItem(product))
    }
}
export const removeFromCart = (ID: number): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch, getState) => {
    const {items}= getState().Cart

    const newItems = items.filter((item: Product) => item.id !== ID)
    dispatch(removeItem(newItems))
}


export default slice.reducer

