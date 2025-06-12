import React, { useEffect, useState, useMemo } from "react";
import Navbar from "../components/reusables/Navbar";
import Footer from "../components/reusables/Footer";
import styled from "styled-components";
import { useTemperature, useCO2, useMethane, useN2O, usePolarIce } from "../hooks/useGlobalWarming";
import { PiCloudArrowUpBold } from "react-icons/pi";
import { BsThermometerSun, BsSnow2 } from "react-icons/bs";
import Stat from "../components/home/Stat";

function Home() {
  const { data: tempData, isLoading: tempLoading } = useTemperature();
  const { data: co2Data, isLoading: co2Loading } = useCO2();
  const { data: methaneData, isLoading: methaneLoading } = useMethane();
  const { data: n2oData, isLoading: n2oLoading } = useN2O();
  const { data: polarIceData, isLoading: polarIceLoading } = usePolarIce();

  const lastStat = useMemo(
    () => ({
      temp: !tempLoading && tempData?.[tempData.length - 1],
      co2: !co2Loading && co2Data?.[co2Data.length - 1],
      methane: !methaneLoading && methaneData?.[methaneData.length - 1],
      n2o: !n2oLoading && n2oData?.[n2oData.length - 1],
      polarIce: !polarIceLoading && polarIceData?.[polarIceData.length - 1],
    }),
    [tempData, co2Data, methaneData, n2oData, polarIceData, tempLoading, co2Loading, methaneLoading, n2oLoading, polarIceLoading]
  );

  const images = ["/carousel/desert.webp", "/carousel/glacier.webp", "/carousel/flood.webp", "/carousel/iceMelt.webp"];
  const [bgIndex, setBgIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setBgIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

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
        <BackgroundImage $bgImage={images[bgIndex]} $fade={fade} />
        {lastStat ? (
          <StatsContainer>
            <Stat isLoading={tempLoading} amount={lastStat.temp?.station ?? "N/A"} label={"C° ∆"} icon={<BsThermometerSun />} />
            <Stat isLoading={co2Loading} amount={lastStat.co2?.cycle ?? "N/A"} label={"CO2"} icon={<PiCloudArrowUpBold />} />
            <Stat isLoading={methaneLoading} amount={lastStat.methane?.average ?? "N/A"} label={"Methane"} icon={<PiCloudArrowUpBold />} />
            <Stat isLoading={n2oLoading} amount={lastStat.n2o?.average ?? "N/A"} label={"N2O"} icon={<PiCloudArrowUpBold />} />
            <Stat isLoading={polarIceLoading} amount={lastStat.polarIce?.value ?? "N/A"} label={"Polar ice"} icon={<BsSnow2 />} />
          </StatsContainer>
        ) : (
          <span>Loading data...</span>
        )}
      </Hero>

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
  margin: 340px auto 150px auto;
  width: 80%;
  gap: 100px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  h1 {
    flex: 1;
    font-size: clamp(2rem, 5vw + 1rem, 4rem);
    font-family: "Oswald", sans-serif;
  }

  h3 {
    flex: 1;
    font-size: clamp(1rem, 3vw + 0.5rem, 1.5rem);
    font-family: "Oswald", sans-serif;
    font-weight: 300;
  }

  div {
    flex: 1;
    line-height: 1.5;
    font-size: clamp(0.8rem, 1.2rem, 1.5rem);
  }
`;

const Hero = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px;
  width: 65vw;
  margin: 100px auto 200px auto;
  border-radius: 25px;
  background-color: black; /* 👈 fallback di colore */
  aspect-ratio: 16 / 9;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    align-items: center;
    width: 100vw;
    height: 60%;
    border-radius: 0px;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 80vw;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  background-color: black; /* 👈 fallback di colore */
  border-radius: 25px;
  background-image: ${({ $bgImage }) => `url(${$bgImage})`};
  background-size: 130%;
  background-position: 0% center;
  opacity: ${({ $fade }) => ($fade ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  z-index: 0;
  animation: bg-pan 20s ease-in-out infinite alternate;

  @keyframes bg-pan {
    0% {
      background-position: 0% center;
    }
    100% {
      background-position: 100% center;
    }
  }

  @media screen and (max-width: 768px) {
    border-radius: 0;
  }
`;

const StatsContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background-color: #171d289f;
  backdrop-filter: blur(1px);
  border-radius: 10px;
  padding: 20px;
  gap: 20px;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    max-width: fit-content;
    flex-direction: column;
    gap: 0;
  }
`;
