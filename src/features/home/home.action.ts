import { createAsyncThunk } from '@reduxjs/toolkit';
import * as productApi from './../../apis/productApi';

export const gets = createAsyncThunk('product/gets',async () => {
    const response = await productApi.gets();
    return response.data
})