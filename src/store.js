import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";

const reducers = combineReducers({
  cart: cartReducer,
  modal: modalReducer
});

const persistConfig = {
  key: "root",
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

 const store = configureStore({
  reducer:persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  })
  
});

export default store; 