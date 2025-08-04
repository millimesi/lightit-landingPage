import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactForm from "./pages/contactUsPage";
import ScrollToTopWrapper from "./components/ScrollToTopWrapper";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/about"
            element={
              <ScrollToTopWrapper>
                <AboutUsPage />
              </ScrollToTopWrapper>
            }
          />
          <Route
            path="/contactUs"
            element={
              <ScrollToTopWrapper>
                <ContactForm />
              </ScrollToTopWrapper>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
