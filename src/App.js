import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/Herosection/HeroSection";
import Newarrival from "./components/Newarrival/Newarrival";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";
import CategoryPage from "./components/Category/CategoryPage";
import Singleprod from "./components/Single/Singleprod";
import Cartpage from "./components/Cart/Cartpage";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { CartProvider } from "./components/contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Content />
        <News />
        <Footer />
      </Router>
    </CartProvider>
  );
}

function Content() {
  const location = useLocation();

  return (
    <div className="main-content">
      {location.pathname === "/" ? (
        <>
          <HeroSection />
          <Newarrival />
        </>
      ) : (
        <Routes>
          <Route path="/categorypage" element={<CategoryPage />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/product/:productId" element={<Singleprod />} />
        </Routes>
      )}
    </div>
  );
}

export default App;

