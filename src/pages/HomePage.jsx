import React from "react";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import ProgressSection from "../components/SoFarPage";
import CallToActionSection from "../components/callToAction";

const HomePage = () => {
  return (
    <div>
      {/* Remove NavBar here if using MainLayout */}
      <HeroSection />
      <div id="problem-section">
        <ProblemSection />
      </div>
      <SolutionSection />
      <ProgressSection />
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
