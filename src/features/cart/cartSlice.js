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
    subTotal: 0,
    vatCost: 0
  },
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];

      console.log(state.cartItems)
    },
    addProduct: (state, {payload}) => {
      let productItem = current(state).products.find(el => el.id === payload.id);

    },
    minusProduct: (state, {payload}) => {
      let currentState = current(state);
      let productItem = current(state).products.find(el => el.id === payload.id);

    },
    addToCart:(state, {payload}) => {
      const checkCart = state.cartItems.some(({id}) => id === payload.id);
      let currentProduct = state.cartItems.find(({id}) => id === payload.id);
      const newProduct = {
        id: payload.id,
        name: payload.name,
        price: payload.price * payload.count,
        count: payload.count
      }

    if (!checkCart) {
      state.cartItems.push(newProduct);
      state.subTotal += payload.price * payload.count;
    } else {

      state.subTotal += currentProduct.price * payload.count;
      currentProduct.count += payload.count;
    }

      console.log(current(state).subTotal)
      state.vatCost = Math.round((20 * state.subTotal) / 100);
    }

    
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, {payload}) => {
      state.products = payload;
    }
  }
});

export const {clearCart,
  addProduct, minusProduct,addToCart, totalPrice
} = cartSlice.actions;

export default cartSlice.reducer;