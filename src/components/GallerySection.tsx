import { motion } from "framer-motion";

export default function GallerySection() {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4 bg-white">
      <div className="relative w-full max-w-6xl h-[600px] mx-auto flex items-center justify-center">

        {/* Left image — from TOP */}
        <motion.img
          src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80"
          alt="Gallery 1"
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute left-32 top-24 w-80 h-96 object-cover rounded-md shadow-lg z-10 hidden md:block"
        />

        {/* Center image — from BOTTOM */}
        <motion.img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
          alt="Gallery 2"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="relative w-[420px] h-[560px] object-cover rounded-md shadow-2xl z-20 mx-auto"
        />

        {/* Right image — from TOP */}
        <motion.img
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=500&q=80"
          alt="Gallery 3"
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute right-32 top-0 w-80 h-96 object-cover rounded-md shadow-lg z-10 hidden md:block"
        />

        {/* Mobile — no animation (clean & fast) */}
        <div className="flex flex-col gap-4 w-full md:hidden">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80"
            alt="Gallery 1"
            className="w-full h-60 object-cover rounded-md shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Gallery 2"
            className="w-full h-60 object-cover rounded-md shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=500&q=80"
            alt="Gallery 3"
            className="w-full h-60 object-cover rounded-md shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
