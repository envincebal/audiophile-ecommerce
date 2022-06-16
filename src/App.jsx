import HomePage from "./pages/HomePage/HomePage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

import ScrollToTop from "./components/ScrollToTop";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "./features/cart/cartSlice";

function App() {

  const dispatch = useDispatch();
  const {products} = useSelector(store => store.cart);
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);
  return (

    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={< HomePage />}/>
        <Route
          path="/speakers"
          element={< CategoryPage category = {
          "speakers"
        } />}/>
        <Route
          path="/headphones"
          element={< CategoryPage category = {
          "headphones"
        } />}/>
        <Route
          path="/earphones"
          element={< CategoryPage category = {
          "earphones"
        } />}/>
        <Route path="/checkout" element={< CheckoutPage />}/>
        <Route
          path="/product/:slug"
          element={< ProductPage items = {
          products
        } />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
