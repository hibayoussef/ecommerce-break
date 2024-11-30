import React from "react";
import Navbar from "../component/shared/Navbar/Navbar";
import Hero from "../modules/Client/Home/Hero/Hero";
import Footer from "../component/shared/Footer/Footer";
import ShopCard from "../modules/Client/Home/ShopCard/ShopCard";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ShopCard />
      <Footer />
    </div>
  );
}

export default Home;
