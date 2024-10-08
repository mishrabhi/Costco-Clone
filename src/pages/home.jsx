import React from "react";
import HeaderSection from "../components/header";
import NavBar from "../components/navbar";
import ProductGrid from "../components/ProductGrid";
import PromotionsSection from "../components/PromotionSection";
import LGAppliance from "../components/Appliance";
import FeaturedDeals from "../components/FeatureDeals";
import Hero from "../components/hero";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <HeaderSection />
      <ProductGrid />
      <PromotionsSection />
      <LGAppliance />
      <FeaturedDeals />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
