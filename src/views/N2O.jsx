import React from "react";
import { useTemperature, useCO2, useN2O } from "../hooks/useGlobalWarming"; // Hook personalizzati
import Card from "../components/card";
import styled from "styled-components";
import Navbar from "../components/reusables/Navbar";
import Footer from "../components/reusables/Footer";
import ChartSummary from "../components/ChartSummary";
import ChartInfo from "../components/ChartInfo";

export default function N2O() {
  return (
    <>
      <Navbar />
      <ChartSummary dataType="n2o" />
        <Card fetchData={useN2O} label="Anomalia N2O" dataType="n2o" />
      <ChartInfo dataType="n2o" />
      <Footer />
    </>
  );
}

