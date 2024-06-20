import React from "react";
import Header from "./components/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Work from "./components/Work";
import PageTransition from "./components/PageTransition";
import StairTransition from "./components/StairTransition";

const App = () => {
  return (
    <Router>
      <Header />
      <StairTransition />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </PageTransition>
    </Router>
  );
};

export default App;
