import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector as useReduxSelector,
    useDispatch as useReduxDispatch } from 'react-redux';
import productReducer from './../features/home/home.slice';

const store = configureStore({
    reducer : {
        products : productReducer
    },
    devTools : process.env.NODE_ENV !== 'production'
})

type RootState = ReturnType<typeof store.getState>
type Dispatch = typeof store.dispatch
export const useSelector : TypedUseSelectorHook<RootState> = useReduxSelector
export const useDispatch = () => useReduxDispatch<Dispatch>()

export default store;



