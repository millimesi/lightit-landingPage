import React, { useRef, useEffect, useState } from "react";
import img from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.jpg";
import MainLightitlogo from "../assets/MainLightitlogo.svg";

const HeroSection = () => {
  const slideRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    const items = slideRef.current.querySelectorAll(".item");
    if (items.length > 0) {
      setIsTransitioning(true);
      slideRef.current.appendChild(items[0]);
      setCurrentSlide((prev) => (prev + 1) % 5);
      setTimeout(() => setIsTransitioning(false), 1000);
    }
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 9000);
    return () => clearInterval(interval);
  }, [isPaused, currentSlide]);

  // Add ref for ProblemSection scroll
  const handleLearnMoreClick = () => {
    const el = document.getElementById("problem-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Slide data
  const slides = [
    {
      badge: "TRANSFORM YOUR POTENTIAL",
      title: (
        <>
          <span className="text-[#bbcb2f] drop-shadow-lg">Light the mind</span>
          <br />
          <span className="text-white/90">to initiate the</span>
          <br />
          <span className="bg-gradient-to-r from-white to-[#bbcb2f] bg-clip-text text-transparent">
            inner potential
          </span>
        </>
      ),
      description:
        "Discover true capabilities and unlock the given power within!",
      image: img,
      overlay: "bg-gradient-to-r from-black/60 via-transparent to-black/30",
      badgeColor: "bg-[#bbcb2f]/20 text-[#bbcb2f] border-[#bbcb2f]/30",
      position: "left",
      extra: (
        <>
          <div className="absolute top-20 right-20 w-32 h-32 border border-[#bbcb2f]/30 rounded-full animate-pulse-slow" />
          <div className="absolute bottom-32 right-40 w-16 h-16 bg-[#bbcb2f]/20 rounded-full animate-float" />
          <div className="absolute top-32 left-20 w-24 h-24 border-2 border-[#bbcb2f]/40 rotate-45 animate-spin-slow" />
          <div className="absolute bottom-40 left-32 w-20 h-20 bg-gradient-to-br from-[#bbcb2f]/30 to-transparent rounded-full animate-pulse-slow" />
          <div className="absolute top-1/4 right-1/4 w-40 h-40 border border-[#bbcb2f]/20 rounded-full animate-pulse-slow" />
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-[#bbcb2f]/30 rotate-45 animate-bounce-slow" />
        </>
      ),
      cta: [{ text: "Learn More", gradient: false }],
      backgroundSize: "100% 150%",
      backgroundPosition: "50% 70%",
    },
    {
      badge: "BREAK LIMITS",
      title: (
        <>
          <span className="text-white/90">Show beyond the</span>
          <br />
          <span className="text-[#bbcb2f] drop-shadow-lg">limitation</span>
          <br />
          <span className="bg-gradient-to-r from-[#bbcb2f] to-white bg-clip-text text-transparent">
            through the Light of Vision
          </span>
        </>
      ),
      description: "Break barriers with clear vision and purposeful action!",
      image: img2,
      overlay: "bg-gradient-to-l from-black/60 via-transparent to-black/30",
      badgeColor: "bg-[#bbcb2f]/20 text-[#bbcb2f] border-[#bbcb2f]/30",
      position: "left",
      extra: (
        <>
          <div className="absolute top-20 right-20 w-32 h-32 border border-[#bbcb2f]/30 rounded-full animate-pulse-slow" />
          <div className="absolute bottom-32 right-40 w-16 h-16 bg-[#bbcb2f]/20 rounded-full animate-float" />
          <div className="absolute top-32 left-20 w-24 h-24 border-2 border-[#bbcb2f]/40 rotate-45 animate-spin-slow" />
          <div className="absolute bottom-40 left-32 w-20 h-20 bg-gradient-to-br from-[#bbcb2f]/30 to-transparent rounded-full animate-pulse-slow" />
          <div className="absolute top-1/4 right-1/4 w-40 h-40 border border-[#bbcb2f]/20 rounded-full animate-pulse-slow" />
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-[#bbcb2f]/30 rotate-45 animate-bounce-slow" />
        </>
      ),
      cta: [{ text: "Learn More", gradient: false }],
      backgroundSize: "100% 110%",
      backgroundPosition: "50% 0%",
    },
    {
      badge: "HOLISTIC EMPOWERMENT",
      title: (
        <>
          <span className="text-[#bbcb2f] drop-shadow-lg">
            Light Holistic Empowerment
          </span>
          <br />
          <span className="bg-gradient-to-r from-white to-[#bbcb2f] bg-clip-text text-transparent">
            Skill, Mindset and Character
          </span>
        </>
      ),
      description:
        "Illuminate capabilities for the extraordinary achievements!",
      image: img3,
      overlay: "bg-gradient-to-t from-black/70 via-transparent to-black/30",
      badgeColor: "bg-[#bbcb2f]/20 text-[#bbcb2f] border-[#bbcb2f]/30",
      position: "left",
      extra: (
        <>
          <div className="absolute top-20 right-20 w-32 h-32 border border-[#bbcb2f]/30 rounded-full animate-pulse-slow" />
          <div className="absolute bottom-32 right-40 w-16 h-16 bg-[#bbcb2f]/20 rounded-full animate-float" />
          <div className="absolute top-32 left-20 w-24 h-24 border-2 border-[#bbcb2f]/40 rotate-45 animate-spin-slow" />
          <div className="absolute bottom-40 left-32 w-20 h-20 bg-gradient-to-br from-[#bbcb2f]/30 to-transparent rounded-full animate-pulse-slow" />
          <div className="absolute top-1/4 right-1/4 w-40 h-40 border border-[#bbcb2f]/20 rounded-full animate-pulse-slow" />
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-[#bbcb2f]/30 rotate-45 animate-bounce-slow" />
        </>
      ),
      cta: [{ text: "Learn More", gradient: false }],
      backgroundSize: "100% 150%",
      backgroundPosition: "50% 20%",
    },
    {
      badge: "SEIZE OPPORTUNITIES",
      title: (
        <>
          <span className="text-[#bbcb2f] drop-shadow-lg">Light the Path</span>
          <br />
          <span className="bg-gradient-to-r from-white to-[#bbcb2f] bg-clip-text text-transparent">
            with Opportunity
          </span>
        </>
      ),
      description:
        "Bring the opportunity for the prepared visionaries to shine!",
      image: img4,
      overlay: "bg-gradient-to-t from-black/70 via-transparent to-black/30",
      badgeColor: "bg-[#bbcb2f]/20 text-[#bbcb2f] border-[#bbcb2f]/30",
      position: "left",
      extra: (
        <>
          <div className="absolute top-20 right-20 w-32 h-32 border border-[#bbcb2f]/30 rounded-full animate-pulse-slow" />
          <div className="absolute bottom-32 right-40 w-16 h-16 bg-[#bbcb2f]/20 rounded-full animate-float" />
          <div className="absolute top-32 left-20 w-24 h-24 border-2 border-[#bbcb2f]/40 rotate-45 animate-spin-slow" />
          <div className="absolute bottom-40 left-32 w-20 h-20 bg-gradient-to-br from-[#bbcb2f]/30 to-transparent rounded-full animate-pulse-slow" />
          <div className="absolute top-1/4 right-1/4 w-40 h-40 border border-[#bbcb2f]/20 rounded-full animate-pulse-slow" />
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-[#bbcb2f]/30 rotate-45 animate-bounce-slow" />
        </>
      ),
      cta: [{ text: "Learn More", gradient: false }],
      backgroundSize: "100% 150%",
      backgroundPosition: "50% 12%",
    },
    {
      badge: "",
      title: (
        <>
          <span
            style={{
              display: "inline-block",
              borderRadius: "2rem",
              padding: "0.5rem 2.5rem",
              boxShadow: "0 4px 24px 0 #fff",
            }}
            className="mb-2"
          >
            <img
              src={MainLightitlogo}
              alt="Lightit Logo"
              className="h-16 w-auto align-middle drop-shadow-lg"
              style={{
                maxWidth: "180px",
                verticalAlign: "middle",
                filter: "drop-shadow(0 2px 8px #fff)",
              }}
            />
          </span>
          <br />
          <span className="text-[#bbcb2f] drop-shadow-lg">
            Visionary for the Society
          </span>
          <br />
          <span className="bg-gradient-to-r from-white to-[#bbcb2f] bg-clip-text text-transparent">
            Skill, Mindset, Character, and Opportunity for the Visionary
          </span>
        </>
      ),
      description:
        "Shape the future of the society with truly Capable Visionaries!",
      image: img5,
      overlay: "bg-gradient-to-t from-black/70 via-transparent to-black/30",
      badgeColor: "bg-[#bbcb2f]/20 text-[#bbcb2f] border-[#bbcb2f]/30",
      position: "center",
      extra: (
        <>
          <div className="absolute top-20 right-20 w-32 h-32 border border-[#bbcb2f]/30 rounded-full animate-pulse-slow" />
          <div className="absolute bottom-32 right-40 w-16 h-16 bg-[#bbcb2f]/20 rounded-full animate-float" />
          <div className="absolute top-32 left-20 w-24 h-24 border-2 border-[#bbcb2f]/40 rotate-45 animate-spin-slow" />
          <div className="absolute bottom-40 left-32 w-20 h-20 bg-gradient-to-br from-[#bbcb2f]/30 to-transparent rounded-full animate-pulse-slow" />
          <div className="absolute top-1/4 right-1/4 w-40 h-40 border border-[#bbcb2f]/20 rounded-full animate-pulse-slow" />
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-[#bbcb2f]/30 rotate-45 animate-bounce-slow" />
        </>
      ),
      cta: [{ text: "Learn More", gradient: false }],
      backgroundSize: "100% 150%",
      backgroundPosition: "50% 70%",
    },
  ];

  return (
    <div
      className="relative w-full overflow-hidden"
      onClick={(e) => {
        if (!e.target.closest("button") || !e.target.closest(".cta-btn")) {
          setIsPaused((prev) => !prev);
        }
      }}
    >
      {/* Navigation Dots & Controls */}
      <div className="absolute bottom-4 right-4 z-30 flex flex-col items-end space-y-2 sm:bottom-8 sm:right-8">
        <div className="flex flex-col items-center space-y-2 sm:space-y-3">
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Prev Button */}
            <button
              className="p-1 sm:p-2 rounded-full bg-[#bbcb2f]/80 hover:bg-[#bbcb2f] shadow-lg transition-all duration-300 flex items-center justify-center"
              style={{ width: "32px", height: "32px" }}
              onClick={(e) => {
                e.stopPropagation();
                setIsPaused(true);
                setCurrentSlide(
                  (prev) => (prev - 1 + slides.length) % slides.length
                );
              }}
              aria-label="Previous Slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill="#bbcb2f" />
                <polygon points="14,8 8,12 14,16" fill="#fff" />
              </svg>
            </button>
            {/* Pause/Play Button */}
            <button
              className="p-1 sm:p-2 rounded-full bg-[#bbcb2f]/80 hover:bg-[#bbcb2f] shadow-lg transition-all duration-300 flex items-center justify-center"
              style={{ width: "32px", height: "32px" }}
              onClick={(e) => {
                e.stopPropagation();
                setIsPaused((prev) => !prev);
              }}
              aria-label={isPaused ? "Resume slider" : "Pause slider"}
            >
              {isPaused ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" fill="#bbcb2f" />
                  <polygon points="10,8 16,12 10,16" fill="#fff" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" fill="#bbcb2f" />
                  <rect x="8" y="8" width="2.5" height="8" rx="1" fill="#fff" />
                  <rect
                    x="13.5"
                    y="8"
                    width="2.5"
                    height="8"
                    rx="1"
                    fill="#fff"
                  />
                </svg>
              )}
            </button>
            {/* Next Button */}
            <button
              className="p-1 sm:p-2 rounded-full bg-[#bbcb2f]/80 hover:bg-[#bbcb2f] shadow-lg transition-all duration-300 flex items-center justify-center"
              style={{ width: "32px", height: "32px" }}
              onClick={(e) => {
                e.stopPropagation();
                setIsPaused(true);
                setCurrentSlide((prev) => (prev + 1) % slides.length);
              }}
              aria-label="Next Slide"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill="#bbcb2f" />
                <polygon points="10,8 16,12 10,16" fill="#fff" />
              </svg>
            </button>
          </div>
          <div className="flex space-x-2 sm:space-x-3 mt-1 sm:mt-2 justify-center">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "bg-[#bbcb2f] shadow-lg shadow-[#bbcb2f]/50 scale-125"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-30">
        <div
          className="h-full bg-gradient-to-r from-[#bbcb2f] to-[#a8b829] transition-all duration-[8000ms] ease-linear"
          style={{ width: isTransitioning ? "0%" : "100%" }}
        />
      </div>

      <div
        ref={slideRef}
        className="relative w-screen h-[60vh] sm:h-[95vh] overflow-hidden bg-[#bbcb2f]"
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`item absolute w-full h-full top-0 left-0 bg-no-repeat animate-fadeIn`}
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(187,203,47,0.2) 100%), url(${slide.image})`,
              backgroundSize: slide.backgroundSize,
              backgroundPosition: slide.backgroundPosition,
              zIndex: 0,
              display: idx === currentSlide ? "block" : "none",
            }}
          >
            {/* Overlay */}
            <div className={`absolute inset-0 ${slide.overlay}`} />
            {/* Extra floating elements */}
            {slide.extra}
            {/* Slide Content */}
            <div
              className={`absolute ${
                slide.position === "left"
                  ? "top-[calc(15%+2rem)] left-[4%] w-[90vw] max-w-[420px] sm:top-[calc(20%+5rem)] sm:left-[8%] sm:w-[45%] sm:max-w-none text-left"
                  : slide.position === "right"
                  ? "top-[calc(15%+2rem)] right-[4%] w-[90vw] max-w-[420px] sm:top-[calc(20%+5rem)] sm:right-[8%] sm:w-[45%] sm:max-w-none text-right"
                  : "bottom-[8%] left-1/2 -translate-x-1/2 w-[95vw] max-w-[480px] sm:bottom-[10%] sm:w-[60%] sm:max-w-none text-center"
              } text-white p-3 sm:p-6 bg-black/5 rounded-lg shadow-lg z-10`}
            >
              <div className="mb-2 sm:mb-3">
                {slide.badge ? (
                  <span
                    className={`inline-block px-2 py-1 sm:px-3 sm:py-1 ${slide.badgeColor} text-xs font-semibold rounded-full border animate-slideIn`}
                  >
                    {slide?.badge}
                  </span>
                ) : null}
              </div>
              <h1 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight mb-2 sm:mb-4 animate-slideIn delay-200">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-6 leading-relaxed animate-slideIn delay-300">
                {slide.description}
              </p>
              {/* Hide Learn More on small screens */}
              <div
                className={`${
                  slide.position === "right"
                    ? "justify-end"
                    : slide.position === "center"
                    ? "justify-center"
                    : ""
                } animate-slideIn delay-400`}
              >
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  {slide.cta.map(
                    (btn, bidx) =>
                      btn.text === "Learn More" && (
                        <button
                          key={bidx}
                          className="cta-btn px-4 py-2 sm:px-6 sm:py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-[#bbcb2f] transition-all duration-300 text-xs sm:text-sm w-auto min-w-0 hidden xs:hidden sm:inline-block"
                          style={{ width: "auto", minWidth: 0 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLearnMoreClick();
                          }}
                        >
                          {btn.text}
                        </button>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .cta-btn { display: none !important; }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0) rotate(45deg);
          }
          50% {
            transform: translateY(-10px) rotate(45deg);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 2s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
