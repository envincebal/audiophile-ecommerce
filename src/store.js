import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import cartReducer from "./features/cart/cartSlice";

const reducers = combineReducers({
  cart: cartReducer
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