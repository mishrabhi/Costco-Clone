import React from "react";
import HeaderSection from "../components/header";
import NavBar from "../components/navbar";
import ProductGrid from "../components/ProductGrid";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeaderSection />
      <ProductGrid />
    </div>
  );
};

export default Home;
