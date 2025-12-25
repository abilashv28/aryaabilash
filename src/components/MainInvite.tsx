import { motion } from "framer-motion";

export default function MainInvite() {
  return (
    <section className="min-h-screen flex bg-[#5F7F86]">
      {/* LEFT PANEL */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-20 text-white relative">
        <h1 style={{ fontFamily: "Fraunces, serif" }} className="text-6xl md:text-7xl font-light leading-tight">
          Abilash &<br />
          Arya
        </h1>

        <p className="mt-6 text-xl md:text-2xl opacity-90">Invite You To Celebrate Their Wedding</p>

        <p className="mt-4 text-sm opacity-80">Sunday, February 8, 2025</p>
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative bg-[#f8e6f3] overflow-hidden">
        {/* Background Image */}
        <img src="/images/main-section-bgimage.avif" alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-90" />

        {/* Couple Image */}
        <motion.img
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src="/images/20251224_160153.jpg"
          alt="Couple"
          className="relative z-10 w-[22rem] h-[30rem] md:w-[24rem] md:h-[34rem]
                     object-cover shadow-2xl rounded-md"
        />
      </div>
    </section>
  );
}
