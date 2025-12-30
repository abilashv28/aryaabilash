import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    text:
      "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
    name: "Abilash & Arya",
    year: "2026",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    text:
      "A beautiful story that captures love, moments, and memories forever.",
    name: "Mary & John",
    year: "2034",
  },
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    text:
      "Every picture tells a story worth remembering.",
    name: "Anna & Leo",
    year: "2033",
  },
];

export default function GallerySection() {
  return (
    <section className="w-full bg-[#f1f2ef] py-16 px-4">

      {/* ================= DESKTOP ================= */}
      <div className="relative w-full max-w-6xl h-[600px] mx-auto items-center justify-center hidden md:flex">
        <motion.img
          src={slides[0].image}
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="absolute left-32 top-24 w-80 h-96 object-cover rounded-md shadow-lg z-10"
        />

        <motion.img
          src={slides[1].image}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
          className="relative w-[420px] h-[560px] object-cover rounded-md shadow-2xl z-20"
        />

        <motion.img
          src={slides[2].image}
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="absolute right-32 top-0 w-80 h-96 object-cover rounded-md shadow-lg z-10"
        />
      </div>

      {/* ================= MOBILE SWIPER ================= */}
      <div className="md:hidden max-w-sm mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,               // ⏱ 3 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          spaceBetween={24}
          slidesPerView={1}
          className="pb-10"
        >
          {slides.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-md shadow-lg overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[320px] object-cover"
                />

                <div className="p-6 text-center">
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    “{item.text}”
                  </p>

                  <p className="mt-4 text-sm font-semibold text-gray-800">
                    {item.name} · {item.year}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
