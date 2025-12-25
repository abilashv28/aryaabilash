import { useEffect, useMemo, useState, useCallback } from "react";

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00"
    };
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

  return (
    <div className="w-full flex flex-col items-center mb-10">
      <div className="flex justify-center gap-3 md:gap-6 text-[#222] text-2xl md:text-3xl font-light tracking-widest">
        <span>{timeLeft.days}</span>
        <span className="mx-1">:</span>
        <span>{timeLeft.hours}</span>
        <span className="mx-1">:</span>
        <span>{timeLeft.minutes}</span>
        <span className="mx-1">:</span>
        <span>{timeLeft.seconds}</span>
      </div>
      <div className="flex justify-center gap-8 mt-2 text-[#444] text-base md:text-lg font-normal">
        <span>Days</span>
        <span>Hours</span>
        <span>Minutes</span>
        <span>Seconds</span>
      </div>
    </div>
  );
}

export default function LoveSection() {
  // Set your wedding date here
  const targetDate = useMemo(() => new Date("2025-12-31T16:00:00"), []);
  return (
    <section className="w-screen min-h-screen bg-[#eceaea] py-16 px-4 flex flex-col items-center overflow-x-hidden">
      <div className="w-full mx-auto flex flex-col md:flex-row md:items-center md:justify-between" style={{ maxWidth: "100rem" }}>
        {/* Left: Image with Title on Top */}
        <div className="flex-shrink-0 w-full md:w-[580px] flex flex-col justify-start items-center mb-12 md:mb-0 md:pl-0 md:-ml-8">
          <h2
            style={{ fontFamily: "serif" }}
            className="text-4xl md:text-6xl font-light text-[#222] mb-6 leading-tight whitespace-pre-line text-center">
            Celebrating Our Love With Those We Love
          </h2>
          <img src="/images/IMG_5397.jpg" alt="Couple" className="object-cover w-full h-full" />
        </div>
        {/* Center: Text Content */}
        <div className="flex-1 min-w-0 max-w-xl flex flex-col justify-center items-center text-center mx-2 md:mx-8">
          <div className="space-y-12 mt-8 w-full">
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
        <div className="flex-shrink-0 w-full md:w-[220px] flex flex-col justify-center items-center mt-12 md:mt-0">
          <img src="/images/flower.avif" alt="Flower" className="w-20 h-20 object-contain mb-6" />
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
    </section>
  );
}
