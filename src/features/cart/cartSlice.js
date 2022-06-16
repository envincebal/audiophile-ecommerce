import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("cart/getProducts", async() => {
  try {
    const res = await fetch("./data.json");
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error)
  }

});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    status: null,
    products: [],
    cartItems: [],
    subTotal: 0,
    vatCost: 0
  },
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.subTotal = 0;
      state.vatCost = 0;
    },
    addProduct: (state, {payload}) => {
      let productItem = state.cartItems.find(el => el.id === payload.id);

      productItem.count = productItem.count + 1;
      state.subTotal += payload.price;
      state.vatCost = Math.round((20 * state.subTotal) / 100);
    },
    minusProduct: (state, {payload}) => {
      let productItem = state.cartItems.find(el => el.id === payload.id);

      productItem.count = productItem.count - 1;
      state.subTotal -= payload.price;
      state.vatCost = Math.round((20 * state.subTotal) / 100);

      if(productItem.count < 1){
        state.cartItems = state.cartItems.filter(item => item.id !== payload.id);
      }

    },
    addToCart:(state, {payload}) => {
      const checkCart = state.cartItems.some(({id}) => id === payload.id);
      let currentProduct = state.cartItems.find(({id}) => id === payload.id);
      const newProduct = {
        id: payload.id,
        name: payload.name.replace(/Headphones|Earphones|Speaker|Wireless/g, ""),
        img: payload.img,
        price: payload.price,
        count: payload.count
      }

    if (!checkCart) {
      state.cartItems.push(newProduct);
      state.subTotal += payload.price * payload.count;
    } else {

      state.subTotal += currentProduct.price * payload.count;
      currentProduct.count += payload.count;
    }

      state.vatCost = Math.round((20 * state.subTotal) / 100);
    }

  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, {payload}) => {
      state.products = payload;
    },
    [fetchProducts.pending]: (state) => {
      state.status = "Pending";
    },
    [fetchProducts.rejected]: (state) => {
      state.status = "Rejected";
    }
  }
});

export const {clearCart,
  addProduct, minusProduct,addToCart, totalPrice
} = cartSlice.actions;

export default cartSlice.reducer;