import React from "react";
import Navbar from "../component/shared/Navbar/Navbar";
import Hero from "../modules/Client/Home/Hero/Hero";
import Footer from "../component/shared/Footer/Footer";
import ShopCard from "../modules/Client/Home/ShopCard/ShopCard";
import Offer from "../modules/Client/Home/Offer/Offer";
import AboutUs from "../modules/Client/Home/AboutUs/AboutUs";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Offer />
      <ShopCard />
      <Footer />
    </div>
  );
}

export default Home;
