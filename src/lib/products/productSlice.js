import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.products.push(action.payload);
    },
    removeItem: (state, action) => {
        const list =  state.products;
        list.splice(-1);
      state.products = list;
    },
    clearItems: state => {
      state.products = [];
    },
  },
});

export const { addItem, removeItem, clearItems } = productSlice.actions;
export const productReducer = productSlice.reducer;
