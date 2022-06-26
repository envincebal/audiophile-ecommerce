import {createSlice} from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    navModal: false,
    cartModal: false
  },
  reducers: {
    toggleCartModal: (state) => {
      state.cartModal = !state.cartModal;
    },
    toggleNavModal: (state) => {
      state.navModal = !state.navModal;
    }
  }
});

export const {
  toggleCartModal,
  toggleNavModal
} = modalSlice.actions;

export default modalSlice.reducer;