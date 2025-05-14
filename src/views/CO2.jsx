import React from "react";
import { useTemperature, useCO2, useMethane } from "../hooks/useGlobalWarming"; // Hook personalizzati
import Card from "../components/card";
import styled from "styled-components";
import Navbar from "../components/Navbar";

export default function CO2() {
  return (
    <>
      <Navbar />
      <Container>
        <Card title="C02 Globale" fetchData={useCO2} label="Anomalia C02" dataType="co2" />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  //border: 1px solid blue;
  padding: 50px;
`;
