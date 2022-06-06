import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState:{
    cartItems: [],
    amount: 0,
    total: 0,
    reducers:{

    }
  }
});

export default cartSlice.reducer;