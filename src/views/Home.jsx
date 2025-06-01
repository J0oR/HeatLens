import React, { useEffect, useState } from "react";
import Navbar from "../components/reusables/Navbar";
import Footer from "../components/reusables/Footer";
import styled from "styled-components";
import { useTemperature, useCO2, useMethane, useN2O, usePolarIce } from "../hooks/useGlobalWarming";
import { useMemo } from "react";
import { PiCloudArrowUpBold } from "react-icons/pi";
import { BsThermometerSun, BsSnow2 } from "react-icons/bs";

import Stat from "../components/home/Stat";

function Home() {
  const { data: tempData, isLoading: tempLoading } = useTemperature();
  const { data: co2Data, isLoading: co2Loading } = useCO2();
  const { data: methaneData, isLoading: methaneLoading } = useMethane();
  const { data: n2oData, isLoading: n2oLoading } = useN2O();
  const { data: polarIceData, isLoading: polarIceLoading } = usePolarIce();

  const lastStat = useMemo(() => {
    if (!tempLoading && !co2Loading && !methaneLoading) {
      return {
        temp: tempData?.[tempData.length - 1],
        co2: co2Data?.[co2Data.length - 1],
        methane: methaneData?.[methaneData.length - 1],
        n2o: n2oData?.[n2oData.length - 1],
        polarIce: polarIceData?.[polarIceData.length - 1],
      };
    }
    return null;
  }, [tempData, co2Data, methaneData, n2oData, polarIceData, tempLoading, co2Loading, methaneLoading, n2oLoading, polarIceLoading]);

  return (
    <HomePage>
      <Navbar />

      <Header>
        <div className="titleContainer">
          <h1>Charting Climate Change</h1>
          <h3>Understand Global Warming's through Visual Evidence</h3>
        </div>
        <div>
          Our mission is to make the science of global warming accessible to everyone. This platform offers a vital array of charts and data visualizations that illuminate the key
          indicators of climate change. See the undeniable patterns, understand the urgent implications, and grasp your essential role in responding to how human activities are
          reshaping our world, one critical data point at a time.
        </div>
      </Header>
      <Hero>
        {lastStat ? (
          <StatsContainer>
            <Stat amount={lastStat.temp.station ?? "N/A"} label={"C° Anomaly"} icon={<BsThermometerSun />} />
            <Stat amount={lastStat.co2.cycle ?? "N/A"} label={"CO2"} icon={<PiCloudArrowUpBold />} />
            <Stat amount={lastStat.methane.average ?? "N/A"} label={"Methane"} icon={<PiCloudArrowUpBold />} />
            <Stat amount={lastStat.n2o.average ?? "N/A"} label={"N2O"} icon={<PiCloudArrowUpBold />} />
            <Stat amount={lastStat && lastStat.polarIce ? lastStat.polarIce.value : "N/A"} label={"Polar ice"} icon={<BsSnow2 />} />
          </StatsContainer>
        ) : (
          <span>Loading data...</span>
        )}
      </Hero>
      {/* Home content will go here */}

      <Footer />
    </HomePage>
  );
}

export default Home;

const HomePage = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 340px auto 200px auto;
  width: 80%;
  gap: 100px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  h1 {
    flex: 1;
    font-size: clamp(2rem, 5vw + 1rem, 4rem);
  }

  div {
    flex: 1;
    line-height: 1.5;
    font-size: clamp(0.8rem, 1.2rem, 1.5rem);
  }
`;

const Hero = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px;
  width: 80%;
  margin: 0 auto 200px auto;
  position: relative;

  margin-top: 100px;
  height: 500px;
  background-image: url("/background2.jpeg");
  background-size: cover; /* Assicurati che l'immagine copra l'intero contenitore */
  background-position: center; /* Posiziona l'immagine al centro */
  border-radius: 25px;

  @media screen and (max-width: 768px) {
    align-items: center;
  }

  /* overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 25%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.1) 75%);
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    100% {
      left: 100%;
    }
  } */
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 50px;
  background-color: #171d289f;
  backdrop-filter: blur(1px); /* Aggiunge un effetto di sfocatura allo sfondo */
  border-radius: 10px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const FullImage = styled.img`
  top: 0;
  left: 0;
  object-fit: contain;
  width: 300px;
  border-radius: 10px;
`;
