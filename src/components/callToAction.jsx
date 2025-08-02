import React, { useState } from "react";

const CallToActionSection = () => {
  const [hoveredRole, setHoveredRole] = useState(null);

  const partnerRoles = [
    {
      id: 1,
      title: "Investors",
      icon: "💰",
      description:
        "Fund on ecosystem of services and products with a market of 30 million students, their families, educators, content creators and every body interested in this community",
      gradient: "from-yellow-500/20 to-orange-500/20",
      iconBg: "bg-yellow-500/20",
    },
    {
      id: 2,
      title: "Educators",
      icon: "👩‍🏫",
      description:
        "Share your expertise and reach millions of students through our platforms",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/20",
    },
    {
      id: 3,
      title: "Developers",
      icon: "💻",
      description:
        "Build innovative educational technology that makes a real difference, serve millions beginning at the county level, and expand to the world",
      gradient: "from-green-500/20 to-emerald-500/20",
      iconBg: "bg-green-500/20",
    },
    {
      id: 4,
      title: "Content Creators",
      icon: "🎨",
      description:
        "Create engaging educational content that inspires and empowers students, be creative and make a difference",
      benefits: ["Creative freedom", "Educational impact", "Diverse projects"],
      gradient: "from-purple-500/20 to-pink-500/20",
      iconBg: "bg-purple-500/20",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-32 w-96 h-96 bg-[#bbcb2f] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-32 w-80 h-80 bg-[#bbcb2f] rounded-full blur-3xl" />
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#bbcb2f] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-[#bbcb2f] rotate-45" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-[#bbcb2f]/20 to-[#bbcb2f]/10 text-[#bbcb2f] text-sm font-bold uppercase tracking-wider rounded-full border border-[#bbcb2f]/30 backdrop-blur-sm">
              Join Our Mission
            </span>
          </div>

          <h2 className="text-3xl md:text-2xl lg:text-4xl font-bold text-white mb-2 leading-tight">
            Work With <span className="text-[#bbcb2f] drop-shadow-lg">Us</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#bbcb2f] to-[#a8b829] mx-auto mb-8 rounded-full" />

          {/* Main Message */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-[#bbcb2f] leading-relaxed">
              "This is your time to join us."
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              We've laid the foundation. Now we're looking for passionate
              partners who share our vision of supporting the educational System
              and empowering the next generation.
            </p>
          </div>
        </div>

        {/* Partner Roles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
          {partnerRoles.map((role) => (
            <div
              key={role.id}
              className={`group relative p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 cursor-pointer ${
                hoveredRole === role.id
                  ? "bg-gradient-to-br from-black/80 to-gray-900/80 border-[#bbcb2f]/50 shadow-2xl shadow-[#bbcb2f]/20 scale-105"
                  : `bg-gradient-to-br ${role.gradient} border-gray-700/30 hover:border-[#bbcb2f]/30`
              }`}
              onMouseEnter={() => setHoveredRole(role.id)}
              onMouseLeave={() => setHoveredRole(null)}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 ${role.iconBg} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {role.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#bbcb2f] transition-colors duration-300">
                {role.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {role.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#bbcb2f]/0 group-hover:border-[#bbcb2f]/30 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-8">
          {/* Motivational Text */}
          <div className="space-y-4">
            <p className="text-lg text-[#bbcb2f] font-semibold text-center">
              Together,{" "}
              <span className="text-white">we can create visionaries</span> for
              our society and future, and{" "}
              <span className="text-white">
                empower the visionary with skill, mindset, character and
                opportunities
              </span>
              .
            </p>
          </div>

          {/* Main CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative px-12 py-6 bg-gradient-to-r from-[#bbcb2f] to-[#a8b829] text-black font-bold text-xl rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#bbcb2f]/40 hover:scale-110">
              <span className="relative z-10 flex items-center space-x-3">
                <span>Become a Partner</span>
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          </div>

          {/* Contact Information */}
          <div className="mt-12 p-8 bg-gradient-to-r from-gray-800/60 to-gray-700/60 backdrop-blur-sm rounded-2xl border border-[#bbcb2f]/20 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-white mb-4">
              Ready to join?
            </h4>
            <p className="text-gray-300 mb-6">
              Reach out to our founder and CEO today and let's discuss how we
              can work together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center space-x-2 text-[#bbcb2f]">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="font-semibold">millionmesi1@gmail.com</span>
              </div>

              <div className="hidden sm:block w-px h-6 bg-gray-600" />

              <div className="flex items-center space-x-2 text-[#bbcb2f]">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold">Schedule a Meeting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-[#bbcb2f]/10 backdrop-blur-sm rounded-full border border-[#bbcb2f]/30">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-[#bbcb2f] rounded-full border-2 border-gray-800 flex items-center justify-center text-black font-bold text-sm">
                1
              </div>
              <div className="w-8 h-8 bg-[#bbcb2f] rounded-full border-2 border-gray-800 flex items-center justify-center text-black font-bold text-sm">
                2
              </div>
              <div className="w-8 h-8 bg-[#bbcb2f] rounded-full border-2 border-gray-800 flex items-center justify-center text-black font-bold text-sm">
                3
              </div>
              <div className="w-8 h-8 bg-[#bbcb2f]/50 rounded-full border-2 border-gray-800 flex items-center justify-center text-white font-bold text-sm">
                +
              </div>
            </div>
            <span className="text-[#bbcb2f] font-semibold">
              Join Partners Already Making a Difference
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
