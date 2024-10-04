import React from "react";
import HeaderSection from "../components/header";
import NavBar from "../components/navbar";
import ProductGrid from "../components/ProductGrid";
import PromotionsSection from "../components/PromotionSection";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeaderSection />
      <ProductGrid />
      <PromotionsSection />
    </div>
  );
};

export default Home;
