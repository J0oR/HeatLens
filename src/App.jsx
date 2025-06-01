import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Temperature from "./views/Temperature";
import CO2 from "./views/CO2";
import Methane from "./views/Methane";
import Home from "./views/Home";
import N2O from './views/N2O';
import PolarIce from './views/PolarIce';


export default function App() {

  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temperature" element={<Temperature />} />
        <Route path="/co2" element={<CO2 />} />
        <Route path="/methane" element={<Methane />} />
        <Route path="/n2o" element={<N2O />} />
        <Route path="/polarIce" element={<PolarIce />} />
      </Routes>
    </Router>
  )
}
