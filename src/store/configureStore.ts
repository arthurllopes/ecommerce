import {combineReducers, configureStore} from '@reduxjs/toolkit'
import Cart from './Cart'

const reducer = combineReducers({Cart})
const store = configureStore({reducer})
export type RootState = ReturnType<typeof reducer>;

export default store;