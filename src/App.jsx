import HomePage from "./pages/HomePage/HomePage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< HomePage />}/>
        <Route path="/speakers" element={< CategoryPage />}/>
        <Route path="/headphones" element={< CategoryPage />}/>
        <Route path="/earphones" element={< CategoryPage />}/>

        <Route path="/product" element={< ProductPage />}/>
        <Route path="/checkout" element={< CheckoutPage />}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
