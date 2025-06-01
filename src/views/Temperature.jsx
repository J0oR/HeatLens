import React from "react";
import { useTemperature, useCO2, useMethane } from "../hooks/useGlobalWarming"; // Hook personalizzati
import Card from "../components/card";
import styled from "styled-components";
import Navbar from "../components/reusables/Navbar";
import Footer from "../components/reusables/Footer";
import ChartSummary from "../components/ChartSummary";
import ChartInfo from "../components/ChartInfo";

export default function Temperature() {
  return (
    <>
      <Navbar />
      <ChartSummary dataType="temp" />
      <Card fetchData={useTemperature} label="Anomalia °C" dataType="temp" />
      <ChartInfo dataType="temp" />
      <Footer />
    </>
  );
}
