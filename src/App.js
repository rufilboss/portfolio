import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import ResearchTimeline from "./components/Research/ResearchTimeline";
import ProjectShowcase from "./components/Projects/ProjectShowcase";
import PublicationGallery from "./components/Publications/PublicationGallery";
import AcademicJourney from "./components/Academic/AcademicJourney";
import NetworkShowcase from "./components/Network/NetworkShowcase";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ResearchTimeline />
              <ProjectShowcase />
              <PublicationGallery />
              <AcademicJourney />
              <NetworkShowcase />
              <Contact />
            </>
          } />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
