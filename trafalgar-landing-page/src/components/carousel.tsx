const Carousel = () => {
  return (
    <div className="w-[1220px] h-[502px] flex justify-center items-center mx-auto mt-[251px] relative">
      <img src="/element.png" alt="" className="absolute bottom-20 -left-3"/>
      <div className="w-[1120px] h-[425px] bg-[linear-gradient(208.18deg,#67C3F3_9.05%,#5A98F2_76.74%)] rounded-3xl relative">
        <img src="/element3.png" alt="" className="absolute -right-12 -top-4" />
        <h2 className="font-mulish font-bold text-4xl leading-12 tracking-normal text-white text-center mt-16">
          What our customer are saying
        </h2>
        <div className="w-14 h-0.5 bg-white mx-auto mt-[25px]"></div>
        <div className="flex justify-center gap-[110px] mt-[77px]">
          <div className="flex items-center space-x-[29px]">
            <div className="size-[141px] rounded-full border-8 border-white overflow-hidden">
              <img
                src="/dude.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white">
              <h3 className="font-mulish font-bold text-[22px] leading-11 tracking-normal">
                Edward Newgate
              </h3>
              <p className="font-mulish font-normal text-lg tracking-normal">
                Founder Circle
              </p>
            </div>
          </div>
          <div className="w-[420px] h-[120px] ">
            <p className="font-mulish font-normal text-white text-[19px] leading-[30px] tracking-normal">
              “Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
