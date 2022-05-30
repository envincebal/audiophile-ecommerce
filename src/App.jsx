import HomePage from "./pages/HomePage/HomePage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
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

        <Route path="/:category/:slug" element={< ProductPage />}/>
        <Route path="/checkout" element={< CheckoutPage />}/>

      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
