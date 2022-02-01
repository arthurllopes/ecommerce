import { AnyAction, createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { Product } from "../fragments/ProductCard";
import { RootState } from "./configureStore";

const slice = createSlice({
    name: 'Items',
    initialState: {
        AllProducts: [],
        productsShown: []
    },
    reducers: {
        setAllProducts(state: any, action: PayloadAction<Product[]>){
            state.AllProducts = [...action.payload]
        },
        setProductsShown(state: any, action: PayloadAction<Product[]>){
            state.productsShown = [...action.payload]
        },
    }
})
export const {setAllProducts, setProductsShown} = slice.actions

export const changeProducts = (category: string): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch, getState) => {
    const { AllProducts } = getState().Items
    if (category === 'all') {
        dispatch(setProductsShown(AllProducts))
    } else {
        const productsSelecteds = AllProducts.filter((product: Product) => product.category === category)
        dispatch(setProductsShown(productsSelecteds))
    }
}


export default slice.reducer

