import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Obrende from "./pages/obrende/obrende";
import Preimushestvo from "./pages/preimushestvo/preimushestvo";
import Otkritklub from "./pages/otkritklub/otkritklub";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="obrende" element={<Obrende />} />
        <Route path="preimushestvo" element={<Preimushestvo />} />
        <Route path="otkritklub" element={<Otkritklub />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
