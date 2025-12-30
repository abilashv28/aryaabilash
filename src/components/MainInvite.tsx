import { motion } from "framer-motion";

export default function MainInvite() {
  return (
    <section className="min-h-screen bg-[#5F7F86] relative overflow-hidden">

      {/* MOBILE LAYOUT */}
      <div className="relative md:hidden text-center text-white">

        {/* TOP CONTENT */}
        <div className="pt-20 px-6 relative z-20">
          <h1
            style={{ fontFamily: "Fraunces, serif" }}
            className="text-4xl font-light leading-tight"
          >
            Abilash & Arya
          </h1>

          <p className="mt-4 text-lg opacity-90">
            Invite You To Celebrate Our Wedding
          </p>

          <p className="mt-2 text-sm opacity-80">
            Sunday, February 8, 2025
          </p>
        </div>

        {/* FLOATING IMAGE */}
        <motion.img
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="/images/20251224_160153.jpg"
          alt="Couple"
          className="
            relative
            z-30
            mx-auto
            mt-10
            w-[16rem]
            h-[22rem]
            object-cover
            rounded-md
            shadow-2xl
          "
        />

        {/* BACKGROUND IMAGE SECTION */}
        <div className="relative mt-[-6rem] h-[55vh] w-full">
          <img
            src="/images/main-section-bgimage.avif"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* DESKTOP LAYOUT (UNCHANGED) */}
      <div className="hidden md:flex min-h-screen">
        
        {/* LEFT PANEL */}
        <div className="w-1/2 flex flex-col justify-center px-20 text-white relative z-10">
          <h1
            style={{ fontFamily: "Fraunces, serif" }}
            className="text-7xl font-light leading-tight"
          >
            Abilash &<br />Arya
          </h1>

          <p className="mt-6 text-2xl opacity-90">
            Invite You To Celebrate Our Wedding
          </p>

          <p className="mt-4 text-sm opacity-80">
            Sunday, February 8, 2025
          </p>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-1/2 relative bg-[#f8e6f3] overflow-hidden">
          <img
            src="/images/main-section-bgimage.avif"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
        </div>

        {/* DESKTOP FLOAT IMAGE */}
        <motion.img
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src="/images/20251224_160153.jpg"
          alt="Couple"
          className="
            absolute
            left-[40%]
            top-[20%]
            -translate-x-1/2
            -translate-y-1/2
            z-20
            w-[24rem]
            h-[34rem]
            object-cover
            shadow-2xl
            rounded-md
          "
        />
      </div>
    </section>
  );
}
