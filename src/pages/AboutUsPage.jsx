import React, { useState } from "react";
import biba from "../assets/founders/biba.png";
import dagi from "../assets/founders/dagi.png";
import million from "../assets/founders/million.png";
import { Link } from "react-router-dom";

// Helper to count words in story array
const getWordCount = (storyArr) =>
  storyArr.reduce((acc, paragraph) => acc + paragraph.split(/\s+/).length, 0);

const StoryBlock = ({ story }) => {
  const [expanded, setExpanded] = useState(false);
  const wordCount = getWordCount(story);

  // Show only first ~200 words if not expanded
  let shown = [];
  let count = 0;
  let lastLine = "";
  for (let i = 0; i < story.length; i++) {
    if (count >= 60 && !expanded) break;
    const words = story[i].split(/\s+/);
    if (!expanded && count + words.length > 60) {
      lastLine = words.slice(0, 60 - count).join(" ");
      break;
    } else {
      shown.push(story[i]);
      count += words.length;
    }
  }

  return (
    <>
      {shown.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      {!expanded && lastLine && (
        <p>
          {lastLine}
          <span className="text-gray-400">... </span>
          <button
            className="text-[#bbcb2f] underline font-semibold text-sm focus:outline-none"
            onClick={() => setExpanded(true)}
          >
            Show more
          </button>
        </p>
      )}
      {expanded &&
        story
          .slice(shown.length)
          .map((paragraph, i) => <p key={i + shown.length}>{paragraph}</p>)}
      {expanded && (
        <button
          className="mt-2 text-[#bbcb2f] underline font-semibold text-sm focus:outline-none"
          onClick={() => setExpanded(false)}
        >
          Show less
        </button>
      )}
    </>
  );
};

const founders = [
  {
    id: 1,
    name: "Million Meseret",
    title: "Founder & CEO",
    image: million,
    profile: (
      <>
        <span className="block text-[#bbcb2f] font-semibold mb-1">
          Education:
        </span>
        <span className="block text-gray-300 mb-2">
          MSc in Mechanical Systems, Software Engineering (ALX SE)
        </span>
        <span className="block text-[#bbcb2f] font-semibold mb-1">
          Experience &amp; Expertise:
        </span>
        <span className="block text-gray-300">
          Engineering, Lecturing, Tutoring, Web App Development, Event
          Organizing, Children’s Book Writing
        </span>
      </>
    ),
    story: [
      "When I was in grades 1 to 5, I was always the second smartest student in the class. There was one student I admired deeply — he was always number one. But in grade 6, I finally passed him. The same thing happened again in grades 7 to 9 — I remained the second top student, admiring another exceptionally bright classmate. Then in grade 10, I passed him too.",
      "But here’s the surprising part: I didn’t surpass these students because I became smarter than them. In fact, they were still more naturally gifted. What changed was that they got distracted — pulled into addictive habits like chat and other negative influences. When I looked back years later, I realized: it wasn’t intelligence that failed them — it was the lack of vision and purpose.",
      "What made me different was a single book I read. It told the story of an engineer — a builder, a problem solver — and that character gave me a dream. From that moment, I envisioned myself becoming an engineer and an entrepreneur. I pursued what I believed was the path: education.",
      "I graduated with a 3.7 GPA in Mechanical Engineering. But even then, I felt I lacked the mindset, the skills, and the real opportunities to create the impact I dreamed of. I became a lecturer, hoping that more education would close the gap. I completed my Master’s in Systems Design with a 3.92 GPA. Still, I had not yet become the engineer and entrepreneur I had once envisioned.",
      "Why? Because I had followed the traditional educational path blindly — assuming it would prepare me for a future it was never designed for.",
      "I remembered that back in university, I had formed a small tutoring team and personally tutored younger students. When I reflected on all these experiences, I realized that the core problems I had observed for years were still unresolved. In my view, there are three deep-rooted issues:",
      "Our educational system is inadequate and outdated — it needs support.",
      "Most parents lack the time, tools, or understanding to properly guide their children.",
      "Many students grow up without a vision, without purpose — and are lost before they even reach university or college.",
      "That’s why I founded Light It — to tackle these exact problems.",
    ],
  },
  {
    id: 2,
    name: "Yabsalat Wondason",
    title: "Co-Founder & Education Director",
    image: biba,
    profile: (
      <>
        <span className="block text-[#bbcb2f] font-semibold mb-1">
          Education:
        </span>
        <span className="block text-gray-300 mb-2">
          MBA in Developmental Studies
        </span>
        <span className="block text-[#bbcb2f] font-semibold mb-1">
          Experience &amp; Expertise:
        </span>
        <span className="block text-gray-300">
          Tutorship, Teaching, Child Psychology, Founder of NGO Service on
          Education
        </span>
      </>
    ),
    story: [
      "I have long been a dedicated tutor and currently work as a school teacher and a student psychology advisor. I have seen firsthand how today's students are underserved by outdated systems and unprepared educators.",
      "My passion for transforming education brought deep strength to our mission. With my extensive background in child psychology and developmental studies, I understand not just what students need to learn, but how they learn best.",
    ],
  },
  {
    id: 3,
    name: "Dagmawi Samuel",
    title: "Co-Founder & Technology Director",
    image: dagi,
    profile: (
      <>
        <span className="block text-[#bbcb2f] font-semibold mb-1">
          Education:
        </span>
        <span className="block text-gray-300 mb-2">
          MSc in Computer Engineering
        </span>
        <span className="block text-[#bbcb2f] font-semibold mb-1">
          Experience &amp; Expertise:
        </span>
        <span className="block text-gray-300">
          Website &amp; IT System Development, Technology Expert, Co-founder of
          YehaLabs
        </span>
      </>
    ),
    story: [
      "As a computer and electrical engineer with hands-on skills in 3D printing and advanced technologies, and as a father of two young children, I quickly realized that most children in Ethiopia — and across Africa — don't have access to meaningful digital play.",
      "My vision directly aligned with Light It. I believe technology should serve education, not distract from it. My expertise in system development and entrepreneurship brings the technical foundation needed to scale our impact.",
    ],
  },
];

const AboutUsPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
    <section className="relative py-12 pb-6">
      <div className="container mx-auto px-6 lg:max-w-4xl xl:max-w-5xl">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          About <span className="text-[#bbcb2f] drop-shadow-lg">Us</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#bbcb2f] to-[#a8b829] mx-auto mb-8 rounded-full" />

        <p className="text-lg text-gray-300 mb-6 text-center">
          We are educators, engineers, and visionaries united to transform
          education and empower the next generation.
        </p>
        {founders.map((founder, idx) => (
          <div key={founder.id} className="mb-14">
            <div className="flex flex-col items-center gap-4 mb-4">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-40 h-40 rounded-2xl border-4 border-[#bbcb2f]/30 shadow-lg shadow-[#bbcb2f]/20 object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_40px_10px_#bbcb2f] focus:scale-105 focus:shadow-[0_0_40px_10px_#bbcb2f]"
                tabIndex={0}
              />
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-1">
                  {founder.name}
                </h2>
                <p className="text-[#bbcb2f] font-semibold text-base">
                  {founder.title}
                </p>
                <div className="mt-2 text-base">{founder.profile}</div>
              </div>
            </div>
            <div className="space-y-4 text-gray-300 text-base leading-relaxed mt-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                <span>✨</span> My Story
              </h3>
              <StoryBlock story={founder.story} />
            </div>
            {/* Connective text between founders */}
            {idx < founders.length - 1 && (
              <div className="my-8 text-center text-[#bbcb2f] font-semibold">
                ✨
                <span className="mx-2">
                  The vision and passion brought us together.
                </span>
                ✨
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

    <section className="relative py-2">
      <div className="container mx-auto px-6 lg:max-w-4xl xl:max-w-5xl text-center">
        <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-xl border border-[#bbcb2f]/30 p-8">
          <div className="text-center">
            <span className="text-lg">🤝</span>
            <span className="text-sm text-gray-300">Three Founders</span>
            <span className="text-lg">🌟</span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4">
            💡 Why We Came Together?
          </h3>
          <div className=" text-gray-300 leading-relaxed mb-6">
            <p>
              Each of us had been working on different pieces of the same
              puzzle. We saw the cracks in the system. We believed in the power
              of vision, purpose, education and technology, but we also knew
              something need to be done.
            </p>
            <p className="mt-2">
              That shared sense of urgency, to give Ethiopian youth the tools,
              vision, and guidance they need, is what brought us together under
              one brand: ✨ Light It.
            </p>
            <p className="text-brand font-semibold mt-2">
              We are here to light at the destination and on the way.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contactUs">
              <button className="px-8 py-4 bg-gradient-to-r from-[#bbcb2f] to-[#a8b829] text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#bbcb2f]/30">
                Join Our Mission
              </button>
            </Link>
            <Link to="/">
              <button className="px-8 py-4 border-2 border-[#bbcb2f]/50 text-[#bbcb2f] font-semibold rounded-full hover:bg-[#bbcb2f]/10 transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutUsPage;
