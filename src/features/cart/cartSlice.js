import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("cart/getProducts", async() => {
  try {
    const res = await fetch("./data.json");
    const data = await res.json();
    console.log(res)
    return data
  } catch (error) {
    console.log(error)
  }

});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cartItems: [],
    amount: 0,
    total: 0
  },
  reducers: {

  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, {payload}) => {
      state.products = payload;
    }
  }
});

export const {
  getProducts
} = cartSlice.actions;

export default cartSlice.reducer;