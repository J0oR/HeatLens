import React from "react";
import { useTemperature, useCO2, useMethane } from "../hooks/useGlobalWarming"; // Hook personalizzati
import Card from "../components/card";
import styled from "styled-components";
import Navbar from "../components/Navbar";

export default function Methane() {
  return (
    <>
      <Navbar />
      <Container>
        <Card title="Methane Globale" fetchData={useMethane} label="Anomalia C02" dataType="meth" />
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
