import { useEffect, useMemo, useState, useCallback } from "react";
import { motion } from "framer-motion";

// CountdownTimer remains the same
function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    let timeLeft = { days: "00", hours: "00", minutes: "00", seconds: "00" };

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      timeLeft = {
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0")
      };
    }
    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const units = ["days", "hours", "minutes", "seconds"];

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-2xl md:text-3xl font-light text-[#222] justify-center">
        {units.map(unit => (
          <div key={unit} className="flex flex-col items-center text-center min-w-[3.5rem]">
            <span>{timeLeft[unit as keyof typeof timeLeft]}</span>
            <span className="text-base md:text-lg text-[#444] capitalize">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LoveSection() {
  const targetDate = useMemo(() => new Date("2026-02-08T10:30:00"), []);

  // Split heading into words
  const heading = "Celebrating Our Love With Those We Love".split(" ");

  return (
    <section className="w-screen min-h-screen bg-[#eceaea] py-16 px-4 flex flex-col items-center overflow-x-hidden">
      <div className="w-full mx-auto flex flex-col md:flex-row md:items-center md:justify-between" style={{ maxWidth: "100rem" }}>
        {/* Left: Image with Animated Heading */}
        <div className="flex-shrink-0 w-full md:w-[500px] flex flex-col justify-start items-center mb-12 md:mb-0 md:pl-0 md:-ml-8">
          {/* Animated Word-by-Word Heading */}
          <motion.h2
            className="text-4xl md:text-6xl font-light text-[#222] mb-6 leading-tight text-center whitespace-pre-line"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // animate once when 50% of heading is in view
          >
            {heading.map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                className="inline-block mr-2">
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <img src="/images/IMG_5397.jpg" alt="Couple" className="object-cover w-full h-full" />
        </div>

        {/* Center: Event Details */}
        <div className="flex-1 min-w-0 max-w-lg flex flex-col justify-start items-center text-center mx-2 md:mx-4 mt-10 md:mt-36">
          <div className="space-y-12 w-full">
            {/* Haldi */}
            <div className="flex items-start gap-6 justify-center">
              <span style={{ fontFamily: "serif" }} className="text-2xl md:text-3xl text-[#444] font-light min-w-[3rem]">
                01.
              </span>
              <div className="text-left">
                <div style={{ fontFamily: "serif" }} className="text-2xl md:text-3xl text-[#444] font-normal mb-2">
                  Haldi
                </div>
                <div className="text-base text-[#444]">
                  Sri Venkateswara Mahal A/C
                  <br />
                  PBR Complex, 23, Mahatma Gandhi Road,
                  <br />
                  Pattabiram, Tamil Nadu – 600072
                </div>
              </div>
            </div>

            {/* Marriage */}
            <div className="flex items-start gap-6 justify-center">
              <span style={{ fontFamily: "serif" }} className="text-2xl md:text-3xl text-[#444] font-light min-w-[3rem]">
                02.
              </span>
              <div className="text-left">
                <div style={{ fontFamily: "serif" }} className="text-2xl md:text-3xl text-[#444] font-normal mb-2">
                  Marriage
                </div>
                <div className="text-base text-[#444]">
                  10:30 AM, Sri Venkateswara Mahal A/C
                  <br />
                  PBR Complex, 23, Mahatma Gandhi Road,
                  <br />
                  Pattabiram, Tamil Nadu – 600072
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Countdown Timer */}
        <div className="flex-shrink-0 w-full md:w-[280px] flex flex-col justify-center items-center mt-12 md:mt-0">
          <img src="/images/flower.avif" alt="Flower" className="w-20 h-20 object-contain mb-6" />
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
    </section>
  );
}
