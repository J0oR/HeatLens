import React, { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import YearSlider from "./YearSlider";
import { GridLoader } from "react-spinners";
import AreaChartComponent from "../chart/AreaChart";

export default function Card({fetchData, dataType }) {
  const [yearRange, setYearRange] = useState([2020, 2025]);
  const { data, isLoading, isError } = fetchData();

  // Filter the data based on the selected year range
  const filteredData = useMemo(() => {
    if (!data || isLoading) return [];

    if (yearRange.length !== 2) {
      return data.filter((d) => d.time >= yearRange[0] && d.time <= yearRange[0] + 1);
    } else {
      return data.filter((d) => d.time >= yearRange[0] && d.time <= yearRange[1]);
    }
  }, [data, yearRange]);

  return (
    <CardContainer>
      {isError && <p>Errore nel caricamento dei dati.</p>}

      {/* Render LineChart component with filtered data */}
      {(isLoading || !data) && <GridLoader color="#36d7b7" />}
      {!isLoading && !isError && <AreaChartComponent data={filteredData} dataType={dataType} />}

      <YearSlider yearState={{ yearRange, setYearRange }} dataType={dataType} />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 90%;
  height: fit-content;
  margin: 0 auto;

  border-radius: 10px;
  padding: 40px;
  background-color: #0e0d1f;
  color: white;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
  }

  h2 {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;
    text-align: center;
  }
`;
