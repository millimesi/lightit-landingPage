import React, { useState, useEffect } from "react";
import mentors from "../assets/mentors.webp";
import challengers from "../assets/challenger.webp";
import events from "../assets/events.webp";
import contents from "../assets/contents.webp";
import MainLightitlogo from "../assets/MainLightitlogo.svg";

const SolutionSection = () => {
  const [activeService, setActiveService] = useState(null);

  // 1. Preload images on mount
  useEffect(() => {
    [mentors, challengers, events, contents].forEach((src) => {
      const image = new window.Image();
      image.src = src;
    });
  }, []);

  const services = [
    {
      id: 1,
      title: "Light it Mentors",
      subtitle: "Personalized Mentorship Platform",
      image: mentors,
      description:
        "A platform of well-trained, holistic mentors dedicated to help students:",
      features: [
        "Discover and use their potential",
        "Build character and clarity",
        "Stay purposeful, inspired, and supported",
      ],
      highlight:
        "This service bridges the gap between student needs and personalized human guidance.",
    },
    {
      id: 2,
      title: "Light it Contents",
      subtitle: "Empowering and Entertaining Digital Content",
      image: contents,
      description:
        "Light it provides rich, age-relevant digital content designed to empower, engage and close educational quality difference gap across schools. Our contents includes:",
      features: [
        "Local Curriculum-based lessons and Science experiment videos",
        "Textbook and exam archives",
        "Special Story Books, videos, animations and interactive contents",
        "Educational games (both digital and physical)",
        "and more resources based on student needs",
      ],
      highlight:
        "This content is designed to make learning accessible, fun, and inspiring for every student.",
    },
    {
      id: 3,
      title: "Light it Events",
      subtitle: "Community-Driven Learning Experiences",
      image: events,
      description:
        "We organize interactive events, both physical and digital, that bring families, students, and educators together. Examples include:",
      features: [
        "School-opening festivals, award ceremonies and more",
        "Family workshops, summer programs, and hackathons",
        "Trainings, seminars, and creative competitions",
      ],
      highlight:
        "These events nurture a culture of growth, support, and joy in education.",
    },

    {
      id: 4,
      title: "The Challenger",
      subtitle: "Student Media Platform",
      image: challengers,
      description:
        "A digital social media-like platform built for students, by intention. Challenger delivers engaging academic and non-academic challenges that are tailored to help students:",
      features: [
        "Get entertained and engaged while empowered and educated",
        "Discover their talents and interests",
        "Activate their inner potential",
      ],
      highlight:
        "Through structured challenges, students develop skills, character, and mindset. It helps them look inward, unlock their potential, and move toward a purpose-driven life.",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-slideUp { animation: slideUp 0.6s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.5s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>

      <section className="relative py-5 bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 right-20 w-80 h-80 bg-[#bbcb2f] rounded-full blur-3xl" />
          <div className="absolute bottom-32 left-20 w-96 h-96 bg-[#bbcb2f] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6 animate-scaleIn">
              <span className="px-6 py-3 bg-gradient-to-r from-[#bbcb2f]/20 to-[#bbcb2f]/10 text-[#bbcb2f] text-sm font-bold uppercase tracking-wider rounded-full border border-[#bbcb2f]/30 backdrop-blur-sm">
                🟢 Our Solutions
              </span>
            </div>

            <h2 className="text-3xl md:text-2xl lg:text-4xl font-bold text-white mb-1 leading-tight animate-slideUp delay-200 flex items-center justify-center gap-3">
              <span>
                <img
                  src={MainLightitlogo}
                  alt="Lightit Logo"
                  className="h-24 w-auto align-middle drop-shadow-lg"
                  style={{
                    maxWidth: "180px",
                    verticalAlign: "middle",
                    filter: "drop-shadow(4px 4px 5px #fff)",
                  }}
                />
              </span>
              <span className="pt-5">Ecosystem</span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-[#bbcb2f] to-[#a8b829] mx-auto mb-6 rounded-full animate-scaleIn delay-300" />

            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 animate-fadeIn delay-400">
              Light it builds a{" "}
              <span className="text-brand">comprehensive and interrelated</span>{" "}
              ecosystem of services and products for kg-12 grade Students. We
              create a {""} <span className="text-brand">community</span> of
              Students , Teachers, Mentors, Families, Schools, NGOs and public
              institutions focused on the growth and development of the next
              generation.
            </p>

            <div className="inline-block px-8 py-4 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-full border border-[#bbcb2f]/30 animate-fadeIn delay-500">
              <span className="text-[#bbcb2f] font-bold text-lg">
                The Four Core Services of Light it
              </span>
            </div>
          </div>

          {/* Services Grid */}
          <div className="space-y-12 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group animate-slideUp"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Service Container */}
                <div
                  className={`relative grid lg:grid-cols-2 gap-8 items-center p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${
                    activeService === service.id
                      ? "bg-gradient-to-br from-black/80 to-gray-900/80 border-[#bbcb2f]/50 shadow-xl shadow-[#bbcb2f]/10"
                      : "bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/30 hover:border-[#bbcb2f]/30"
                  }`}
                >
                  {/* Service Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#bbcb2f] to-[#a8b829] rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg">
                    {service.id}
                  </div>

                  {/* Image Section - 2. Lazy load only visible image, 3. Larger on small screens */}
                  <div className="relative flex items-center justify-center">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-92 lg:h-92 rounded-xl shadow-lg group-hover:shadow-[#bbcb2f]/20 transition-all duration-300 bg-white">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading={
                          activeService === service.id ||
                          window.innerWidth < 640
                            ? "eager"
                            : "lazy"
                        }
                        className="w-full h-full object-contain rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                        style={{
                          minWidth: "8rem",
                          minHeight: "8rem",
                          maxWidth: "100%",
                          maxHeight: "100%",
                        }}
                        onError={(e) => {
                          e.target.src = "";
                          e.target.alt = "Image failed to load";
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-5">
                    {/* Title and Subtitle */}
                    <div className="space-y-2">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-[#bbcb2f] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-[#bbcb2f] opacity-90">
                        {service.subtitle}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#bbcb2f] rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Highlight Box */}
                    <div className="p-4 bg-[#bbcb2f]/10 rounded-lg border border-[#bbcb2f]/20">
                      <p className="text-[#bbcb2f] font-medium text-sm leading-relaxed">
                        {service.highlight}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <a
                        href="https://lightit.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-[#bbcb2f] to-[#a8b829] text-black font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#bbcb2f]/30 hover:scale-105 inline-block text-center"
                      >
                        Visit {service.title}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionSection;
