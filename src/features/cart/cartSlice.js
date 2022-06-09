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
    if(!checkCart){
      state.cartItems.push(newProduct);
     
    }else{
      if(payload.count === 1){
        currentProduct.price += currentProduct.price;
      }
       currentProduct.price = currentProduct.price * payload.count;
       currentProduct.count += payload.count;
    }

       console.log(current(state).cartItems)
       console.log(payload.count)

    },

    totalPrice:(state) => {

      current(state).cartItems.forEach(item => {
        state.total += item.price;
        console.log(item)
      });
       console.log(state.total)
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