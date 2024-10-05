import React from "react";
import HeaderSection from "../components/header";
import NavBar from "../components/navbar";
import ProductGrid from "../components/ProductGrid";
import PromotionsSection from "../components/PromotionSection";
import LGAppliance from "../components/Appliance";
import FeaturedDeals from "../components/FeatureDeals";
import Hero from "../components/hero";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeaderSection />
      <ProductGrid />
      <PromotionsSection />
      <LGAppliance />
      <FeaturedDeals />
      <Hero />
    </div>
  );
};

export default Home;
