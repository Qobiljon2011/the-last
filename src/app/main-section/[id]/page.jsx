"use client";
import React, { useContext, useState, useEffect } from "react";
import { CryptoContext } from "../../@context/Context";
import { useParams } from "next/navigation";
import LineChart from "../../../component/chart/LineChart";
import Btn from "../../../component/btn/Btn";

const MainDetails = () => {
  const { id } = useParams();
  const {
    select,
    bitcoin,
    ethereum,
    ripple,
    solana,
    binancecoin,
    dogecoin,
    cardano,
    chainlink,
    polkadot,
    stellar,
  } = useContext(CryptoContext);
  const [selectedCrypto, setSelectedCrypto] = useState(null);

  useEffect(() => {
    switch (id) {
      case "bitcoin":
        setSelectedCrypto(bitcoin);
        break;
      case "ethereum":
        setSelectedCrypto(ethereum);
        break;
      case "ripple":
        setSelectedCrypto(ripple);
        break;
      case "binancecoin":
        setSelectedCrypto(binancecoin);
        break;
      case "solana":
        setSelectedCrypto(solana);
        break;
      case "dogecoin":
        setSelectedCrypto(dogecoin);
        break;
      case "cardano":
        setSelectedCrypto(cardano);
        break;
      case "chainlink":
        setSelectedCrypto(chainlink);
        break;
      case "polkadot":
        setSelectedCrypto(polkadot);
        break;
      case "stellar":
        setSelectedCrypto(stellar);
        break;
      default:
        setSelectedCrypto(bitcoin);
    }
  }, [
    id,
    bitcoin,
    ethereum,
    ripple,
    solana,
    binancecoin,
    dogecoin,
    cardano,
    chainlink,
    polkadot,
    stellar,
  ]);

  const formatCurrency = (price) => {
    let formattedPrice = "";
    switch (select) {
      case "USD":
        formattedPrice = `$${price}`;
        break;
      case "RUB":
        formattedPrice = `${(price * 90).toFixed(0)}₽`;
        break;
      case "SUM":
        formattedPrice = `${(price * 12000).toFixed(0)} SUM`;
        break;
      default:
        formattedPrice = `$${price}`;
        break;
    }
    if (formattedPrice.length > 11) {
      formattedPrice = formattedPrice.substring(0, 8) + "...";
    }
    return formattedPrice;
  };

  if (!selectedCrypto) {
    return (
      <div> {id}'s API dont work or data not found. Wait till API works.</div>
    );
  }

  const truncateDescription = (description) => {
    const finalDescription =
      description?.en ||
      bitcoin?.description?.en ||
      "No description available.";
    if (finalDescription.length > 300) {
      return finalDescription.substring(0, 300) + "...";
    }
    return finalDescription;
  };

  return (
    <div className="w-full h-[927px] bg-[#14161a] flex items-center">
      <div className="w-full h-[95%] flex">
        <div className="w-[30%] h-full border-r border-[#808080]">
          <div className="w-full h-[60%]  flex flex-col justify-between">
            <div className="w-full h-[60%]  flex flex-col items-center justify-between">
              <imgz
                src={selectedCrypto.image.large}
                width={200}
                height={200}
                alt={`${selectedCrypto.name} logo`}
              />
              <p className="font-bold text-white text-[48px]">
                {selectedCrypto.name}
              </p>
            </div>
            <div className="w-full h-[35%]  p-4">
              <p className="text-white text-[16px]">
                {truncateDescription(selectedCrypto?.description)}
              </p>
            </div>
          </div>
          <div className="w-full h-[20%] ">
            <div className="w-full h-[30%]  flex items-center p-4 gap-2">
              <p className="text-white text-[24px] font-bold">Rank :</p>
              <p className="text-white text-[24px] font-normal">
                {selectedCrypto?.market_cap_rank}
              </p>
            </div>
            <div className="w-full h-[30%]  flex items-center p-4 gap-2">
              <p className="text-white text-[24px] font-bold">
                Current Price :
              </p>
              <p className="text-white text-[24px] font-normal">
                {formatCurrency(selectedCrypto?.market_data?.current_price?.usd)}
              </p>
            </div>
            <div className="w-full h-[30%]  flex items-center p-4 gap-2">
              <p className="text-white text-[24px] font-bold">Market Cap :</p>
              <p className="text-white text-[24px] font-normal">
                {selectedCrypto?.market_data?.market_cap?.usd}MLN
              </p>
            </div>
          </div>
        </div>
        <div className="w-[70%] h-[100%]">
          <LineChart className='w-[100%] h-full' />
          <Btn/>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
