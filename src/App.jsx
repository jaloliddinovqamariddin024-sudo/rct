import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Obrende from "./pages/obrende/obrende";
import Preimushestvos from "./pages/preimushestvo/preimushestvo";
import Otcriritiklub from "./pages/otkritklub/otkritklub";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/obrende" element={<Obrende />} />
        <Route path="/preimushestvos"element={<Preimushestvos/>} />
        <Route path="/otkriritiklub"element={<Otcriritiklub/>}/>
        <Route path="/contact"element={<Contact/>}/>
      </Route>
    </Routes>
  );
}

export default App