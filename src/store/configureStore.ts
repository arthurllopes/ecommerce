import {combineReducers, configureStore} from '@reduxjs/toolkit'
import Cart from './Cart'
import Items from './Items'


const reducer = combineReducers({Cart, Items})
const store = configureStore({reducer})
export type RootState = ReturnType<typeof reducer>;

export default store;