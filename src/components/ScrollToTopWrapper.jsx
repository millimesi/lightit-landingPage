// Scroll to the top when  the wrapped component or is rendered
// This component is specifically for the mentor/:id route/page

import { useEffect } from "react";

const ScrollToTopWrapper = ({ children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return children;
};

export default ScrollToTopWrapper;
