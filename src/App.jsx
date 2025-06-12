import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import ChartPage from './views/ChartPage';


export default function App() {

  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/:dataType" element={<ChartPage />} />
      </Routes>
    </Router>
  )
}
