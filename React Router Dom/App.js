// npm install react-router-dom


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Home from "./Home";
import About from "./About";
import Services from "./Services";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}
