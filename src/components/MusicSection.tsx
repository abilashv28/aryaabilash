import { motion } from "framer-motion";
export default function MusicSection() {
  return (
    <section className="w-full bg-[#f8e6f3] py-20 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        {/* Left: Text */}
        <div className="flex flex-col justify-around h-[470px]">
          <div>
            <motion.h2
              style={{ fontFamily: "serif" }}
              className="text-5xl md:text-6xl font-normal text-[#7a3b1e] mb-6 leading-tight text-center"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}>
              Every Song Tells a<br />
              Story, Here Is Ours.
            </motion.h2>

            <p className="text-xl text-[#7a3b1e] mb-8">Check out the playlist we’ve curated together.</p>
          </div>
          <div className="w-full max-w-md">
            <h3 style={{ fontFamily: "serif" }} className="text-3xl text-[#7a3b1e] font-normal mb-1">
              Time Goes By
            </h3>
            <p className="text-[#7a3b1e] mb-2">The Pimples / D&O Playlist</p>
            <audio controls className="w-full">
              <source src="/our-song.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-end">
          <img
            src="/images/musicsectionimage.jpg"
            alt="Couple"
            className="
    w-[350px]
    aspect-[3/4]
    object-cover
    rounded-md
    shadow-lg
    mb-6
  "
          />
        </div>
      </div>
    </section>
  );
}
