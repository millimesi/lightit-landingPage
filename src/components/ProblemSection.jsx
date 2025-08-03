import React, { useState } from "react";

const ProblemSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const problems = [
    {
      id: 1,
      title: "Outdated, Inadequate, and Uneven Educational trend",
      description: "The current educational practice:",
      details: [
        "Fails to prepare students for dynamically changing real-world demands and to nurture the skills, mindset, character, and opportunities they need to succeed.",
        "Students are less stimulated, less engaged, and easily distracted",
        "Quality of education is uneven throughout the country",
      ],
      end: "The system needs support",
      icon: "📚",
      gradient: "from-brand/20 to-orange-300/20",
      borderColor: "border-brand/30",
      accentColor: "text-red-400",
    },
    {
      id: 2,
      title: "Parental Guidance Challenges",
      description: "Many parents either:",
      details: [
        "Lack the time ",
        "Or do not have the methods or experience to guide their children find their path to vision and path to achieve it",
      ],
      icon: "👨‍👩‍👧‍👦",
      gradient: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
      accentColor: "text-blue-400",
      end: "Parents need professional assistance",
    },
    {
      id: 3,
      title: "Students Without Clear Vision",
      description:
        "Many students are lost and  disconnected from their potential, Because they:",
      details: [
        "Lack of clear vision  and purpose for their life",
        "If they have a vision, they do not know how to achieve it",
        "Moreover they find the educational practice boring, but are also surrounded by multifaceted distractions: from social media, digital gambling, and addictive substances ",
      ],
      end: "Students need their own empowering and engaging platforms",
      icon: "🎯",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      accentColor: "text-purple-400",
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(187, 203, 47, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(187, 203, 47, 0.4);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
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
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>

      <section className="relative py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#bbcb2f] rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-[#bbcb2f] rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          />
        </div>

        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#bbcb2f] rotate-45 animate-spin-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-[#bbcb2f] rotate-12 animate-pulse" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 animate-scaleIn">
              <span className="px-6 py-3 bg-gradient-to-r from-[#bbcb2f]/20 to-[#bbcb2f]/10 text-[#bbcb2f] text-sm font-bold uppercase tracking-wider rounded-full border border-[#bbcb2f]/30 backdrop-blur-sm">
                Current Challenges
              </span>
            </div>

            <h2 className="text-3xl md:text-2xl lg:text-4xl font-bold text-white mb-2 leading-tight animate-slideUp delay-200">
              The{" "}
              <span className="text-[#bbcb2f] drop-shadow-lg">Problems</span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-[#bbcb2f] to-[#a8b829] mx-auto mb-3 rounded-full animate-scaleIn delay-300" />

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeIn delay-400">
              Understanding the challenges for meaningful solutions.
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {problems.map((problem, index) => (
              <div
                key={problem.id}
                className="group relative animate-slideUp"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
                onMouseEnter={() => setActiveCard(problem.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card Container */}
                <div
                  className={`relative h-full p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 ${
                    activeCard === problem.id
                      ? "bg-gradient-to-br from-black/80 to-gray-900/80 border-[#bbcb2f]/50 shadow-2xl shadow-[#bbcb2f]/20"
                      : `bg-gradient-to-br ${problem.gradient} border-gray-700/50 hover:border-[#bbcb2f]/30`
                  }`}
                >
                  {/* Problem Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#bbcb2f] to-[#a8b829] rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg animate-pulse-glow">
                    {problem.id}
                  </div>

                  {/* Icon */}
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {problem.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#bbcb2f] transition-colors duration-300">
                      {problem.title}
                    </h3>

                    <h4
                      className={`text-lg font-semibold ${problem.accentColor} opacity-90`}
                    >
                      {problem.subtitle}
                    </h4>

                    <p className="text-gray-300 leading-relaxed text-base">
                      {problem.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-3 pt-4">
                      {problem.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#bbcb2f] rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Call to Action */}
                    <div className="pt-6">
                      <div
                        className={`inline-flex items-center space-x-2 text-[#bbcb2f] font-semibold group-hover:text-white transition-colors duration-300 cursor-pointer`}
                      >
                        <span className="text-sm uppercase tracking-wider">
                          {problem.end}
                        </span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#bbcb2f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fadeIn delay-600">
            <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-full border border-gray-600/50">
              <span className="text-gray-300 font-medium">
                These challenges demand innovative solutions
              </span>
              <div className="w-3 h-3 bg-[#bbcb2f] rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSection;
