import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import ProgressSection from "./components/SoFarPage";
import CallToActionSection from "./components/callToAction";

const App = () => {
  return (
    <>
      <div className="relative">
        <NavBar />
        <HeroSection />
      </div>
      <ProblemSection />
      <SolutionSection />
      <ProgressSection />
      <CallToActionSection />
      {/* ...other sections... */}
    </>
  );
};

export default App;
