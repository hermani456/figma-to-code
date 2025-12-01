const Hero = () => {
  return (
    <div className="relative">
      <img src="/element.png" alt="" className="absolute top-0 left-0" />
      <div className=" w-full max-w-[1217px] mx-auto px-6 mt-[84px]">
        <main className="flex justify-between items-center">
          <div className="w-[445px] h-[338px] font-mulish">
            <h1 className="text-5xl font-bold leading-14 tracking-normal">
              Virtual healthcare for you
            </h1>
            <p className="mt-[25px] font-light text-[21px] leading-8 text-[#7D7987] tracking-normal">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online
              <br />
              for everyone
            </p>
            <button className="w-[200px] h-14 flex items-center justify-center rounded-[55px] bg-[#458FF6] text-white font-bold text-[18px] leading-[60px] tracking-normal mt-[45px] hover:bg-[#367CE2] transition-colors duration-200">
              Consult today
            </button>
          </div>
          <div className="w-[693px] h-[598px]">
            <img src="/hero.png" alt="" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
