// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
// import Home from "./components/home/home";
import Header from "./components/header/header";
import Home from "./components/home/home";
import AboutUs from "./components/aboutUs/aboutUs";
import LoginModal from "./components/login/login";
import Activity from "./components/activity/activity";
import OurProduct from "./components/ourProduct/ourProduct";
import ProductDetail from "./components/productDetail/productDetail";
import DetailProductModal from "./components/detailProductModal/detailProductModal";
import Cart from "./components/cart/cart";
import { AuthProvider } from "./context/authContext";

const HmpsMi = ({ openLoginModal }) => (
  <div>
    {/* <Home openLoginModal={openLoginModal} /> */}
    <Home />
    <AboutUs />
    <Activity />
    <OurProduct />
  </div>
);

function App() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  // Fungsi untuk membuka modal
  // const openLoginModal = () => setLoginModalOpen(true);
  // Fungsi untuk menutup modal
  // const closeLoginModal = () => setLoginModalOpen(false);

  const openLoginModal = () => setLoginModalOpen(true);
  const closeLoginModal = () => setLoginModalOpen(false);
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <HmpsMi />
                </>
              }
            />
            <Route path="/productDetail" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          {/* {isLoginModalOpen && <LoginModal closeLoginModal={closeLoginModal} />} */}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
