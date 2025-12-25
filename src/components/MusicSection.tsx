export default function MusicSection() {
  return (
    <section className="w-full bg-[#f8e6f3] py-20 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 style={{ fontFamily: "serif" }} className="text-5xl md:text-6xl font-normal text-[#7a3b1e] mb-6 leading-tight">
            Every Song Tells a<br />
            Story, Here Is Ours.
          </h2>
          <p className="text-xl text-[#7a3b1e] mb-8">Check out the playlist we’ve curated together.</p>
        </div>
        {/* Right: Music player */}
        <div className="flex-1 flex flex-col items-center md:items-end">
          <img
            src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=500&q=80"
            alt="Campfire"
            className="w-[350px] h-[260px] object-cover rounded-md shadow-lg mb-6"
          />
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
      </div>
    </section>
  );
}
