import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EasySOS } from "./components/EasySOS.jsx";
import { Empoderadas } from "./components/Empoderadas.jsx";
import { TravelCity } from "./components/TravelCity";
import { Landing } from "./components/Landing";
import { Form } from "./components/Form.jsx";
import { TermEasy } from "./components/TermEasy.jsx";
import { TermTravel } from "./components/TermTravel.jsx";
import { TermEmpower } from "./components/TermEmpower.jsx";
import { GeoAlerta } from "./components/GeoAlerta.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/easy" element={<EasySOS />} />
        <Route exact path="/travel" element={<TravelCity />} />
        <Route exact path="/empoderadas" element={<Empoderadas />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/termeasy" element={<TermEasy />} />
        <Route exact path="/termtravel" element={<TermTravel />} />
        <Route exact path="/termempower" element={<TermEmpower />} />
        <Route exact path="/geoalerta" element={<GeoAlerta />} />
      </Routes>
    </Router>
  );
}
