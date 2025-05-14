import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useTemperature, useCO2, useMethane } from "../hooks/useGlobalWarming";
import { IoMdArrowRoundUp } from "react-icons/io";
import { useMemo } from "react";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { PiChartLineUpBold } from "react-icons/pi";



function Home() {
  const { data: tempData, isLoading: tempLoading } = useTemperature();
  const { data: co2Data, isLoading: co2Loading } = useCO2();
  const { data: methaneData, isLoading: methaneLoading } = useMethane();

  const lastStat = useMemo(() => {
    if (!tempLoading && !co2Loading && !methaneLoading) {
      return {
        temp: tempData?.[tempData.length - 1],
        co2: co2Data?.[co2Data.length - 1],
        methane: methaneData?.[methaneData.length - 1],
      };
    }
    return null;
  }, [tempData, co2Data, methaneData, tempLoading, co2Loading, methaneLoading]);

  return (
    <HomePage>
      <Navbar />
      <Header>
        {lastStat ? (
          <StatsContainer>
            <Stat>
              <span>
              <PiChartLineUpBold />
              {lastStat.temp.station ?? "N/A"}
              </span>
              <span className="stat-label">C° Anomaly</span>
            </Stat>
            <Stat>
              <span>
              <PiChartLineUpBold />

                {lastStat.co2.cycle ?? "N/A"}
              </span>
              <span className="stat-label">CO2</span>
            </Stat>
            <Stat>
              <span>
              <PiChartLineUpBold />

                {lastStat.methane.average ?? "N/A"}
              </span>
              <span className="stat-label">Methane</span>
            </Stat>
          </StatsContainer>
        ) : (
          <span>Loading data...</span>
        )}
      </Header>
      {/* Home content will go here */}
    </HomePage>
  );
}

export default Home;

const HomePage = styled.div`

`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  position: relative;

  margin-top: 100px;
  height: 500px;
  background-image: url("/background2.jpeg");
  background-size: cover; /* Assicurati che l'immagine copra l'intero contenitore */
  background-position: center; /* Posiziona l'immagine al centro */
  border-radius: 25px;


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
  width: 50%;
  background-color: #171d289f;
  backdrop-filter: blur(1px); /* Aggiunge un effetto di sfocatura allo sfondo */
  border-radius: 10px;
  padding: 20px;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 2rem;
  gap: 10px;


  svg{
    color: red;
  }

  span {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  .stat-label{
    font-size: 1rem;
    color: #b6b6b6;
  }
`;

const FullImage = styled.img`
  top: 0;
  left: 0;
  object-fit: contain;
  width: 300px;
  border-radius: 10px;
`;
