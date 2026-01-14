import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/galleryImages/1000082918.jpg",
    text: "Every love story is beautiful, but ours is our favorite.",
    name: "Abilash & Arya",
    year: "2026",
  },
  {
    image: "/images/galleryImages/1000082911.jpg",
    text: "A love written in glances, sealed with laughter, and cherished forever.",
    name: "Arya & Abilash",
    year: "2034",
  },
  {
    image: "/images/galleryImages/1000082914.jpg",
    text: "Moments fade, memories stay — love lives in every frame.",
    name: "Arya & Abilash",
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
