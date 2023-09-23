import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Carrer from "./pages/Carrer";
import SingleGame from "./pages/SingleGame";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Carrer />} />
        <Route path="/single-game/:id" element={<SingleGame/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
