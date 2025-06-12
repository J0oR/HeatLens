import { useParams } from "react-router-dom";
import { useCO2, useMethane, useTemperature, useN2O, usePolarIce } from "../hooks/useGlobalWarming";
import Card from "../components/chartPage/card";
import Navbar from "../components/reusables/Navbar";
import Footer from "../components/reusables/Footer";
import ChartSummary from "../components/chartPage/ChartSummary";
import ChartInfo from "../components/chartPage/ChartInfo";

const hookMap = {
  temp: useTemperature,
  co2: useCO2,
  meth: useMethane,
  n2o: useN2O,
  polarIce: usePolarIce
};

export default function ChartPage() {
  const { dataType } = useParams();
  const fetchData = hookMap[dataType];

  if (!fetchData) return <div>Unknown data type: {dataType}</div>;

  return (
    <>
      <Navbar />
      <ChartSummary dataType={dataType} />
      <Card fetchData={fetchData} dataType={dataType} />
      <ChartInfo dataType={dataType} />
      <Footer />
    </>
  );
}
