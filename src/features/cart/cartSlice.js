import {createAsyncThunk, createSlice,current } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("cart/getProducts", async() => {
  try {
    const res = await fetch("./data.json");
    const data = await res.json();

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

    addProduct: (state, {payload}) => {
      let productItem = current(state).products.find(el => el.id === payload.id);
      productItem.amount = productItem.amount + 1;
    },
    minusProduct: (state, {payload}) => {
      let currentState = current(state);
      let productItem = current(state).products.find(el => el.id === payload.id);
      console.log(currentState.products.find(el => el.id === 2).amount = 1)
         productItem.amount = productItem.amount - 1;
    },
    addToCart:(state, {payload}) => {
      const itemID = current(state).cartItems.filter(item => item.id === payload.id);
      const cartItem = current(state).cartItems.find(el => el.id === itemID);

      if(cartItem){
        cartItem.amount = cartItem + 1;
      }else{
        cartItem.amount =  cartItem + 1;
        state.cartItems.push(cartItem);
      }
    }
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, {payload}) => {
      state.products = payload;
    }
  }
});

export const {
  addProduct, minusProduct,addToCart
} = cartSlice.actions;

export default cartSlice.reducer;