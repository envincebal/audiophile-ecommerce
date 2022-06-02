import HomePage from "./pages/HomePage/HomePage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

import { getItems } from "./api/APICalls";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    getItems(setProducts);
  },[]);
  return (
    <BrowserRouter>
     <ScrollToTop />
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

        <Route path="/product/:slug" element={< ProductPage products={products} />}/>
        <Route path="/checkout" element={< CheckoutPage />}/>

      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
