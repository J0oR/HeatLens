import React from "react";
import { useTemperature, useCO2, useMethane, useN2O, usePolarIce } from "../hooks/useGlobalWarming"; // Hook personalizzati
import Card from "../components/card";
import styled from "styled-components";
import Navbar from "../components/reusables/Navbar";
import Footer from "../components/reusables/Footer";
import ChartSummary from "../components/ChartSummary";
import ChartInfo from "../components/ChartInfo";

export default function PolarIce() {
  return (
    <>
      <Navbar />
      <ChartSummary dataType="polarIce" />
        <Card fetchData={usePolarIce} label="Polar Ice" dataType="polarIce" />
      <ChartInfo dataType="polarIce" />
      <Footer />
    </>
  );
}
