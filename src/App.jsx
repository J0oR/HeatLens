import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Temperature from "./views/Temperature";
import CO2 from "./views/CO2";
import Methane from "./views/Methane";
import Home from "./views/Home";


export default function App() {

  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temperature" element={<Temperature />} />
        <Route path="/co2" element={<CO2 />} />
        <Route path="/methane" element={<Methane />} />
      </Routes>
    </Router>
  )
}
