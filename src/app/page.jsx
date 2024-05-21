import React from "react";
import { CryptoProvider } from "./@context/Context";
import HeaderBottom from "./@headerbottom/HeaderBottom";
import MainSection from "./main-section/page";

const Home = () => {
  return (
    <CryptoProvider>
      <HeaderBottom />
      <MainSection />
    </CryptoProvider>
  );
};

export default Home;
