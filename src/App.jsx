import React from "react";
import Home from "./pages/home";
import NavBar from "./components/navbar";
import ProductPage from "./pages/productPage";
import SignInRegisterPage from "./components/SignInRegisterPage"; // Import the new SignInRegisterPage
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/signin-register" element={<SignInRegisterPage />} />{" "}
        {/* New route for SignIn/Register */}
      </Routes>
    </Router>
  );
};

export default App;
