


"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajendra Parida",
    title: "Sr.Manager - DP | Mindforce Research",
    image: "/images/client/Rajendra.png",
    testimony:
      "I have known Technovatic Solutions for over a decade, and their dedication, expertise, and professionalism are truly remarkable. Their deep knowledge in the domain is the icing on the cake— they have an extraordinary ability to make the impossible possible. I am always confident and happy to take their services, knowing that they consistently deliver exceptional results with precision and efficiency.",
  },
  {
    name: "Kaustubh Bahuguna",
    title: "Corporate Brand Strategy | RedFM",
    image: "/images/client/Kaustubh.png",
    testimony: `I've had the pleasure of working with Technovatic Solutions on a range of web products, from the engaging Quiz India Movement and the spirited College Ke Tashanbaaz to the dynamic Riders Music Festival. Their team not only brings amazing ideas to the table but also demonstrates unmatched expertise in solving any product requirement, no matter how complex. Technovatic Solutions is more than just a developer-they're a creative and technical partner who ensures every project stands out. Highly recommended for anyone looking for excellence and innovation!`,
  },
  {
    name: "Nalini Kher",
    title: "Red FM",
    image: "/images/client/Nalini-Kher.jpeg",
    testimony: `Thank you, Team Technovatic Solutions! Each one of you has been a guiding light in building a better ecosystem and dynamics for website development, server maintenance, and UI/UX journeys with every project's progress.
    We have worked on many milestones together, including Quiz India Movement, Bhangra Premier League, South Side Story, College Ke Tashanbaaz, and many more!

    Team Technovatic Solutions, you have been the strongest pillar and a constant support for Red FM. Thank you, Team.

    High Spirits!
    Bajaate Raho…!`,
  },
  {
    name: "Qamar Waheed Naqvi",
    title: "Director | Satya Hindi",
    image: "/images/client/qw-naqvi-2.jpg",
    testimony: `Working with Technovatic Solutions is an absolute pleasure. Impressed with their team's attention to details, technical skills, and professional approach towards our timelines & processes. We highly recommend working with them.`,
  },
  {
    name: "Virendra Shekhawat",
    title: "Founder | Delhi Photography Club",
    image: "/images/client/vr.jpg",
    testimony: `I've known the team at Technovatic Solutions for several years now, and we started with business collaboration. Over time, we've become close partners. The team is my go-to when it comes to technology, and they're one of the very few groups I can trust to handle any tech task. I can confidently assign them any project, knowing it will be executed flawlessly, without disrupting our existing setup.

    Their expertise in cutting-edge tech solutions has consistently impressed me. As the founder of Delhi Photography Club and a former Senior Product Manager for big brands like Amar Ujala, I've worked with many teams, but the professionalism and intelligence of Technovatic Solutions stand out.`,
  },
  {
    name: "Abhijit Das ",
    title: "Founder & CEO | Narrativ.Design",
    image: "/images/client/abhijit.png",
    testimony:
      "Seasoned and trustworthy team for building technology applications with a human touch. Our most valued partner for co:creating customized martech roadmaps for our clients across markets.",
  },
  {
    name: "Yashdeep Bali",
    title: "Chief Digital Officer, And And Brand Partners",
    image: "/images/client/yashdeep.jpeg",
    testimony:
      "Technovatic Solutions, highly professional web/app design and development company. Their team is very helpful in explaining the logic adopted for the development & ready to go that extra mile to bring out wonderful results. They are strategic & an engaged technology partner for us. Strongly recommended !",
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState(Array(testimonials.length).fill(false));
  const [needsReadMore, setNeedsReadMore] = useState(Array(testimonials.length).fill(false));
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState<any>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    textRefs.current.forEach((ref, index) => {
      if (ref) {
        const lineHeight = parseFloat(window.getComputedStyle(ref).lineHeight);
        const maxHeight = lineHeight * 5;
        if (ref.scrollHeight > maxHeight) {
          setNeedsReadMore((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      }
    });
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("overflow-hidden");
      swiperRef.current?.autoplay?.stop();
    } else {
      document.body.classList.remove("overflow-hidden");
      swiperRef.current?.autoplay?.start();
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [modalOpen]);

  const handleReadMore = (index: number) => {
    setActiveTestimonial(testimonials[index]);
    setModalOpen(true);
  };

  return (
    <div className="container pt-10 md:pt-28 pb-10 lg:px-8 font-dmSans">
      <h2 className="text-4xl font-bold mb-4  text-[#2D3958] text-center">
        PROJECTS
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        loop={true}
        speed={2800}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 1.2 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="flex justify-center relative my-11">
            <div className="relative flex flex-col items-center w-full">
              <div className="testimonial-card relative rounded-[20px] md:rounded-[40px] border-2 border-gray-100 p-4 md:p-8 min-h-[320px] w-full max-w-full hover:shadow-xl transition-all duration-300 ease-in-out">
                <div className="absolute top-6 right-5 text-gray-300">
                  <Quote size={32} />
                </div>

                <div className="flex items-center space-x-4">
                  <div className="rounded-full w-20 h-20 flex-shrink-0">
                    <Image
                      className="rounded-full object-cover"
                      src={testimonial.image}
                      alt={`Avatar of ${testimonial.name}`}
                      width={80}
                      height={80}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>

                <div
                  ref={(el:any) => (textRefs.current[index] = el)}
                  className={`mt-4 text-md text-gray-500 transition-all overflow-hidden ${
                    expanded[index] ? "max-h-[1000px]" : "line-clamp-5"
                  }`}
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: expanded[index] ? "unset" : 5,
                    overflow: "hidden",
                  }}
                >
                  <p dangerouslySetInnerHTML={{ __html: testimonial.testimony }} />
                </div>

                {needsReadMore[index] && (
                  <button
                    className="mt-3 text-[#6785ff] focus:outline-none"
                    onClick={() => handleReadMore(index)}
                  >
                    More...
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {modalOpen && activeTestimonial && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300 ease-in-out">
          <div className="bg-white max-w-2xl w-full rounded-2xl p-6 relative shadow-2xl max-h-[90vh] overflow-y-auto animate-fadeIn">
            <button
              className="absolute top-2 right-3 text-gray-400 hover:text-black text-2xl font-bold transition-colors"
              onClick={() => setModalOpen(false)}
              aria-label="Close Modal"
            >
              ×
            </button>

            <div className="flex items-center space-x-4 mb-4">
              <div className="rounded-full w-16 h-16 flex-shrink-0 overflow-hidden">
                <Image
                  className="rounded-full object-cover"
                  src={activeTestimonial.image}
                  alt={`Avatar of ${activeTestimonial.name}`}
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#2D3958]">{activeTestimonial.name}</h3>
                <p className="text-sm text-gray-500">{activeTestimonial.title}</p>
              </div>
            </div>

            <div className="text-gray-700 text-[16px] leading-relaxed whitespace-pre-line">
              <p dangerouslySetInnerHTML={{ __html: activeTestimonial.testimony }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
