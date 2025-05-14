import React, { useState, useMemo, useEffect } from "react";
import LineChartComponent from "./LineChart"; // Assuming the LineChart component is already created
import styled from "styled-components";
import YearSlider from "./YearSlider";
import { GridLoader } from "react-spinners";
import AreaChartComponent from "./AreaChart";

const yearRanges = {
  temp: [1880, 2025],
  co2: [2015, 2025],
  meth: [1984, 2025],
};

export default function Card({ title, fetchData, label, dataType }) {
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
      <h2>{title}</h2>

      {isError && <p>Errore nel caricamento dei dati.</p>}

      {/* Render LineChart component with filtered data */}
      {(isLoading || !data) && <GridLoader color="#36d7b7" />}
      {!isLoading && !isError && <AreaChartComponent data={filteredData} label={label} dataType={dataType} />}

      <YearSlider yearState={{ yearRange, setYearRange }} dataType={dataType} yearBounds={yearRanges[dataType]} />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  max-width: 1000px;
  width: 100%;
  height: fit-content;
  margin: 100px auto;

  border-radius: 10px;
  padding: 50px;
  background-color: #0e0d1f;
  color: white;

  h2 {
    font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;
    text-align: center;
  }
`;
