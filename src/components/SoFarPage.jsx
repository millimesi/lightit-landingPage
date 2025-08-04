import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Photos of mentors system and Pilot program
import mentors1 from "../assets/sofar/mentors1.PNG";
import mentors2 from "../assets/sofar/mentors2.PNG";
import mentors3 from "../assets/sofar/mentors3.PNG";
import mentors4 from "../assets/sofar/mentors4.PNG";

// Photos of Pilot Mentoring Service
import pilotMentoringService from "../assets/sofar/pilotMentoringService.jpg";

// Photos of School opening Festival Event
import img1 from "../assets/sofar/1.jpg";
import img2 from "../assets/sofar/2.jpg";
import img3 from "../assets/sofar/3.JPG";
import img4 from "../assets/sofar/4.JPG";
import img5 from "../assets/sofar/5.JPG";
import img6 from "../assets/sofar/6.JPG";
import img7 from "../assets/sofar/7.JPG";
import img8 from "../assets/sofar/8.JPG";
import img9 from "../assets/sofar/9.jpg";
import img10 from "../assets/sofar/10.jpg";
import img11 from "../assets/sofar/11.jpg";
import img12 from "../assets/sofar/12.jpg";
import img6_2 from "../assets/sofar/6_2.JPG";

// Photos of Children's special story Book
import bookPhoto1 from "../assets/sofar/bookphoto1.jpg";
import book2 from "../assets/sofar/book2.jpg";
import book3 from "../assets/sofar/book3.jpg";
import book4 from "../assets/sofar/book4.jpg";

const ProgressSection = () => {
  const [activeSliders, setActiveSliders] = useState({});

  const achievements = [
    {
      id: 1,
      title: "Light it Mentors web System",
      description:
        "We have successfully developed and launched our Mentors listing, background checking, matching and training system that connects care taker of students with trained mentors.",
      images: [mentors1, mentors2, mentors3, mentors4],
      icon: "🌱",
      stats: "List, Background check, Train and Match",
    },
    {
      id: 2,
      title: "Pilot Mentoring Service Launch",
      description:
        "Our pilot mentors service has been successfully implemented, providing trained mentors for personalized guidance to students. This service marks a significant step in our mission.",
      images: [pilotMentoringService],
      icon: "🚀",
      stats: "Successfully tested",
    },
    {
      id: 3,
      title: "School Opening Festival Event",
      description:
        "We organized and executed a successful school opening festival that brought together families, students, and educators in a celebration of learning. This community-driven event showcased our commitment to creating joyful educational experiences and building strong educational communities.",
      images: [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img6_2,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
      ],
      icon: "🎉",
      stats: "More than 18,000 people attended",
    },
    {
      id: 4,
      title: "Children's Special Story Book",
      description:
        "We have created a special story book designed specifically for children, Promoting Love, Hope, Faith, wisdom and Society  with engaging content that inspires and empowers young minds.",
      images: [bookPhoto1, book2, book3, book4],
      icon: "📚",
      stats: "3 Book Features",
    },
  ];

  const ImageSlider = ({ images, achievementId }) => (
    <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        style={{ height: "100%" }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={`${achievementId}-${idx}`}>
            <img
              src={img}
              alt={`Achievement ${achievementId} - Image ${idx + 1}`}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.src = "";
                e.target.alt = "Image failed to load";
                e.target.style.display = "none";
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Swiper navigation arrows are always visible by default */}
      <style>{`
  .swiper-button-next,
  .swiper-button-prev {
    color: #bbcb2f !important;
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
  }
  .swiper-pagination-bullet {
    background: #bbcb2f !important;
    opacity: 0.5 !important;
  }
  .swiper-pagination-bullet-active {
    background: #bbcb2f !important;
    opacity: 1 !important;
    box-shadow: 0 0 8px #bbcb2f88;
  }
`}</style>
    </div>
  );

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-80 h-80 bg-[#bbcb2f] rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-[#bbcb2f] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-gradient-to-r from-[#bbcb2f]/20 to-[#bbcb2f]/10 text-[#bbcb2f] text-sm font-bold uppercase tracking-wider rounded-full border border-[#bbcb2f]/30 backdrop-blur-sm">
              Our Progress
            </span>
          </div>

          <h2 className="text-3xl md:text-2xl lg:text-4xl font-bold text-white mb-1 leading-tight">
            What We Have{" "}
            <span className="text-[#bbcb2f] drop-shadow-lg">Done So Far</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#bbcb2f] to-[#a8b829] mx-auto mb-4 rounded-full" />

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our journey has already begun. Here are the key milestones and
            achievements that demonstrate our commitment to creating meaningful
            change.
          </p>
        </div>

        {/* Achievements List */}
        <div className="space-y-16 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={achievement.id} className="group">
              {/* Achievement Container */}
              <div className="relative p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/30 hover:border-[#bbcb2f]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#bbcb2f]/10">
                {/* Achievement Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#bbcb2f] to-[#a8b829] rounded-full flex items-center justify-center text-black font-bold text-xl shadow-lg">
                  {achievement.id}
                </div>

                {/* Content Section */}
                <div className="space-y-2">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{achievement.icon}</span>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-[#bbcb2f] transition-colors duration-300">
                          {achievement.title}
                        </h3>
                      </div>
                      <div className="inline-block px-4 py-2 bg-[#bbcb2f]/20 text-[#bbcb2f] text-sm font-semibold rounded-full border border-[#bbcb2f]/30">
                        {achievement.stats}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {achievement.description}
                  </p>

                  {/* Image Slider */}
                  <div className="mt-2">
                    <ImageSlider
                      images={achievement.images}
                      achievementId={achievement.id}
                    />
                  </div>

                  {/* Achievement Status */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2 text-[#bbcb2f]">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-semibold">Completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary */}
        <div className="text-center mt-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-6 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-2xl border border-[#bbcb2f]/30 w-full max-w-xl mx-auto">
            <div className="flex-1 text-center mb-4 md:mb-0">
              <div className="text-3xl font-bold text-[#bbcb2f]">4</div>
              <div className="text-sm text-gray-300">Major Achievements</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-600"></div>
            <div className="flex-1 text-center mb-4 md:mb-0">
              <div className="text-3xl font-bold text-[#bbcb2f]">22</div>
              <div className="text-sm text-gray-300">Documentation Photos</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-600"></div>
            <div className="flex-1 text-center">
              <div className="text-3xl font-bold text-[#bbcb2f]">100%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
