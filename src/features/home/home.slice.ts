import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { gets } from './home.action';

type State = {
    loading: boolean,
    products: Product[]
}

const mySlice = createSlice({
    name: 'product',
    initialState: { loading: false,products : [] } as State,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(gets.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(gets.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
        })
    }
})

export const { } = mySlice.actions;

export default mySlice.reducer;