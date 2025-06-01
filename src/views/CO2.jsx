import React from "react";
import { useTemperature, useCO2, useMethane } from "../hooks/useGlobalWarming"; // Hook personalizzati
import Card from "../components/card";
import styled from "styled-components";
import Navbar from "../components/reusables/Navbar";
import Footer from "../components/reusables/Footer";
import ChartSummary from "../components/ChartSummary";
import ChartInfo from "../components/ChartInfo";

export default function CO2() {
  return (
    <>
      <Navbar />
      <ChartSummary dataType="co2" />
        <Card fetchData={useCO2} label="Anomalia C02" dataType="co2" />
      <ChartInfo dataType="co2" />
      <Footer />
    </>
  );
}
