"use client";
import React, { useContext, useState, useRef, useEffect } from "react";
import { CryptoContext } from "../@context/Context";
import "./header-bottom.css";

const HeaderBottom = () => {
  const { cryptoData } = useContext(CryptoContext);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const scrollWidth = container.scrollWidth;
        const containerWidth = container.clientWidth;
        const maxScrollLeft = scrollWidth - containerWidth;

        if (container.scrollLeft >= maxScrollLeft) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  

  return (
    <div className="w-[100%] h-[400px] all flex items-end justify-center">
      <div className="w-[64%] h-[80%] flex flex-col items-center justify-between">
        <div className="w-[90%] h-[35%]">
          <div className="w-[100%] h-[70%] flex items-center justify-center">
            <p className="text-[#87CEEB] text-[60px] font-bold">
              CRYPTOFOLIO WATCH LIST
            </p>
          </div>
          <div className="w-[100%] h-[30%] flex items-center justify-center">
            <p className="text-[#A9A9A9] text-[14px] font-medium">
              Get All the Info Regarding Your Favorite Crypto Currency
            </p>
          </div>
        </div>
        <div
          className="w-[100%] h-[50%] flex justify-center items-center logos"
          ref={containerRef}
        >
          <div
            className="logos-slide"
            style={{ scrollBehavior: "smooth", display: "flex" }}
          >
            {cryptoData.concat(cryptoData).map((item, index) => (
              <div
                key={index}
                className="w-[20%] h-[100%] flex flex-col justify-between logos-slide-img"
                style={{ flexShrink: 0 }}
              >
                <div className="w-[100%] h-[65%]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[100%] h-[30%] flex flex-col items-center">
                  <div className="w-[90%] h-[50%] flex items-center justify-center">
                    <p className="text-white text-[16px]">
                      {item.symbol.toUpperCase()}
                    </p>
                    <p
                      className={`text-green ml-5 ${
                        item.price_change_percentage_24h > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {item.price_change_percentage_24h.toFixed(2)}%
                    </p>
                  </div>
                  <div className="w-[100%] h-[50%] flex items-center justify-center">
                    <p className="text-white text-[16px]">
                      {item.current_price.toFixed(2)}$
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
